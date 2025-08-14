import Image from "next/image";

const CoachellaPopulation = () => {

  return (
    <div className="flex h-[600px] flex-col gap-12 p-8 md:flex-row">
      <div className="flex flex-1 flex-col items-center justify-center text-center md:text-center">
        <div>
          <p className="font-harc-alt mb-4 text-7xl">This is the</p>
          <p className="font-harc-alt mb-4 text-7xl">Coachella Valley</p>
          <p className="font-harc-main text-8xl font-extrabold text-[#002e6d]">
            441,531
          </p>
          <p className="font-harc-main text-8xl font-extrabold text-[#002e6d]">
            People
          </p>
        </div>
      </div>

      <div
        className="relative flex flex-1 items-center justify-center"
        style={{ minHeight: 400 }}
      >
        <Image
          src="/images/population.webp"
          alt="Map of Coachella Valley"
          fill
          style={{ objectFit: "contain" }}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  );
};

export default CoachellaPopulation;
