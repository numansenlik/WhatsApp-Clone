import { ContactsType } from "@/types";
import { IconModalType } from ".";
import UploadModal from "./UploadModal";
import ContactList from "./ContactList";

export const boxStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const handleModalChildren = (
  modalType: IconModalType,
  contacts: ContactsType[],
  handleClose: () => void
) => {
  switch (modalType) {
    case "upload":
      return <UploadModal handleClose={handleClose} />;
    case "chat":
      return <ContactList contacts={contacts} handleClose={handleClose} />;
    default:
      return;
  }
};
