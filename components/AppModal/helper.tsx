import { ContactsType } from "@/types";
import { IconModalType } from ".";
import UploadModal from "./UploadModal";
import ContactList from "./ContactList";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

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
    // Eğer modalType "upload" ise UploadModal bileşenini döndür
    case "upload":
      return <UploadModal handleClose={handleClose} />;
    // Eğer modalType "chat" ise ContactList bileşenini döndür
    case "chat":
      return <ContactList contacts={contacts} handleClose={handleClose} />;
    // Diğer durumlarda null döndür
    default:
      return null;
  }
};

// Seçilen bir kişiyi sohbet ekranına yönlendiren fonksiyon
export const chooseContact = (
  contact: ContactsType,
  handleClose: () => void,
  router: AppRouterInstance
) => {
  // Modal'ı kapat
  handleClose();

  // Seçilen kişinin sohbet ekranına yönlendir
  router.push(`/chat/${contact.uid}`);
};

// Tarih ve saat formatını ayarlayan fonksiyon
export function formatDate(date: number): string;
export function formatDate(date: Date): string;
export function formatDate(arg1: unknown): string {
  if (typeof arg1 === "number") {
    // Eğer argüman bir sayı ise, Unix timestamp'i alıp tarih ve saat formatına çevir
    const d = new Date(arg1 * 1000);
    const fullDate = d.toLocaleString();
    const dateOnly = fullDate.split(" ")[0];
    const timeOnly = fullDate.split(" ")[1];

    return `${timeOnly}`;
  } else {
    // Eğer argüman bir tarih nesnesi ise, günün bugünkü tarih ve saati formatına çevir
    const todayDate = new Date().toLocaleString("en-US", {
      year: undefined,
      month: undefined,
      day: undefined,
      weekday: undefined,
      hour: "2-digit",
      hour12: false,
      minute: "2-digit",
      second: undefined,
    });

    return `${todayDate}`;
  }
}
