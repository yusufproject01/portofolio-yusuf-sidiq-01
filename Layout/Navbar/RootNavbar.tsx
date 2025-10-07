"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "./index";

interface RootNavbarProps {
  /** Array of path strings where the navbar should be shown. Exact match or prefix when ending with '/' */
  showOn?: string[];
  /** Array of path strings where the navbar should be hidden. hideOn takes precedence over showOn */
  hideOn?: string[];
}

/**
 * RootNavbar
 * - Client component that renders the project's Navbar only on selected routes.
 * - Usage: <RootNavbar showOn={["/","/about"]} />
 * - If showOn is omitted, Navbar is shown on all routes except those listed in hideOn.
 */
export default function RootNavbar({ showOn, hideOn }: RootNavbarProps) {
  const pathname = usePathname() ?? "/";

  const matchesList = (list: string[] | undefined) => {
    if (!list || list.length === 0) return false;
    return list.some((p) => {
      // if pattern ends with /* allow prefix match, or if ends with / allow prefix
      if (p.endsWith("/*")) {
        const prefix = p.slice(0, -2);
        return pathname.startsWith(prefix);
      }
      if (p.endsWith("/")) {
        return pathname.startsWith(p);
      }
      return pathname === p;
    });
  };

  // hideOn takes precedence
  if (matchesList(hideOn)) return null;

  if (showOn && showOn.length > 0) {
    if (!matchesList(showOn)) return null;
  }

  return <Navbar />;
}
