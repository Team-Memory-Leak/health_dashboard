import Image from "next/image";
import HarcLogo from "@/public/images/Harc_Logo.webp";

const navbar = () => {
  return (
    <div className="flex flex-col">
      <div className="flex w-full flex-row justify-end gap-5 bg-blue-900 p-5 text-2xl">
        <div>Option 1</div>
        <div>Option 2</div>
        <div>Option 3</div>
        <div>Option 4</div>
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
