import UserInfo from "@/components/Userinfo";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid place-items-center h-screen -mt-24">
      <UserInfo />
    </div>
  );
}
