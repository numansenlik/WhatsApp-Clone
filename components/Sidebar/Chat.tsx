import { AllUsersType } from "@/types";
import Image from "next/image";
import { type } from "os";
import React from "react";

type Props = { data: AllUsersType };

const Chat: React.FC<Props> = ({ data }) => {
  return (
    <div className="flex items-center justify-between py-4 px-6 bg-white border-t border-gray-400 hover:bg-gray-200 opacity-80 overflow-hidden cursor-pointer">
      <div className="flex justify-start items-center gap-4">
        <Image
          src={data?.image}
          alt="user"
          width={50}
          height={50}
          className="rounded-full"
        />
        <div className="flex items-center justify-between ">
          <div className="flex flex-col items-start justify-start">
            <p>{data?.firstName}</p>
            <p className="text-gray-500 truncate w-1/2">This is message body</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm ">10:39</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Chat;
