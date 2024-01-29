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
    <div className="w-full flex items-center justify-between  bg-white h-[72px]  border-y-[1px] border-gray-300 hover:bg-gray-200 opacity-80 overflow-hidden cursor-pointer">
      <div className="flex justify-start items-center pr-[12px]">
        <div className="px-[12px] h-[77px flex items-center]">
          <Image
            src={chatInfo?.photo ?? data?.image}
            alt="user"
            width={49}
            height={49}
            className="rounded-full "
          />
        </div>
        <div className="flex items-center justify-around w-[357px] gap-4">
          <div className="flex flex-col items-start justify-start w-full">
            <p className="capitalize">{chatInfo?.name ?? data?.firstName}</p>
            <p className="text-gray-500 truncate w-1/2 ">
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
