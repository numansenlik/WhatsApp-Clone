"use client";

import { CircularProgress } from "@mui/material";
import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="grid place-items-center bg-white h-screen">
      <CircularProgress color="primary" />
    </div>
  );
};
export default Loader;
