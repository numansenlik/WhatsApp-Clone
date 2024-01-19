import { AllUsersType } from "@/types";
import { type } from "os";
import React from "react";

type Props = { data: AllUsersType };

const Chat: React.FC<Props> = ({ data }) => {
  return (
    <div className="flex items-center justify-between py-4 px-6 bg-white border-t border-gray-400 group-first:border-none">
      <p>{data.email}</p>
    </div>
  );
};
export default Chat;
