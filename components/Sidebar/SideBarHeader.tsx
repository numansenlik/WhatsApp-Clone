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

const SideBarHeader: React.FC = () => {
  const isLoggedIn = auth?.currentUser;
  // Kullanıcının giriş yapmış olup olmadığını kontrol ediyoruz
  const router = useRouter();
  if (isLoggedIn === null) {
    router.push("/login");
  }
  return (
    <div className="flex justify-evenly items-center px-2 py-4 h-20 border-r-gray-200 border-solid border-b border-b-gray-200 bg-white z-10">
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

      <IconButton>
        <GroupsOutlined />
      </IconButton>
      <IconButton>
        <DataUsage />
      </IconButton>

      <IconButton>
        <AppModal
          icon={<ChatOutlined />}
          title="All Contacts"
          modalType="chat"
        />
      </IconButton>
    </div>
  );
};

// SideBarHeader fonksiyonel bileşenini dışa aktarıyoruz
export default SideBarHeader;
