import Link from "next/link";

export default function Navbar() {
  return (
    <div className="p-4 flex justify-between items-center shadow-xl">
      <Link className="font-bold text-lg text-blue-700" href={"/"}>
        mGunawardhana
      </Link>
      <button className="bg-slate-900 text-white px-6 py-2 rounded-md">
        Sign In
      </button>
    </div>
  );
}
