import { signIn } from "next-auth/react";
import Image from "next/image";
import React from "react";

const SignIn = () => {
  return (
    <div className="flex w-full flex-col gap-4 p-4">
      <form className="flex flex-col">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          className="mb-2 rounded-md bg-neutral-200 p-2 outline-none dark:bg-neutral-700"
        />
        <label htmlFor="username">Password:</label>
        <input
          type="password"
          className="mb-4 rounded-md bg-neutral-200 p-2 outline-none dark:bg-neutral-700"
        />
        <button className="mb-2 rounded-lg bg-primary py-2 text-black">
          Login
        </button>
      </form>
      <div>
        <div className="relative h-[2px] w-full bg-black dark:bg-white">
          <p className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] bg-white px-4 text-black dark:bg-neutral-900 dark:text-white">
            Or
          </p>
        </div>
      </div>
      <div>
        <button
          className="flex w-full items-center gap-4 rounded-lg bg-neutral-100 px-4 py-2 text-black"
          onClick={() =>
            void signIn("google", { callbackUrl: "/", redirect: true })
          }
        >
          <Image
            src="/google-logo.png"
            alt="google logo"
            height={30}
            width={30}
            priority
            className="mr-4"
          />
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default SignIn;
