import Archived from "@/components/Sidebar/Archived";
import Search from "@/components/Sidebar/Search";
import SideBarHeader from "@/components/Sidebar/SideBarHeader";

const ChatSidebar: React.FC = () => {
  return (
    <div className="w-full h-full">
      <SideBarHeader />
      <Search />
      <Archived />
      {/* Chats */}
    </div>
  );
};
export default ChatSidebar;
