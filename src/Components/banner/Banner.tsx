const Banner = () => {
  return (
    <div className=" flex items-center gap-6 rounded-md bg-white px-2 py-2 md:gap-20">
      <img
        className=" h-10 w-10 md:h-20 md:w-20"
        src="adidas.jpg"
        alt="adidas"
      />

      <img
        className=" h-10 w-10 md:h-20 md:w-20 "
        src="the-north-face.jpg"
        alt="theNorthFace"
      />
      <img
        className=" h-10 w-10 md:h-20 md:w-20"
        src="reebok.jpg"
        alt="Reebok"
      />

      <img className="h-10 w-10 md:h-20 md:w-20" src="nike.jpg" alt="Nike" />
      <img
        className="h-10 w-10 md:h-20 md:w-20"
        src="stone-island.jpg"
        alt="Stone Island"
      />
      <img className="h-10 w-10 md:h-20  md:w-20" src="vans.jpg" alt="Vans" />
    </div>
  );
};

export default Banner;
