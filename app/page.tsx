import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="bg-slate-200 w-full rounded-lg p-4">
        <div className="text-center my-4">
          <h1>String</h1>
        </div>
        <div className="bg-slate-800 m-4 p-2 rounded-md">
          <Link href={"/sign-in"} className=" text-lg text-slate-100">
            Sign In
          </Link>
        </div>
        <div className="bg-slate-800 m-4 p-2 rounded-md">
          <Link href={"/sign-up"} className="text-lg text-slate-100">
            {" "}
            Sign Up
          </Link>
        </div>
      </div>
    </main>
  );
}
