import Archived from "@/components/Sidebar/Archived";
import FirestoreChats from "@/components/Sidebar/FirestoreChats";
import Search from "@/components/Sidebar/Search";
import SideBarHeader from "@/components/Sidebar/SideBarHeader";

const ChatSidebar: React.FC = () => {
  return (
    <div className="w-full h-full">
      <SideBarHeader />
      <Search />
      <Archived />
      <FirestoreChats />
    </div>
  );
};
export default ChatSidebar;
