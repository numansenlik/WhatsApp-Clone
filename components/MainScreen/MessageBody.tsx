"use client";

import { firestore } from "@/lib/firebase/userController";
import { DocumentData, doc, onSnapshot } from "firebase/firestore";
import { useParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import Messages from "./Messages";

const MessageBody: React.FC = () => {
  const params = useParams<{ id?: string }>();
  const [dataList, setDataList] = useState<DocumentData[]>([]);
  const lastMessageRef = useRef<HTMLDivElement>(null);

  const scrollDownPage = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  useEffect(() => {
    onSnapshot(doc(firestore, `chats/${params?.id}`), (doc) => {
      const messageList = doc.data()?.messages?.message;
      setDataList(messageList);
      setTimeout(() => {
        scrollDownPage(lastMessageRef);
      }, 10);
    });
  }, [params?.id]);
  return (
    <div
      className={`overflow-y-auto flex flex-col min-h-screen justify-end bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')]`}
    >
      <Messages data={dataList} paramId={params?.id} />
      <div ref={lastMessageRef} />
    </div>
  );
};

export default MessageBody;
