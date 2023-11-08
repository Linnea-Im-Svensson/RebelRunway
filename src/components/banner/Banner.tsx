import Image from "next/image";

const Banner = () => {
  return (
    <div className="flex h-12 w-screen justify-center gap-2 overflow-hidden rounded-md bg-white p-2 md:h-20 md:w-full md:justify-around md:gap-20 md:rounded-md md:px-8">
      <Image
        height={50}
        width={50}
        className="h-full w-auto"
        src="/adidas.jpg"
        alt="adidas"
      />

      <Image
        height={50}
        width={50}
        className="h-full w-auto"
        src="/the-north-face.jpg"
        alt="The North Face"
      />
      <Image
        height={50}
        width={50}
        className="h-full w-auto"
        src="/reebok.jpg"
        alt="Reebok"
      />

      <Image
        height={50}
        width={50}
        className="h-full w-auto"
        src="/nike.jpg"
        alt="Nike"
      />
      <Image
        height={50}
        width={50}
        className="h-full w-auto"
        src="/stone-island.jpg"
        alt="Stone Island"
      />
      <Image
        height={50}
        width={50}
        className="h-full w-auto"
        src="/vans.jpg"
        alt="Vans"
      />
    </div>
  );
};

export default Banner;
