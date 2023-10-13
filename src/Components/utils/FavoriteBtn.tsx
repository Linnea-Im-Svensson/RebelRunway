import { Product } from "@prisma/client";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { api } from "~/utils/api";

type FavoriteBtnProps = {
  productId: string;
};

const FavoriteBtn = ({ productId }: FavoriteBtnProps) => {
  const mutation = api.favorite.addToFavorites.useMutation();

  const [favorited, setFavorited] = useState(false);

  const favoriteProducts = api.favorite.getFavoriteProducts.useQuery().data;

  useEffect(() => {
    favoriteProducts?.forEach((product) => {
      product.product.id === productId && setFavorited(true);
    });
  }, []);

  return (
    <button
      onClick={() => mutation.mutateAsync({ productId })}
      className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-neutral-50 bg-white"
    >
      {favorited ? (
        <AiFillHeart size={20} color="red" />
      ) : (
        <AiOutlineHeart size={25} color="red" />
      )}
    </button>
  );
};

export default FavoriteBtn;
