"use client";
import {
  AccountCircle,
  DeleteOutlineOutlined,
  DeleteOutlined,
  LocalPhoneOutlined,
  SearchOutlined,
  VideocamOutlined,
} from "@mui/icons-material";
import { ClickAwayListener, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import SignOutButton from "../common/SignOutButton";
import { getSingleChatFromFirestore } from "@/lib/firebase/messageController";
import { useParams, useRouter } from "next/navigation";
import { auth } from "@/lib/firebase";
import { getSingleUserFromFirestore } from "@/lib/firebase/userController";
import { DocumentData } from "firebase/firestore";

const MainScreenHeader: React.FC = () => {
  const params = useParams();
  const router = useRouter();

  const [open, setOpen] = useState(false);

  const [contactInfo, setContactInfo] = useState<
    null | DocumentData | undefined
  >(null);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleContactInfo = async (
    chat: DocumentData | undefined,
    chatId: any
  ) => {
    if (auth?.currentUser?.uid === chatId) {
      const otherUser = chat?.messages?.message[0]?.messageSenderId;
      const getOtherParticipant = await getSingleUserFromFirestore(otherUser);
      return getOtherParticipant;
    } else {
      const otherUser = chat?.messages?.message[0]?.messageRecipientId;
      const getOtherParticipant = await getSingleUserFromFirestore(otherUser);
      return getOtherParticipant;
    }
  };

  useEffect(() => {
    getSingleChatFromFirestore(params?.id)
      .then(async (chat) => {
        const filterContact = await handleContactInfo(chat, params?.id);
        setContactInfo(filterContact);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [params?.id]);

  return (
    <div className="sticky top-0 p-2 h-20 bg-gray-200 border-b border-gray-400 z-10 flex items-center justify-between">
      <div>
        <AccountCircle />
      </div>
      <ClickAwayListener onClickAway={handleClose}>
        <div className="flex gap-6 items-center">
          <IconButton>
            <VideocamOutlined />
          </IconButton>
          <IconButton>
            <LocalPhoneOutlined />
          </IconButton>
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <DeleteOutlineOutlined />
          </IconButton>
          <SignOutButton open={open} handleToggle={handleToggle} />
        </div>
      </ClickAwayListener>
    </div>
  );
};
export default MainScreenHeader;
