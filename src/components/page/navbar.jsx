import Image from "next/image"
import HarcLogo from "@/public/images/Harc_Logo.webp"

const navbar = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-center w-full bg-blue-900 text-2xl gap-5 p-5">
        <p>Option 1</p>
        <p>Option 2</p>
        <p>Option 3</p>
        <p>Option 4</p>
      </div>
      <Image src={HarcLogo} alt="Harc Logo"className="w-1/8"/>
    </div>
  )
}

export default navbar