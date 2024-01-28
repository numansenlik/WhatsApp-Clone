"use client";
import { auth } from "@/lib/firebase";
import {
  AccountCircle,
  ChatOutlined,
  DataUsage,
  GroupsOutlined,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import UserAvatar from "../common/UserAvatar";
import AppModal from "../AppModal";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MapsUgcOutlinedIcon from "@mui/icons-material/MapsUgcOutlined";

const SideBarHeader: React.FC = () => {
  const isLoggedIn = auth?.currentUser;
  // Kullanıcının giriş yapmış olup olmadığını kontrol ediyoruz
  const router = useRouter();

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
          <MoreVertIcon />
        </IconButton>
      </div>
    </div>
  );
};

// SideBarHeader fonksiyonel bileşenini dışa aktarıyoruz
export default SideBarHeader;
