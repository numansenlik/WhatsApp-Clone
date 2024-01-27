import { User } from "firebase/auth";
import {
  DocumentData,
  collection,
  doc,
  getDoc,
  getFirestore,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { firestoreApp } from ".";

// Firestore bağlantısını oluşturuyoruz
export const firestore = getFirestore(firestoreApp);

// Firestore koleksiyonunu temsil eden bir referans oluşturuyoruz
export const usersCollection = collection(firestore, "users");

// Kullanıcıyı Firestore koleksiyonuna ekleyen fonksiyon
export const addUserToFirestore = async (user: User) => {
  // Kullanıcının belge referansını oluşturuyoruz
  const userRef = doc(firestore, "users", user.uid);

  // Kullanıcı verilerini Firestore koleksiyonuna ekliyoruz
  await setDoc(
    userRef,
    {
      uid: user.uid,
      name: user.displayName,
      email: user.email,
      photo: user.photoURL,
      lastOnline: serverTimestamp(),
    },
    { merge: true } // Eğer belge zaten varsa, mevcut verilerle birleştirme (update) işlemi yapar
  );
};

// Firestore belgesinin anlık bir görüntüsünü oluşturan yardımcı fonksiyon
export function getSnapshotDoc(doc: DocumentData) {
  return {
    id: doc.id, // Belge kimliği
    ...doc.data(), // Belge verileri
  };
}

// Belirli bir kullanıcı kimliğine göre Firestore'dan kullanıcı bilgisi almak için kullanılan fonksiyon
export const getSingleUserFromFirestore = async (userId: string) => {
  // Eğer geçerli bir kullanıcı kimliği yoksa fonksiyonu sonlandır
  if (!userId) return;

  // Kullanıcının belge referansını oluşturuyoruz
  const userRef = doc(firestore, `users/${userId}`);

  // Belgeyi almak için Firestore'dan sorgu yapılır
  const userSnap = await getDoc(userRef);

  // Belge verilerini döndürüyoruz
  const user = userSnap.data();
  return user;
};
