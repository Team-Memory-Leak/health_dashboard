import LanguageData from "@/components/LanguageData";
import Header from "@/components/page/Heading"

const Home = () => {
  return (
    <div className="h-screen w-screen flex-wrap items-center justify-center overflow-x-hidden">
      <Header title="Community Health Data" description="Every three years, HARC conducts a health survey for the Coachella Valley Community to collect data on the health and well-being of local residents. The data is thoroughly analyzed and shared with the community at no cost. HARC has been helping this community since 2007 and is currently in progress for its seventh edition, the 2025 survey. This website aims to present the 2022 survey findings for individuals aged 18+ through data visualizations that highlight the health status of the Coachella Valley."/>
      <LanguageData languageCode="1" />
    </div>
  );
};

export default Home;
