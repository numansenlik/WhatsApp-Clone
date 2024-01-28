"use client";

import { firestore } from "@/lib/firebase/userController";
import { DocumentData, doc, onSnapshot } from "firebase/firestore";
import { useParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import Messages from "./Messages";

const MessageBody: React.FC = () => {
  // useParams hook'u ile URL parametrelerini alıyoruz
  const params = useParams<{ id?: string }>();

  // State hook'u ile mesaj listesini tutuyoruz
  const [dataList, setDataList] = useState<DocumentData[]>([]);

  // useRef hook'u ile son mesajın olduğu div'e referans oluşturuyoruz
  const lastMessageRef = useRef<HTMLDivElement>(null);

  // Sayfayı aşağı kaydıran fonksiyon
  const scrollDownPage = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  useEffect(() => {
    // Firestore'da belirli bir sohbetin değişikliklerini takip eden fonksiyon
    onSnapshot(doc(firestore, `chats/${params?.id}`), (doc) => {
      // Sohbet belgesinden mesaj listesini alıyoruz
      const messageList = doc.data()?.messages?.message;

      // State'i güncelliyoruz
      setDataList(messageList);

      // Son mesaja kaydırma işlemi, bir miktar gecikmeli olarak yapılıyor
      setTimeout(() => {
        scrollDownPage(lastMessageRef);
      }, 10);
    });
  }, [params?.id]);

  return (
    <div
      className={`overflow-y-auto flex flex-col min-h-screen justify-end  bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')]`}
    >
      <Messages data={dataList} paramId={params?.id} />
      <div ref={lastMessageRef} />
    </div>
  );
};

export default MessageBody;
