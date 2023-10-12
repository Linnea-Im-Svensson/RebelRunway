import type { StaticImageData } from "next/image";
import Image from "next/image";
import React from "react";

type ContainerProps = {
  heading: React.ReactNode;
  bgImg: string | StaticImageData;
  bgColor?: string;
  alt: string;
};

function SectionContainer({ heading, bgImg, alt, bgColor }: ContainerProps) {
  return (
    <section
      className={`flex items-center justify-around rounded-lg ${bgColor} mx-4 mt-20`}
    >
      <div className="pl-10 pr-10 pt-6 md:mr-20 md:pl-32">
        <h1 className="font-poppins text-2xl font-bold md:text-4xl">
          {heading}
        </h1>
        <p className="text-lg md:font-medium">
          Live for Influential and Innovative fashion!
        </p>

        <button className="mt-4 cursor-pointer rounded-md bg-black px-3 py-2 text-white md:px-4 md:py-3">
          Explore Now
        </button>
      </div>

      <div className="md:ml-20">
        <Image
          src={bgImg}
          alt={alt}
          width={400}
          height={500}
          className="max-h-[100%]"
        />
      </div>
    </section>
  );
}

export default SectionContainer;
