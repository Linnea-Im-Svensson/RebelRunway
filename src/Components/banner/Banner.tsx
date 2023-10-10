const Banner = () => {
  return (
    <div>
      <div className="flex gap-16 rounded-md bg-slate-50 px-14 py-3">
        <img
          className="obejct-scale-down w-15 h-20"
          src="adidas.jpg"
          alt="adidas"
        />

        <img
          className="obejct-scale-down w-15 h-20 "
          src="the-north-face.jpg
        "
          alt="theNorthFace"
        />
        <img
          className="obejct-scale-down w-15 h-20"
          src="reebok.jpg"
          alt="Reebok"
        />
        <img
          className="obejct-scale-down w-15 h-20 "
          src="nike.jpg"
          alt="Nike"
        />
        <img
          className="obejct-scale-down w-15 h-20"
          src="stone-island.jpg"
          alt="Stone Island"
        />
        <img
          className="obejct-scale-down w-15 h-20"
          src="vans.jpg"
          alt="Vans"
        />
      </div>
    </div>
  );
};

export default Banner;
