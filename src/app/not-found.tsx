import Link from "next/link";
import Image from "next/image";
import Harc_Logo from "@/public/images/Harc_Logo.webp";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center bg-gray-50 px-4 py-24 text-center">
      <Image
        src={Harc_Logo}
        alt="Harc Logo"
        className="mb-8 h-auto w-32"
        priority
      />

      <h1 className="font-harc-main text-harc-darkblue mb-4 text-6xl font-bold">
        404
      </h1>

      <p className="font-harc-main text-harc-darkblue mb-8 max-w-2xl text-2xl font-semibold">
        Oops! The page you’re looking for doesn’t exist.
      </p>

      <Link
        href="/"
        className="font-harc-main bg-harc-darkblue rounded-lg px-6 py-3 font-semibold text-white"
      >
        Go Back Home
      </Link>
    </div>
  );
}
