import Header from "@/components/page/Heading";
import descriptions from "@/data/Descriptions"; 

const page = () => {
  return (
    <div className="mb-10">
      <Header title="Healthcare Access" description= {descriptions[1]}/>
    </div>
  );
};

export default page;
