"use client";

import { DocumentData } from "firebase/firestore";
import { useCallback, useEffect, useState } from "react";
import { handleContactInfo } from "../MainScreen/helper";
import Image from "next/image";
import { AllUsersType } from "@/types";
import { formatDate } from "../AppModal/helper";

type Props = {
  data?: AllUsersType;
  chatData?: any;
};

const Chat: React.FC<Props> = ({ data, chatData }) => {
  const [chatInfo, setChatInfo] = useState<DocumentData | undefined>({});

  // useCallback hook'u, bir işlevi bir bağımlılık listesi değiştiğinde yaratır
  const filterContact = useCallback(async () => {
    // handleContactInfo fonksiyonu kullanılarak iletişim bilgilerini filtreleme
    const res = await handleContactInfo(chatData, chatData?.link);
    return res;
  }, [chatData]);

  // useEffect hook'u, bileşenin oluşturulduğu anda ve bağımlılık listesindeki değerler değiştiğinde çalışır
  useEffect(() => {
    // filterContact işlemini gerçekleştirme
    filterContact()
      .then((res: DocumentData | undefined) => setChatInfo(res))
      .catch((err) => err);
  }, [filterContact]);

  return (
    <div className="w-full flex items-center justify-between py-4 px-6 bg-white border-b border-gray-400 hover:bg-gray-200 opacity-80 overflow-hidden cursor-pointer">
      <div className="flex justify-start items-center gap-4">
        <Image
          src={chatInfo?.photo ?? data?.image}
          alt="user"
          width={50}
          height={50}
          className="rounded-full"
        />
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-col items-start justify-start">
            <p>{chatInfo?.name ?? data?.firstName}</p>
            <p className="text-gray-500 truncate w-1/2">
              {" "}
              {chatData?.messages?.message.slice(-1)[0]?.messageBody ??
                "This is the last message"}
            </p>
          </div>
          <div>
            <p className="text-gray-500 text-sm text-right">
              {" "}
              {formatDate(
                chatData?.messages?.message.slice(-1)[0]?.createdAt?.seconds
              ).slice(0, 5) ?? "10:19"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
