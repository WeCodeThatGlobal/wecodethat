import React from "react";
import "./Header.css";

const Heading = ({ title, subtitle, alignment = "text-center", titleCss }) => {
  return (
    <div>
      <div className={`section-title ${alignment}`}>
        <span className="text-blue-600 subtitle mb-2 pb-3 relative uppercase font-bold leading-relaxed">
          {subtitle}
        </span>
        <h2 className={`leading-tight text-3xl md:text-4xl mt-6 font-bold ${titleCss}`}>{title}</h2>
      </div>
    </div>
  );
};

export default Heading;
