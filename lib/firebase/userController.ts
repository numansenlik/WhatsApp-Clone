import { User } from "firebase/auth";
import {
  DocumentData,
  collection,
  doc,
  getFirestore,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { firestoreApp } from ".";

export const firestore = getFirestore(firestoreApp);

export const usersCollection = collection(firestore, "users");

export const addUserToFirestore = async (user: User) => {
  const userRef = doc(firestore, "users", user.uid);
  await setDoc(
    userRef,
    {
      uid: user.uid,
      name: user.displayName,
      email: user.email,
      photo: user.photoURL,
      lastOnline: serverTimestamp(),
    },
    { merge: true }
  );
};

export function getSnapshotDoc(doc: DocumentData) {
  return {
    id: doc.id,
    ...doc.data(),
  };
}
