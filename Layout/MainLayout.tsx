import React from "react";

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
      className={`min-h-auto flex flex-col bg-white text-gray-900 overflow-x-hidden ${className}`}
    >
      {children}
    </div>
  );
}
