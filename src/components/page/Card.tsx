"use client";

interface CardProps {
  width?: number;
  height?: number;
  children?: React.ReactNode;
}

// Done to use card formatting to display data on the same page
const Card: React.FC<CardProps> = ({ width, height, children }) => {
  return (
    <div
      style={{
        width: width,
        height: height,
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        borderRadius: "8px",
        padding: "24px", // Increased padding for more internal space
        display: "flex",
        flexDirection: "column",
        border: "2px solid #1A237E",
        overflow: "auto",
        marginLeft: "16px",
      }}
    >
      {children}
    </div>
  );
};

export default Card;
