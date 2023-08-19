import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ReactNode } from "react";

export default async function Layout({ children }: { children: ReactNode }) {
  const session = await getServerSession(authOptions);

  if (!session) notFound();
  return (
    <div className="flex h-screen w-full">
      <div className="flex h-full w-full max-w-xs grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6"></div>
      <Link
        href={"/dashboard"}
        className="flex h-16 shrink-0 items-center"
      ></Link>
      {children}
    </div>
  );
}
