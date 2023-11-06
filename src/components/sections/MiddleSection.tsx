import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";

type sectionProps = {
  heading: React.ReactNode;
  myImg: string | StaticImport;
  alt: string;
  bgColor: string;
};

const middleSection = ({ heading, myImg, alt, bgColor }: sectionProps) => {
  return (
    <section
      className={`flex items-center justify-around rounded-lg p-8 md:flex-row ${bgColor} mb-20 md:p-20 `}
    >
      <div className="">
        <Image
          src={myImg}
          width={400}
          height={500}
          alt={alt}
          className="max-h-[100%] "
        />
      </div>
      <div className="pl-5 pt-5 md:mr-10 md:pl-24 ">
        <h1 className=" mb-5 font-poppins text-2xl font-bold md:mb-5 md:text-4xl">
          {heading}
        </h1>
        <p className="text-3xl font-bold text-white dark:text-black">
          SALE NOW
        </p>
        <p className="text-lg text-black dark:text-white md:mb-5 md:font-medium">
          Discover Your Sole Mate.
        </p>
        <Link href={"/shoes"}>
          <button className="mt-4 cursor-pointer rounded-md bg-black px-3 py-2 text-white md:px-4 md:py-3">
            Explore Now
          </button>
        </Link>
      </div>
    </section>
  );
};

export default middleSection;
