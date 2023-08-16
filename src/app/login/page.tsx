"use client";

import Button from "@/components/ui/Button";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { toast } from "react-hot-toast";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);

  const loginWithGoogle = async () => {
    setIsLoading(true);

    try {
      await signIn("google");
    } catch (error) {
      // display error message
      toast.error("Something went wrong with your login");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
        <div className="w-full flex flex-col items-center max-w-md space-y-8">
          <div className="flex flex-col items-center gap-8">
            logo
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>

          <Button
            isLoading={isLoading}
            type="button"
            className="max-w-sm mx-auto w-full gap-1"
            onClick={loginWithGoogle}
          >
            {isLoading ? null : (
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                height={25}
                width={25}
              >
                <path d="M881 442.4H519.7v148.5h206.4c-8.9 48-35.9 88.6-76.6 115.8-34.4 23-78.3 36.6-129.9 36.6-99.9 0-184.4-67.5-214.6-158.2-7.6-23-12-47.6-12-72.9s4.4-49.9 12-72.9c30.3-90.6 114.8-158.1 214.7-158.1 56.3 0 106.8 19.4 146.6 57.4l110-110.1c-66.5-62-153.2-100-256.6-100-149.9 0-279.6 86-342.7 211.4-26 51.8-40.8 110.4-40.8 172.4S151 632.8 177 684.6C240.1 810 369.8 896 519.7 896c103.6 0 190.4-34.4 253.8-93 72.5-66.8 114.4-165.2 114.4-282.1 0-27.2-2.4-53.3-6.9-78.5z" />
              </svg>
            )}
            Google
          </Button>
        </div>
      </div>
    </>
  );
}
