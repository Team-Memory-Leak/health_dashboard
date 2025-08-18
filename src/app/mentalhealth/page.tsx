import Header from "@/components/page/Heading"
import descriptions from "@/data/Descriptions"

const page = () => {
  return (
    <div className="my-10">
      <Header title="Depression and Mental Health" description={descriptions[2]}/>
    </div>
  )
}

export default page