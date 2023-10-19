import Image from "next/image";
import { useSession } from "next-auth/react";
import SignIn from "~/components/signIn/SignIn";
import { useRouter } from "next/router";
import { useEffect } from "react";

const signInPage = () => {
  const { data: sessionData } = useSession();
  const router = useRouter();

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
      <div className="w-96">
        <SignIn />
      </div>
    </div>
  ) : (
    <></>
  );
};

export default signInPage;
