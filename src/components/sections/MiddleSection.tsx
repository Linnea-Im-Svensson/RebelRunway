import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

type sectionProps = {
  heading: React.ReactNode;
  myImg: string | StaticImport;
  alt: string;
  bgColor: string;
};

const middleSection = ({ heading, myImg, alt, bgColor }: sectionProps) => {
  return (
    <section
      className={`flex items-center justify-around rounded-lg ${bgColor} mb-20 p-20 `}
    >
      <div className="pl-10 pr-10 pt-6 md:mr-20 md:pl-32">
        <h1 className="font-poppins text-2xl font-bold md:text-4xl">
          {heading}
        </h1>
        <p className="text-lg md:font-medium">Shoes</p>
        <button className="mt-4 cursor-pointer rounded-md bg-black px-3 py-2 text-white md:px-4 md:py-3">
          Explore Now
        </button>
      </div>
      <div className="flex">
        <Image
          src={myImg}
          width={300}
          height={400}
          alt={alt}
          className="max-h-[100%] min-h-full rounded-md"
        />
      </div>
    </section>
  );
};

export default middleSection;
