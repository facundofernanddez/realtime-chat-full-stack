"use client";

import { Toaster } from "react-hot-toast";
import { ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      {children}
    </>
  );
}
