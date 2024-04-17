"use client";
import Button from "@/source/components/global/button";
import { signOut } from "next-auth/react";

export default function SignOut({ pathname }: { pathname: "SHOP" | "ADMIN" }) {
  return (
    <Button
      title="Logout"
      onClick={() =>
        signOut({
          callbackUrl:
            pathname === "SHOP" || pathname === "ADMIN" ? "/auth" : "/login",
        })
      }
      className={`px-2 block py-2  text-white transition`}
    />
  );
}
