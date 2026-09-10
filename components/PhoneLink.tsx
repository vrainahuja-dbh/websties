"use client";

import type { AnchorHTMLAttributes } from "react";

export default function PhoneLink({
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a suppressHydrationWarning {...props} href="tel:+16182444800">
      {children}
    </a>
  );
}
