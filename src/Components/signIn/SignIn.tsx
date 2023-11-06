import { signIn } from "next-auth/react";
import Image from "next/image";
import React, { FormEventHandler, useState } from "react";

const SignIn = () => {
  const [formInfo, setFormInfo] = useState({ email: "", password: "" });
  const [missinEmail, setMissingEmail] = useState(false);
  const [missinPassword, setMissingPassword] = useState(false);
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (formInfo.email !== "") {
      setMissingEmail(false);
    }
    if (formInfo.password !== "") {
      setMissingPassword(false);
    }

    if (formInfo.email === "") {
      setMissingEmail(true);
    } else if (formInfo.password === "") {
      setMissingPassword(true);
    } else {
      console.log(formInfo);
      signIn("credentials", {
        email: formInfo.email,
        password: formInfo.password,
        callbackUrl: "/",
      });
    }
  };
  return (
    <div className="flex w-full flex-col gap-4">
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formInfo.email}
          onChange={(e) => setFormInfo({ ...formInfo, email: e.target.value })}
          className="mb-2 rounded-md bg-neutral-200 p-2 outline-none dark:bg-neutral-700"
        />
        {missinEmail && (
          <p className="-translate-y-2 text-red-400">Enter valid email</p>
        )}
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formInfo.password}
          onChange={(e) =>
            setFormInfo({ ...formInfo, password: e.target.value })
          }
          className="mb-4 rounded-md bg-neutral-200 p-2 outline-none dark:bg-neutral-700"
        />
        {missinPassword && (
          <p className="-translate-y-4 text-red-400">Enter valid password</p>
        )}
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
