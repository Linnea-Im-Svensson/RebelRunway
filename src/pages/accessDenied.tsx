/* eslint-disable @typescript-eslint/no-floating-promises */
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/router";

export default function AccessDenied() {
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();

  function closeModal() {
    router.push(`/`);

    setIsOpen(false);
  }
  return (
    <div className="fixed left-0 top-0 z-[9999] flex h-full w-full items-center justify-center">
      <div className="flex h-1/4 flex-col items-center justify-center gap-2 rounded bg-gray-400 p-4 font-semibold shadow-md md:h-1/3 md:w-1/3">
        {isOpen && (
          <div className="flex flex-col items-center gap-6">
            <div>
              <h1 className="text-3xl font-semibold text-gray-700">
                Access Denied
              </h1>
            </div>
            <div className="flex gap-3">
              <a
                href="api/auth/signin"
                onClick={(e) => {
                  e.preventDefault();
                  signIn();
                }}
                className="rounded-md bg-primary px-6 py-2 font-semibold text-gray-700 hover:bg-cyan-300 dark:border-neutral-800 dark:text-white"
              >
                Log in
              </a>
              <button
                className="rounded-md bg-primary px-6 py-2 font-semibold text-gray-700 hover:bg-cyan-300 dark:border-neutral-800 dark:text-white"
                onClick={closeModal}
              >
                Go to Homepage
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
