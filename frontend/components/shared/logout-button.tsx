"use client";

import { Button } from "../ui/button";
import { signOutUserAction } from "@/actions/auth-actions";

export default function LogoutButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Button onClick={() => signOutUserAction()} className={className}>
      {children}
    </Button>
  );
}
