"use client";

import { auth, googleProvider } from "@/lib/firebase";
import { addUserToFirestore } from "@/lib/firebase/userController";
import {
  browserSessionPersistence,
  setPersistence,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from "next/navigation";

const LoginButton = () => {
  const router = useRouter();
  const handleSignIn = () => {
    setPersistence(auth, browserSessionPersistence)
      .then(() => {
        signInWithPopup(auth, googleProvider)
          .then((result) => {
            const user = result?.user;
            router.push("/");
            addUserToFirestore(user);
          })
          .catch((error) => {
            throw new Error(error.message);
          });
      })
      .catch((error) => {
        throw new Error(error.message);
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
