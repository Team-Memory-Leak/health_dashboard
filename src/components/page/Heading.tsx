interface HeadingProps {
  title?: string;
  description?: string;
}

const Heading: React.FC<HeadingProps> = ({ title, description}) => {
  return (
    <div className="flex flex-col text-center items-center">
      <p className="font-harc-alt text-2xl font-semibold py-5">{title}</p>
      <p className="font-harc-main w-1/2">{description}</p>
    </div>
  );
};

export default Heading;
