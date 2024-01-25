import {
  arrayUnion,
  collection,
  doc,
  getDoc,
  getFirestore,
  setDoc,
} from "firebase/firestore";
import { auth, firestoreApp } from ".";
import { getSingleUserFromFirestore } from "./userController";

export const firestore = getFirestore(firestoreApp);

export const chatsCollection = collection(firestore, "chats");

export const createNewChat = async (messageText: string, routerId: any) => {
  const currentUser = auth?.currentUser;
  const recipientDetails = await getSingleUserFromFirestore(routerId);
  const chatRef = doc(firestore, "chats", routerId);
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
    { merge: true }
  );
};

export const getSingleChatFromFirestore = async (chatId: any) => {
  if (!chatId) return;
  const chatRef = doc(firestore, `chats/${chatId}`);
  const chatSnap = await getDoc(chatRef);
  const chat = chatSnap.data();
  return chat;
};
