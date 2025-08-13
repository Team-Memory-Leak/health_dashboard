"use client";

import React from "react";

interface HeadingProps {
  title?: string;
  description?: string;
  content?: React.ReactNode;
}

// Done to use card formatting to display data on the same page
const Heading: React.FC<HeadingProps> = ({title, description, content}) => {
  return (
    <div className="text-center">
      <h1 className="text-[1.4rem] font-harc-alt font-semibold">
        {title}
      </h1>
      <p>
        {description}
      </p>
      {content}
    </div>
  );
};

export default Heading;
