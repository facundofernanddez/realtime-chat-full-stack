"use client";
import { signOut } from "next-auth/react";

export default function LogoutPage() {
  return <button onClick={() => signOut()}>Logout</button>;
}
