import React from "react";
import Link from "next/link";

interface MainLayoutProps {
  children?: React.ReactNode;
  title?: string;
  className?: string;
}

export default function MainLayout({
  children,
  title,
  className = "",
}: Readonly<MainLayoutProps>) {
  return (
    <div
      className={`min-h-screen flex flex-col bg-white text-gray-900 ${className}`}
    >
      {children}
    </div>
  );
}
