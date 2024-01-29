"use client";

import { auth, googleProvider } from "@/lib/firebase";
import { addUserToFirestore } from "@/lib/firebase/userController";
import { Console } from "console";
import {
  browserSessionPersistence,
  setPersistence,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from "next/navigation";

const LoginButton = () => {
  const router = useRouter();

  // Google hesabı ile giriş yapma fonksiyonu
  const handleSignIn = () => {
    // Tarayıcı oturum sürekliliği ayarlanıyor
    setPersistence(auth, browserSessionPersistence)
      .then(() => {
        // Google hesabı ile giriş yapma pop-up penceresi açılıyor
        signInWithPopup(auth, googleProvider)
          .then((result) => {
            // Giriş başarılı olduğunda kullanıcı bilgileri alınıyor
            const user = result?.user;

            // Ana sayfaya yönlendirme yapılıyor
            router.push("/");

            // Firestore'a kullanıcı bilgilerini ekleyen fonksiyon çağrılıyor
            addUserToFirestore(user);
          })
          .catch((error) => {
            // Hata durumunda hata mesajı fırlatılıyor
            console.log(error.message);
          });
      })
      .catch((error) => {
        // Hata durumunda hata mesajı fırlatılıyor
        console.log(error.message);
      });
  };
  return (
    <button
      className="p-4  rounded-md border-2 hover:bg-gray-100"
      onClick={() => handleSignIn()}
    >
      Sign In With Google
    </button>
  );
};
export default LoginButton;
