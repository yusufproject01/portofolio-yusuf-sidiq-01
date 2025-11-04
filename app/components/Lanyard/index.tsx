"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

// Dynamically import the Lanyard component with no SSR
const DynamicLanyard = dynamic(
  () => import("./LanyardComponent").then((mod) => mod.default),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-screen flex items-center justify-center">
        <div className="animate-pulse">Loading...</div>
      </div>
    ),
  }
);

export default function Lanyard(props: any) {
  return (
    <Suspense>
      <DynamicLanyard {...props} />
    </Suspense>
  );
}
