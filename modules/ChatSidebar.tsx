import Archived from "@/components/Sidebar/Archived";
import Chat from "@/components/Sidebar/Chat";
import Search from "@/components/Sidebar/Search";
import SideBarHeader from "@/components/Sidebar/SideBarHeader";
import { AllUsers, AllUsersType } from "@/types";
import { type } from "os";

type Props = {
  data: AllUsers;
};

const ChatSidebar: React.FC<Props> = ({ data }) => {
  const users = data.users;

  return (
    <div className="w-full h-full">
      <SideBarHeader />
      <Search />
      <Archived />
      {/* Chats */}
      {users?.map((user: AllUsersType) => (
        <Chat key={user.id} data={user} />
      ))}
      <p className="text-center text-sm p-2">
        Your personal messages end-to-end-encrypted
      </p>
    </div>
  );
};
export default ChatSidebar;
