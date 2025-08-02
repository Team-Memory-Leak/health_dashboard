import Image from "next/image";
import Link from "next/link";
import HarcLogo from "@/public/images/Harc_Logo.webp";

const navbar = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-harc-darkblue text-harc-gray font-harc-main flex w-full flex-row justify-end gap-5 p-5 text-xl">
        <Link href="/">Option 1</Link>
        <Link href="/">Option 2</Link>
        <Link href="/">Option 3</Link>
        <Link href="/">Option 4</Link>
      </div>
      <Image
        src={HarcLogo}
        alt="Harc Logo"
        className="w-1/4 md:w-1/6 lg:w-1/8"
      />
    </div>
  );
};

export default navbar;
