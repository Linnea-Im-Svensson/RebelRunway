"use client";
import React from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { api } from "~/utils/api";
import { useRouter } from "next/router";

const Wishlist = () => {
  const ctx = api.useContext();

  const router = useRouter();
  const { data: sessionData } = useSession();

  const getFavorites = api.favorite.getFavoriteProducts.useQuery();

  const { mutate } = api.favorite.addOrRemoveFavorites.useMutation({
    onSuccess: () => {
      ctx.favorite.getFavoriteProducts.invalidate();
    },
  });

  const goToCategory = async (cat: string, subCat: string) => {
    await router.push(`/${cat}/${subCat}`);
  };

  return (
    <section className="mt-14 w-[90vw] md:w-[50vw]">
      {sessionData && getFavorites && getFavorites.data?.length === 0 ? (
        <div className="mb-12 text-center text-2xl font-semibold">
          Your wishlist is empty...
        </div>
      ) : (
        <div className="mt-4 grid grid-cols-3 border-b-2 border-neutral-200 pb-6">
          {getFavorites.data?.map((favorite) => {
            return (
              <div
                key={favorite.product.id}
                className="mb-10 mr-4 flex flex-col justify-between"
              >
                <div>
                  <div>
                    <Image
                      src={favorite.product.image}
                      width={120}
                      height={120}
                      alt={favorite.product.name}
                      className="rounded-md"
                    />
                  </div>

                  <div>
                    <h2 className="text-base font-semibold">
                      {favorite.product.name}
                    </h2>
                    <p className="text-sm">{`Color: ${favorite.product.color}`}</p>
                    <p className="text-sm">{`Price: ${favorite.product.price}`}</p>
                  </div>
                </div>

                <div className="my-2 mt-3">
                  <button
                    onClick={() => mutate({ productId: favorite.product.id })}
                    className="mr-2 cursor-pointer rounded-md bg-gray-400 px-2 py-1 text-xs text-white hover:bg-neutral-300 dark:hover:bg-neutral-500 md:px-3 md:py-2 md:text-sm"
                  >
                    Delete
                  </button>
                  <button
                    // eslint-disable-next-line @typescript-eslint/no-misused-promises
                    onClick={() =>
                      goToCategory(
                        favorite.product.category,
                        favorite.product.subCategory,
                      )
                    }
                    className="cursor-pointer rounded-md bg-black px-2 py-1 text-xs text-white md:px-3 md:py-2 md:text-sm"
                  >
                    {`See more ${favorite.product.subCategory}`}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default Wishlist;
