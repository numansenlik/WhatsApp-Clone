"use client";

import { auth } from "@/lib/firebase";
import { chatsCollection } from "@/lib/firebase/messageController";
import { getSnapshotDoc } from "@/lib/firebase/userController";
import { ChatMessageType } from "@/types";
import { DocumentData, onSnapshot } from "firebase/firestore";
import Link from "next/link";
import { useEffect, useState } from "react";
import Chat from "./Chat";

const FirestoreChats: React.FC = () => {
  const [chats, setChats] = useState<DocumentData>([]);

  useEffect(() => {
    // Firestore koleksiyonunda yapılan her güncellemede tetiklenecek olan onSnapshot fonksiyonunu kullanıyoruz
    onSnapshot(chatsCollection, (snapshot) => {
      const snapshotRef = snapshot.docs.map((doc) => getSnapshotDoc(doc));
      const messagesList = snapshotRef;
      setChats(messagesList);
    });
  }, []);

  return (
    <div>
      {!!chats &&
        chats
          ?.filter((chat: DocumentData) =>
            chat?.messages.message?.some(
              (item: ChatMessageType) =>
                item?.messageSenderId === auth?.currentUser?.uid ||
                item?.messageRecipientId === auth?.currentUser?.uid
            )
          )
          .map((chat: DocumentData, index: number) => (
            <Link href={`/chat/${chat?.link}`} key={index}>
              <Chat chatData={chat} />
            </Link>
          ))}
    </div>
  );
};

export default FirestoreChats;
