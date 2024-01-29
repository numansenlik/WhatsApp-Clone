import Image from "next/image";
import BackgroundImage from "../public/whatsapp-bg.png";
import ChatSidebar from "@/modules/ChatSidebar";

export default async function Home() {
  return (
    <main className="flex h-screen overflow-hidden bg-black w-full ">
      <div className="w-full lg:w-[1600px] flex mx-auto my-[20px]">
        <div className="bg-white-500 w-[30%] overflow-y-auto min-w-[336px]">
          <ChatSidebar />
        </div>
        <div className="w-[70%] overflow-y-auto flex items-center justify-center bg-blue-50">
          <Image src={BackgroundImage} alt="Logo" width={3000} height={3000} />
        </div>
      </div>
    </main>
  );
}
