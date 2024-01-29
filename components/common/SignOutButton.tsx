"use client";

import { auth } from "@/lib/firebase";
import { MoreVert } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";
type Props = {
  open: boolean;
  handleToggle: () => void;
};
const SignOutButton: React.FC<Props> = ({ handleToggle, open }) => {
  const router = useRouter();

  // Kullanıcıyı Whatsapp'tan çıkış yapma fonksiyonu
  const signOutFromWhatsapp = () => {
    // Firebase Authentication üzerinden çıkış yapılıyor
    auth.signOut();

    // Kullanıcı çıkış yaptıktan sonra login sayfasına yönlendirme yapılıyor
    router.push("/login");
  };
  return (
    <div className="flex flex-col relative">
      <IconButton onClick={handleToggle}>
        <MoreVert />
      </IconButton>
      {open ? (
        <button
          className="z-30 absolute top-10 bottom-2 text-sm right-3 h-full bg-white text-gray-700 p-2 rounded-md shadow-md w-20 hover:bg-gray-300 transition duration-200 ease-in-out "
          onClick={signOutFromWhatsapp}
        >
          SignOut
        </button>
      ) : null}
    </div>
  );
};
export default SignOutButton;
