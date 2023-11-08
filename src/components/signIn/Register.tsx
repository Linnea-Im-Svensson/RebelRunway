import { signIn } from "next-auth/react";
import React, { FormEventHandler, useState } from "react";
import { api } from "~/utils/api";

const Register = () => {
  const [formInfo, setFormInfo] = useState({
    email: "",
    password: "",
    password2: "",
  });
  const [missinEmail, setMissingEmail] = useState(false);
  const [missinPassword, setMissingPassword] = useState(false);
  const [missinPassword2, setMissingPassword2] = useState(false);
  const [notMatching, setNotMatching] = useState(false);

  const { mutate } = api.user.createUser.useMutation();

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (formInfo.email === "") {
      setMissingEmail(true);
      setTimeout(() => {
        setMissingEmail(false);
      }, 2000);
    } else if (formInfo.password === "") {
      setMissingPassword(true);
      setTimeout(() => {
        setMissingPassword(false);
      }, 2000);
    } else if (formInfo.password2 === "") {
      setMissingPassword2(true);
      setTimeout(() => {
        setMissingPassword2(false);
      }, 2000);
    } else if (formInfo.password !== formInfo.password2) {
      setNotMatching(true);
      setTimeout(() => {
        setNotMatching(false);
      }, 2000);
    } else {
      console.log(formInfo);
      mutate({ email: formInfo.email, password: formInfo.password });
      // signIn("credentials", {
      //   email: formInfo.email,
      //   password: formInfo.password,
      // });
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
          className="mb-2 rounded-md bg-neutral-200 p-2 outline-none dark:bg-neutral-700"
        />
        {missinPassword && (
          <p className="-translate-y-2 text-red-400">Enter valid password</p>
        )}
        <label htmlFor="password">Re-enter password:</label>
        <input
          type="password"
          id="password2"
          name="password2"
          value={formInfo.password2}
          onChange={(e) =>
            setFormInfo({ ...formInfo, password2: e.target.value })
          }
          className="mb-4 rounded-md bg-neutral-200 p-2 outline-none dark:bg-neutral-700"
        />
        {missinPassword2 && (
          <p className="-translate-y-4 text-red-400">Re-enter password</p>
        )}
        {notMatching && (
          <p className="-translate-y-4 text-red-400">
            Passwords are not matching
          </p>
        )}
        <button className="mb-2 rounded-lg bg-primary py-2 text-black">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
