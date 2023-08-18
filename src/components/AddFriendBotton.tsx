"use client";

import { addFriendValidator } from "@/lib/validations/add-friend";
import Button from "./ui/Button";
import axios from "axios";
import { useState } from "react";

export default function AddFriendBotton() {
  const [showSuccessState, setShowSuccessState] = useState(false);

  const addFriend = async (email: string) => {
    try {
      const validatedEmail = addFriendValidator.parse({ email });

      await axios.post("/api/friend/add", {
        email: validatedEmail,
      });
    } catch (error) {}
  };

  return (
    <form className="max-w-sm">
      <label
        htmlFor="email"
        className="block text-sm font-medium leading-6 text-gray-9000"
      >
        Add friend by email
      </label>
      <div className="mt-2 flex gap-2">
        <input
          type="text"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="you@example.com"
        />
        <Button>Add</Button>
      </div>
    </form>
  );
}
