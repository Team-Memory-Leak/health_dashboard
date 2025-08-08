import Image from "next/image";
import { Montserrat, Playfair_Display } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });

const CoachellaPopulation = () => {
  return (
    <div className="flex flex-col md:flex-row p-8 gap-12 h-[600px]">
      {/* Text Section */}
      <div className="flex flex-1 flex-col items-center justify-center text-center md:text-center">
        <div>
          <h1 className={`text-7xl mb-4 ${playfair.className}`}>This is Coachella</h1>
          <p className={`text-8xl font-extrabold text-[#002e6d] ${montserrat.className}`}>
            441,531
          </p>
          <p className={`text-8xl font-extrabold text-[#002e6d] ${montserrat.className}`}>
            People
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex flex-1 items-center justify-center">
        <Image
          src="/images/population.webp"
          alt="Map of Coachella Valley"
          width={700}
          height={400}
        />
      </div>
    </div>
  );
};

export default CoachellaPopulation;


