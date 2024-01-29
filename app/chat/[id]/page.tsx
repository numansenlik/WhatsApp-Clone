import ChatSidebar from "@/modules/ChatSidebar";
import MainScreen from "@/modules/MainScreen";

export default async function Home() {
  return (
    <main className="flex h-screen overflow-hidden  ">
      <div className="w-full lg:w-[1600px] flex mx-auto 2xl:my-[20px] bg-white">
        <div className="bg-white-500 w-[30%] overflow-y-auto min-w-[336px]">
          <ChatSidebar />
        </div>
        <div className="w-[70%] overflow-y-auto flex items-center justify-center bg-blue-50 ">
          <MainScreen />
        </div>
      </div>
    </main>
  );
}
