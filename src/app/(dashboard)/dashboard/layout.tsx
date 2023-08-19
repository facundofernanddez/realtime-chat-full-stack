import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function Layout() {
  const session = await getServerSession(authOptions);
  return <div></div>;
}
