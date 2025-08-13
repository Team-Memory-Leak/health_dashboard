import LanguageData from "@/components/LanguageData";
import Header from "@/components/page/Heading";
import descriptions from "@/data/Descriptions";

const Home = () => {
  return (
    <div className="h-screen w-screen flex-wrap items-center justify-center overflow-x-hidden">
      <Header
        title="Community Health Data"
        description= {descriptions[0]}
      />
      <LanguageData languageCode="1" />
    </div>
  );
};

export default Home;
