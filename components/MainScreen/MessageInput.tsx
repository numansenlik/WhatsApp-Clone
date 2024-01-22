"use client";

import React, { useState } from "react";
import { IconButton } from "@mui/material";
import Mood from "@mui/icons-material/Mood";
import { AttachFile, KeyboardVoiceOutlined } from "@mui/icons-material";

const MessageInput: React.FC = () => {
  const [message, setMessage] = useState<string>("");

  const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (message === "") return;
    setMessage("");
  };
  return (
    <div className="sticky bottom-0 z-10 h-20 bg-gray-200 border-t border-gray-400 flex flex-1 items-center justify-between py-6 px-4">
      <IconButton>
        <Mood />
      </IconButton>
      <IconButton>
        <AttachFile />
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
