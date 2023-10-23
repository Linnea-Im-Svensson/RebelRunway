import { AiOutlineCheck } from "react-icons/ai";

function SuccessPage() {
  return (
    <div className="border-natural-500 mt-20 flex flex-col items-center justify-center rounded-sm pb-16 pl-8 pr-8 pt-10 shadow-xl dark:bg-white md:mb-10 md:mt-10 md:w-fit md:px-20">
      <div className=" mb-10 rounded-full bg-green-50 p-10 dark:bg-green-100  md:p-16 ">
        <AiOutlineCheck size={60} className="text-green-500" />
      </div>
      <h1 className=" font-poppins text-lg font-bold leading-4 tracking-wide text-neutral-400 md:text-2xl">
        Order #12345678
      </h1>
      <p className="mb-5 font-poppins text-xl font-bold text-neutral-800 md:text-3xl">
        Your payment was successfull.
      </p>
      <p className="text-natural-800 font-poppins font-bold dark:text-neutral-800 ">
        hejsan svejsan
      </p>

      <button
        /* onClick={} */ className="mb-10 mt-7 rounded-full  bg-neutral-800 px-5 py-3 font-poppins text-neutral-100"
      >
        Return to cart
      </button>
    </div>
  );
}

export default SuccessPage;
