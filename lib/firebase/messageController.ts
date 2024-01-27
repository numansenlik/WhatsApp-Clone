import {
  arrayUnion,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getFirestore,
  setDoc,
} from "firebase/firestore";
import { auth, firestoreApp } from ".";
import { getSingleUserFromFirestore } from "./userController";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

// Firestore bağlantısını oluşturuyoruz
export const firestore = getFirestore(firestoreApp);

// Firestore koleksiyonunu temsil eden bir referans oluşturuyoruz
export const chatsCollection = collection(firestore, "chats");

// Yeni bir sohbet oluşturan fonksiyon
export const createNewChat = async (messageText: string, routerId: any) => {
  // Mevcut kullanıcının bilgilerini alıyoruz
  const currentUser = auth?.currentUser;

  // Alıcı kullanıcının detaylarını Firestore'dan alıyoruz
  const recipientDetails = await getSingleUserFromFirestore(routerId);

  // Sohbet belgesinin referansını oluşturuyoruz
  const chatRef = doc(firestore, "chats", routerId);

  // Sohbet belgesine yeni bir mesaj ekliyoruz veya varsa mevcut mesajı güncelliyoruz
  await setDoc(
    chatRef,
    {
      link: routerId,
      messages: {
        message: arrayUnion({
          messageBody: messageText,
          createdAt: new Date(),
          messageSender: currentUser?.email,
          messageSenderId: currentUser?.uid,
          messageRecipient: recipientDetails?.email,
          messageRecipientId: recipientDetails?.uid,
        }),
      },
    },
    { merge: true } // Eğer belge zaten varsa, mevcut verilerle birleştirme (update) işlemi yapar
  );
};

// Belirli bir sohbetin Firestore'dan bilgisini almak için fonksiyon
export const getSingleChatFromFirestore = async (chatId: any) => {
  // Eğer geçerli bir sohbet kimliği yoksa fonksiyonu sonlandır
  if (!chatId) return;

  // Sohbet belgesinin referansını oluşturuyoruz
  const chatRef = doc(firestore, `chats/${chatId}`);

  // Firestore'dan sohbet belgesini alıyoruz
  const chatSnap = await getDoc(chatRef);

  // Sohbet belgesinin verilerini döndürüyoruz
  const chat = chatSnap.data();
  return chat;
};

// Firestore'dan belirli bir sohbeti silmek için fonksiyon
export const deleteChatFromFirestore = async (
  chatId: any,
  router: AppRouterInstance
) => {
  // Sohbet belgesinin referansını oluşturuyoruz
  const chatRef = doc(firestore, `chats/${chatId}`);

  // Sohbet belgesini Firestore'dan silme işlemi
  await deleteDoc(chatRef);

  // Konsola silme işleminin başarıyla gerçekleştiğine dair bir mesaj yazdırma
  console.log(`The chat has now been deleted`);

  // Belirtilen yönlendirmeye (router) geri dönme işlemi
  router.push("/");
};
