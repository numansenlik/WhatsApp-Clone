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

const SideBarHeader: React.FC = () => {
  const isLoggedIn = auth?.currentUser;
  console.log(isLoggedIn);

  return (
    <div className="flex justify-evenly items-center px-2 py-4 h-20 border-r-gray-200 border-solid border-b border-b-gray-200 bg-white z-10">
      <div className="pl-2">
        {isLoggedIn !== null ? (
          <UserAvatar image={isLoggedIn?.photoURL} alt={isLoggedIn?.email} />
        ) : (
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
        <ChatOutlined />
      </IconButton>
    </div>
  );
};
export default SideBarHeader;
