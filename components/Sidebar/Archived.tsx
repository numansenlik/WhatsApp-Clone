"use client";

import { MoveToInbox } from "@mui/icons-material";
import React from "react";

const Archived: React.FC = () => {
  return (
    <div className="flex items-center justify-start py-4 px-6 w-full bg-white border-b border-gray-400">
      <MoveToInbox className="text-gray-500 mx-4" />
      <p className="bg-white pl-2">Archived</p>
    </div>
  );
};
export default React.memo(Archived);
