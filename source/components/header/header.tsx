"use client";
import { headerLinks } from "@/source/constant/data";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Button from "../global/button";

function Header() {
  const { data } = useSession();
  return (
    <div className="bg-slate-200 sm:block hidden">
      <div className="container">
        <div className="flex relative flex-wrap justify-between items-center">
          {headerLinks.map((link, index) => {
            return (
              <div>
                {link.url == "/login" && data?.user ? (
                  <div className="group/my_account">
                    <Button
                      title={data.user.name + " Account"}
                      className="text-xs uppercase hover:text-primary py-1 px-2 hover:decoration-solid hover:decoration-1 hover:underline hover:decoration-primary"
                    />
                    <div className="bg-slate-200 absolute group-hover/my_account:visible invisible flex flex-col p-2  top-[25px] right-36 z-50 w-[300px] ">
                      <Link
                        className="text-sm  hover:text-primary py-2 px-2 hover:decoration-solid hover:decoration-1 hover:underline hover:decoration-primary"
                        href="/profile"
                      >
                        My Profile
                      </Link>
                      <Link
                        className="text-sm hover:text-primary py-2 px-2 hover:decoration-solid hover:decoration-1 hover:underline hover:decoration-primary"
                        href="/cart"
                      >
                        Cart
                      </Link>
                      <Link
                        className="text-sm hover:text-primary py-2 px-2 hover:decoration-solid hover:decoration-1 hover:underline hover:decoration-primary"
                        href="/order"
                      >
                        Order
                      </Link>
                      <Link
                        className="text-sm hover:text-primary py-2 px-2 hover:decoration-solid hover:decoration-1 hover:underline hover:decoration-primary"
                        href="/wishlist"
                      >
                        Wishlist
                      </Link>
                      <Button
                        className="text-sm text-left hover:text-primary py-2 px-2 hover:decoration-solid hover:decoration-1 hover:underline hover:decoration-primary"
                        title="Logout"
                        onClick={() => signOut()}
                      />
                    </div>
                  </div>
                ) : (
                  <Link
                    key={index}
                    className="text-xs hover:text-primary py-1 px-2 hover:decoration-solid hover:decoration-1 hover:underline hover:decoration-primary"
                    href={link.url}
                  >
                    {link.title}
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Header;
