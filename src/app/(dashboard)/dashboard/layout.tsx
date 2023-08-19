import { Icon, Icons } from "@/components/icons";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ReactNode } from "react";

interface SidebarbarOption {
  id: number;
  name: string;
  href: string;
  Icon: Icon;
}

const sidebarOptions: SidebarbarOption[] = [
  {
    id: 1,
    name: "Add friend",
    href: "/dashboar/add",
    Icon: "UserPlus",
  },
];

export default async function Layout({ children }: { children: ReactNode }) {
  const session = await getServerSession(authOptions);

  if (!session) notFound();
  return (
    <div className="flex h-screen w-full">
      <div className="flex h-full w-full max-w-xs grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
        <Link
          href={"/dashboard"}
          className="flex h-16 shrink-0 items-center"
        >
          <Icons.Logo className="h-8 w-auto text-indigo-600" />
        </Link>

        <div className="text-sx font-semibold leading-6 text-gray-400">
          Your chats
        </div>

        <nav className="felx flex-1 flex-col">
          <ul
            role="list"
            className="flex flex-1 flex-col gap-y-7"
          >
            <li>chats that this user has</li>
            <li>
              <div className="text-sm font-semibold leading-6 text-gray-400">
                Overview
              </div>

              <ul
                role="list"
                className="-mx-2 mt-2 space-y-1"
              ></ul>
            </li>
          </ul>
        </nav>
      </div>
      {children}
    </div>
  );
}
