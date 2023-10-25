/* eslint-disable @typescript-eslint/no-floating-promises */
import { signIn } from "next-auth/react";

export default function AccessDenied() {
  return (
    <div className="mt-10 flex flex-col items-center gap-6 rounded-md bg-neutral-900 p-12 text-white dark:border-neutral-800">
      <div>
        <h1 className="text-xl font-semibold">Access Denied</h1>
      </div>
      <a
        href="api/auth/signin"
        onClick={(e) => {
          e.preventDefault();
          signIn();
        }}
        className="rounded-md bg-primary p-2 dark:border-neutral-800 dark:bg-neutral-900"
      >
        Log in
      </a>
    </div>
  );
}
