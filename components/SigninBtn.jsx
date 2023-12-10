import Image from "next/image";

export default function SignInBn() {
  return (
    <button className="bg-slate-200 flex items-center gap-4 shadow-inner pl-3 rounded-xl">
      <Image src="/google.png" height={30} width={30} />
      <span className="bg-blue-600 text-white shadow-inner px-4 py-3 rounded-xl">
        Sign in with Google
      </span>
    </button>
  );
}
