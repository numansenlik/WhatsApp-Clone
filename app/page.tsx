import Image from "next/image";
import BackgroundImage from "../public/whatsapp-bg.png";
import ChatSidebar from "@/modules/ChatSidebar";
import { AllUsers } from "@/types";

const getUsers = async () => {
  const dynamicData = await fetch("https://dummyjson.com/users", {
    cache: "no-store",
  });
  const userData: AllUsers = await dynamicData.json();
  return userData;
};

export default async function Home() {
  const fetchedUsers = await getUsers();

  return (
    <main className="flex h-screen overflow-hidden">
      <div className="bg-white-500 w-1/3 overflow-y-auto">
        <ChatSidebar data={fetchedUsers} />
      </div>
      <div className="w-full overflow-y-auto flex items-center justify-center bg-blue-50">
        <Image src={BackgroundImage} alt="Logo" width={3000} height={3000} />
      </div>
    </main>
  );
}
