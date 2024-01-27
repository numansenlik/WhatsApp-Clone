import { auth } from "@/lib/firebase";
import { getSingleUserFromFirestore } from "@/lib/firebase/userController";
import { DocumentData } from "firebase/firestore";
export const handleContactInfo = async (
  chat: DocumentData | undefined,
  chatId: any
) => {
  // Eğer mevcut kullanıcı kimlik bilgisi, sohbetin kimliği ile eşleşiyorsa
  if (auth?.currentUser?.uid === chatId) {
    // Diğer katılımcının kimliğini alıyoruz
    const otherUser = chat?.messages?.message[0]?.messageSenderId;

    // Diğer katılımcının kullanıcı bilgilerini Firestore'dan çekiyoruz
    const getOtherParticipant = await getSingleUserFromFirestore(otherUser);

    // Diğer katılımcının bilgilerini döndürüyoruz
    return getOtherParticipant;
  } else {
    // Eğer mevcut kullanıcı kimlik bilgisi, sohbetin kimliği ile eşleşmiyorsa
    // Diğer katılımcının kimliğini alıyoruz
    const otherUser = chat?.messages?.message[0]?.messageRecipientId;

    // Diğer katılımcının kullanıcı bilgilerini Firestore'dan çekiyoruz
    const getOtherParticipant = await getSingleUserFromFirestore(otherUser);

    // Diğer katılımcının bilgilerini döndürüyoruz
    return getOtherParticipant;
  }
};
