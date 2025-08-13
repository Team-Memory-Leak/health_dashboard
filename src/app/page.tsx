import LanguageData from "@/components/LanguageData";
import CoachellaPopulation from "@/components/page/CoachellaPopulation";
import React from "react";

const Home = () => {
  return (
    <div className="h-screen w-screen flex-wrap items-center justify-center overflow-x-hidden">
      <CoachellaPopulation />
      <LanguageData languageCode="1" />
    </div>
  );
};

export default Home;
