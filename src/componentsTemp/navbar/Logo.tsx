import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="text-3xl font-semibold">
      <Image
        src="/logo.png"
        alt="Rebel Runway logo"
        priority
        height={70}
        width={120}
        className="rounded-sm"
      />
    </Link>
  );
};

export default Logo;
