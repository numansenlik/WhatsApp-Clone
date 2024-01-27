"use client";
import {
  AccountCircle,
  DeleteOutlineOutlined,
  LocalPhoneOutlined,
  SearchOutlined,
  VideocamOutlined,
} from "@mui/icons-material";
import { ClickAwayListener, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import SignOutButton from "../common/SignOutButton";
import {
  deleteChatFromFirestore,
  getSingleChatFromFirestore,
} from "@/lib/firebase/messageController";
import { useParams, useRouter } from "next/navigation";
import { DocumentData } from "firebase/firestore";
import UserAvatar from "../common/UserAvatar";
import { handleContactInfo } from "./helper";

const MainScreenHeader: React.FC = () => {
  // URL parametrelerini almak için useParams hook'unu kullanıyoruz
  const params = useParams();

  // Router işlemleri için useRouter hook'unu kullanıyoruz
  const router = useRouter();

  // Menü durumunu kontrol etmek için state kullanıyoruz
  const [open, setOpen] = useState(false);

  // İletişim bilgilerini saklamak için state kullanıyoruz
  const [contactInfo, setContactInfo] = useState<
    null | DocumentData | undefined
  >(null);

  // Menüyü açma/kapatma işlevi
  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  // Menüyü kapatma işlevi
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    // Firestore'dan belirli bir sohbetin bilgilerini almak için getSingleChatFromFirestore fonksiyonunu kullanıyoruz
    getSingleChatFromFirestore(params?.id)
      .then(async (chat) => {
        // handleContactInfo fonksiyonunu kullanarak iletişim bilgilerini filtreleme
        const filterContact = await handleContactInfo(chat, params?.id);
        setContactInfo(filterContact);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [params?.id]);

  return (
    <div className="sticky top-0 p-2 h-20 bg-gray-200 border-b border-gray-400 z-10 flex items-center justify-between">
      {/* İletişim bilgisi varsa, kullanıcı adı ve resmi göster */}
      <div>
        {contactInfo ? (
          <div className="flex items-center gap-2">
            <UserAvatar image={contactInfo?.photo} alt={contactInfo?.name} />
            <strong>{contactInfo?.name}</strong>
          </div>
        ) : (
          <AccountCircle />
        )}
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
          <IconButton
            onClick={() => deleteChatFromFirestore(params?.id, router)}
          >
            <DeleteOutlineOutlined />
          </IconButton>
          <SignOutButton open={open} handleToggle={handleToggle} />
        </div>
      </ClickAwayListener>
    </div>
  );
};
export default MainScreenHeader;
