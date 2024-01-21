"use client";

import { auth } from "@/lib/firebase";
import { KeyboardArrowDown } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";
type Props = {
  open: boolean;
  handleToggle: () => void;
};
const SignOutButton: React.FC<Props> = ({ handleToggle, open }) => {
  const router = useRouter();
  const signOutFromWhatsapp = () => {
    auth.signOut();
    router.push("/login");
  };
  return (
    <div className="flex flex-col relative">
      <IconButton onClick={handleToggle}>
        <KeyboardArrowDown />
      </IconButton>
      {open ? (
        <button
          className="absolute top-10 bottom-2 right-3 h-full bg-white text-gray-700 p-2 rounded-md shadow-md w-20 hover:bg-gray-300 transition duration-200 ease-in-out z-11"
          onClick={signOutFromWhatsapp}
        >
          SignOut
        </button>
      ) : null}
    </div>
  );
};
export default SignOutButton;
