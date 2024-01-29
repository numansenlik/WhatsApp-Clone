"use client";
import { auth } from "@/lib/firebase";
import {
  AccountCircle,
  ChatOutlined,
  DataUsage,
  GroupsOutlined,
} from "@mui/icons-material";
import { ClickAwayListener, IconButton } from "@mui/material";
import UserAvatar from "../common/UserAvatar";
import AppModal from "../AppModal";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import MapsUgcOutlinedIcon from "@mui/icons-material/MapsUgcOutlined";
import SignOutButton from "../common/SignOutButton";

const SideBarHeader: React.FC = () => {
  const isLoggedIn = auth?.currentUser;
  // Kullanıcının giriş yapmış olup olmadığını kontrol ediyoruz
  const router = useRouter();
  // Menü durumunu kontrol etmek için state kullanıyoruz
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };
  // Menüyü kapatma işlevi
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (isLoggedIn === null) {
      router.push("/login");
    }
  }, []);

  return (
    <div className="flex justify-between items-center px-[5px] py-[8px] h-[59px] border-r-gray-200 border-solid border-b border-b-gray-200 bg-[#f0f2f5] z-10">
      {/* Kullanıcının giriş yapmış olup olmadığını kontrol ediyoruz */}
      <div className="pl-2">
        {isLoggedIn !== null ? (
          // Eğer giriş yapmışsa kullanıcının fotoğrafını ve email'ini gösteren UserAvatar bileşeni
          <UserAvatar image={isLoggedIn?.photoURL} alt={isLoggedIn?.email} />
        ) : (
          // Eğer giriş yapmamışsa AccountCircle ikonu
          <AccountCircle className="rounded-full cursor-pointer hover:opacity-70" />
        )}
      </div>
      <ClickAwayListener onClickAway={handleClose}>
        <div className="w-[240px] flex justify-around">
          <IconButton>
            <GroupsOutlined />
          </IconButton>
          <IconButton>
            <DataUsage />
          </IconButton>
          <IconButton>
            <MapsUgcOutlinedIcon />
          </IconButton>
          <IconButton>
            <AppModal
              icon={<ChatOutlined />}
              title="All Contacts"
              modalType="chat"
            />
          </IconButton>
          <IconButton>
            <SignOutButton open={open} handleToggle={handleToggle} />
          </IconButton>
        </div>
      </ClickAwayListener>
    </div>
  );
};

// SideBarHeader fonksiyonel bileşenini dışa aktarıyoruz
export default SideBarHeader;
