import FirestoreChats from "@/components/Sidebar/FirestoreChats";
import Search from "@/components/Sidebar/Search";
import SideBarHeader from "@/components/Sidebar/SideBarHeader";

const ChatSidebar: React.FC = () => {
  return (
    <div className="w-full h-full bg-white">
      <SideBarHeader />
      <Search />
      <div className="overflow-y-auto">
        <FirestoreChats />
      </div>
    </div>
  );
};
export default ChatSidebar;
