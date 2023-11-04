import Image from "next/image";
import { useSession } from "next-auth/react";
import SignIn from "~/components/signIn/SignIn";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Register from "~/components/signIn/Register";

const signInPage = () => {
  const { data: sessionData } = useSession();
  const router = useRouter();
  const [notRegistered, setNotRegistered] = useState(false);

  sessionData?.user && router.push("/profile");

  return !sessionData?.user ? (
    <div className="flex flex-col items-center justify-center gap-4 pt-8">
      <div className="w-[400px] md:w-[500px]">
        <Image
          src="/logo-slogan.png"
          alt="Rebel Runway logo"
          height={300}
          width={500}
          className="h-auto w-full rounded-xl"
        />
      </div>
      <div className="w-96">{!notRegistered ? <SignIn /> : <Register />}</div>
      {!notRegistered ? (
        <p>
          Not registered?{" "}
          <span>
            <button
              onClick={() => setNotRegistered(true)}
              className="mb-6 text-primary"
            >
              Register here
            </button>
          </span>
        </p>
      ) : (
        <p>
          Already a member?{" "}
          <span>
            <button
              onClick={() => setNotRegistered(false)}
              className="mb-6 text-primary"
            >
              Login
            </button>
          </span>
        </p>
      )}
    </div>
  ) : (
    <></>
  );
};

export default signInPage;
