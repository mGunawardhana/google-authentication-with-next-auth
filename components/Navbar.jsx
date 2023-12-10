import Link from "next/link";

export default function Navbar() {
  return (
    <div className="p-3 flex justify-between items-center shadow-inner mt-8 rounded-xl bg-slate-100">
      <Link className="font-bold text-lg text-blue-700" href={"/"}>
        mGunawardhana
      </Link>
      <button className="bg-slate-900 text-white px-6 py-2 rounded-md">
        Sign In
      </button>
    </div>
  );
}
