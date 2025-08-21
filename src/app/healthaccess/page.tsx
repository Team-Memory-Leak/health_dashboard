import Header from "@/components/page/Heading";
import descriptions from "@/data/Descriptions";
import Bargraph from "@/components/charts/bargraph";
import Card from "@/components/page/Card";
import Filter from "@/components/Filters/filters"

const page = () => {
  return (
    <div className="mb-10">
      <Header title="Healthcare Access" description={descriptions[1]} />
      <Card height={500} width={500}>
        <Bargraph />
      </Card>
      <Filter/>
    </div>
  );
};

export default page;
