"use client";

import React from "react";
import { IconButton } from "@mui/material";
import { createNewChat } from "@/lib/firebase/messageController";
import { useParams } from "next/navigation";
import AppModal from "../AppModal";
import { AttachFile, KeyboardVoiceOutlined, Mood } from "@mui/icons-material";

const MessageInput: React.FC = () => {
  // useParams hook'u ile URL parametrelerini alıyoruz
  const params = useParams();

  // State hook'u ile mesajı tutuyoruz
  const [message, setMessage] = React.useState<string>("");

  // Mesaj gönderme fonksiyonu
  const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Eğer mesaj boşsa gönderme işlemini iptal et
    if (message === "") return;

    // createNewChat fonksiyonu ile yeni bir sohbet oluşturuyoruz
    createNewChat(message, params?.id);

    // Gönderildikten sonra mesajı sıfırla
    setMessage("");
  };
  return (
    <div className="sticky bottom-0 z-10 h-20 bg-gray-200 border-t border-gray-400 flex flex-1 items-center justify-between py-6 px-4">
      <IconButton>
        <Mood />
      </IconButton>
      <IconButton>
        <AppModal
          icon={<AttachFile />}
          title="Upload Image"
          modalType="upload"
        />
      </IconButton>
      <form className="w-full" onSubmit={sendMessage}>
        <input
          type="text"
          className="w-full rounded-lg p-2 outline-none"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </form>
      <IconButton>
        <KeyboardVoiceOutlined />
      </IconButton>
    </div>
  );
};

export default MessageInput;
