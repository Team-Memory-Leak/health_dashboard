import Image from "next/image";
import HarcLogo from "@/public/images/Harc_Logo.webp";

const navbar = () => {
  return (
    <div className="flex flex-col">
      <div className="flex w-full flex-row justify-center gap-5 bg-blue-900 p-5 text-2xl">
        <p>Option 1</p>
        <p>Option 2</p>
        <p>Option 3</p>
        <p>Option 4</p>
      </div>
      <Image src={HarcLogo} alt="Harc Logo" className="w-1/8" />
    </div>
  );
};

export default navbar;
