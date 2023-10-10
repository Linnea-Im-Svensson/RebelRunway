import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

const FavoriteBtn = () => {
  return (
    <button className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-neutral-50 bg-white">
      <AiOutlineHeart size={25} color="red" />
      {/* <AiFillHeart size={20} color="red" /> */}
    </button>
  );
};

export default FavoriteBtn;
