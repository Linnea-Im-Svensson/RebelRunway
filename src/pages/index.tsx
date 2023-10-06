import { signIn, signOut, useSession } from "next-auth/react";
import { api } from "~/utils/api";
import ProductCard from "../components/products/ProductCard";
import hoodies from "../../public/hoodie.jpg";
// import bgYellow from "../../public/bgImages/bg-yellow.jpg";
import bgWomanHat from "../../public/bgImages/bg-woman-hat.png";
import ProductContainer from "../components/products/ProductContainer";
import SectionContainer from "../components/sections/SectionContainer";

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <SectionContainer
        heading={
          <>
            <span className="block">EXPLORE</span>
            <span className="block">UNIQUE</span>
            <span className="block">CLOTHES</span>
          </>
        }
        bgImg={bgWomanHat.src}
        bgColor="#E8DA7B"
        alt="Woman wearing a black hat"
      />

      <ProductContainer title="New Arrivals">
        <ProductCard
          productName="Hoodies"
          img={hoodies}
          cta="Explore Now!"
          url="/"
        />
        <ProductCard
          productName="Hoodies"
          img={hoodies}
          cta="Explore Now!"
          url="/"
        />
        <ProductCard
          productName="Hoodies"
          img={hoodies}
          cta="Explore Now!"
          url="/"
        />
        <ProductCard
          productName="Hoodies"
          img={hoodies}
          cta="Explore Now!"
          url="/"
        />
        <ProductCard
          productName="Hoodies"
          img={hoodies}
          cta="Explore Now!"
          url="/"
        />
      </ProductContainer>
    </>
  );
}

function AuthShowcase() {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined },
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
}
