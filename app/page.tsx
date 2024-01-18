import Image from "next/image";
import BackgroundImage from "../public/whatsapp-bg.png";
import ChatSidebar from "@/modules/ChatSidebar";
export default function Home() {
  return (
    <main className="flex h-screen overflow-hidden">
      <div className="bg-white-500 w-1/3 overflow-y-auto">
        <ChatSidebar />
      </div>
      <div className="w-full overflow-y-auto flex items-center justify-center bg-blue-50">
        <Image src={BackgroundImage} alt="Logo" width={3000} height={3000} />
      </div>
    </main>
  );
}
