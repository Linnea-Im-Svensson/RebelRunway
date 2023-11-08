import { signIn, signOut, useSession } from "next-auth/react";
import { api } from "~/utils/api";
import ProductCard from "~/components/products/ProductCard";
import hoodies from "../../public/hoodie.jpg";
import beigeHoodie from "../../public/beige-hoodie.jpg";
import blueSneakers from "../../public/blue-sneakers.jpg";
// import bgYellow from "../../public/bgImages/bg-yellow.jpg";
import bgWomanHat from "../../public/bgImages/bg-woman-hat.png";
import ProductContainer from "~/components/products/ProductContainer";
import SectionContainer from "~/components/sections/SectionContainer";
import MiddleSection from "~/components/sections/MiddleSection";
import manBuyingShoes from "../../public/bgImages/man-shoes.png";
import Banner from "~/components/banner/Banner";

export default function Home() {
  return (
    <div>
      <SectionContainer
        heading={
          <>
            <span className="block">EXPLORE</span>
            <span className="block">UNIQUE</span>
            <span className="block">CLOTHES</span>
          </>
        }
        bgImg={bgWomanHat.src}
        bgColor="bg-primary"
        alt="Woman wearing a black hat"
      />
      <Banner />
      <ProductContainer title="New Arrivals">
        <ProductCard
          productName="Hoodies"
          img={hoodies}
          cta="Explore Now!"
          url="/"
        />
        <ProductCard
          productName="Hoodies"
          img={beigeHoodie}
          cta="Explore Now!"
          url="/"
        />
        <ProductCard
          productName="Hoodies"
          img={blueSneakers}
          cta="Explore Now!"
          url="/"
        />
      </ProductContainer>
      <MiddleSection
        heading={
          <>
            <span className="block">EXPLORE</span>
            <span className="block">UNIQUE</span>
            <span className="block">SHOES</span>
          </>
        }
        alt="man buying shoes"
        bgColor="bg-primary"
        myImg={manBuyingShoes}
      />
    </div>
  );
}
