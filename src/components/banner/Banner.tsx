const Banner = () => {
  return (
    <div className=" flex w-screen justify-center gap-2 overflow-hidden rounded-md bg-white px-2 md:w-auto md:justify-around md:gap-20 md:rounded-md md:px-8">
      <img className="h-12 md:h-20" src="adidas.jpg" alt="adidas" />

      <img
        className="h-12 md:h-20"
        src="the-north-face.jpg"
        alt="The North Face"
      />
      <img className=" h-12 md:h-20" src="reebok.jpg" alt="Reebok" />

      <img className="h-12 md:h-20 md:w-20" src="nike.jpg" alt="Nike" />
      <img
        className="h-12 md:h-20 "
        src="stone-island.jpg"
        alt="Stone Island"
      />
      <img className="h-12 md:h-20 md:w-20" src="vans.jpg" alt="Vans" />
    </div>
  );
};

export default Banner;
