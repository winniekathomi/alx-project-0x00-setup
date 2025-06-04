// components/Pill.tsx

import React from "react";
import { PillProps } from "@/interfaces";

const Pill: React.FC<PillProps> = ({ title }) => {
  return (
    <div className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">
      {title}
    </div>
  );
};

export default Pill;
