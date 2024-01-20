import LoginButton from "@/components/Login/LoginButton";
import Image from "next/image";

export default function Login() {
  return (
    <main className="flex h-screen items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-10">
        <Image
          src={
            "https://e7.pngegg.com/pngimages/208/385/png-clipart-whatsapp-computer-icons-android-login-button-text-trademark.png"
          }
          alt="whatsapp logo"
          width={200}
          height={200}
        />
        <LoginButton />
      </div>
    </main>
  );
}
