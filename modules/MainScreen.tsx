import MainScreenHeader from "@/components/MainScreen/MainScreenHeader";
import MessageBody from "@/components/MainScreen/MessageBody";
import React from "react";

const MainScreen: React.FC = () => {
  return (
    <div className="w-full flex flex-col ">
      <MainScreenHeader />
      <MessageBody />
    </div>
  );
};
export default MainScreen;
