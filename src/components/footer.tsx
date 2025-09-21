"use client";

import Image from "next/image";
import Link from "next/link";
import { LogoBlind, LogoIcon } from "@/icons";

export function Footer() {
  return (
    <footer
      className="h-[498px]"
      style={{
        backgroundImage: "url(/images/big-card-background.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto max-w-[1008px] py-[100px]">
        <div className="flex flex-row justify-between">
          <div className="space-y-3">
            <LogoBlind />
            <p className="text-sm text-[#212529] max-w-xs">
              This powerful tool eliminates the need to leave Salesforce to get
              things done as I can create a custom proposal with dynamic pricing
              tables.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-4 text-sm mr-[60px]">
            <div className="space-y-2 flex flex-col">
              <Link href="#" className="hover:underline">
                Home
              </Link>
              <Link href="#" className="hover:underline">
                About us
              </Link>
              <Link href="#" className="hover:underline">
                Contact us
              </Link>
              <Link href="#" className="hover:underline">
                Blog
              </Link>
            </div>
            <div className="space-y-2 flex flex-col">
              <Link href="#" className="hover:underline">
                Cookies
              </Link>
              <Link href="#" className="hover:underline">
                Terms of service
              </Link>
              <Link href="#" className="hover:underline">
                Privacy policy
              </Link>
            </div>
          </nav>
        </div>
        <div className="flex flex-row items-center justify-between mt-[64px] border-t pt-[50px]">
          <div className=" text-xs text-muted-foreground">
            Leads Plays © 2025, All rights reserved.
          </div>
          <div className="flex items-end md:items-start md:justify-end">
            <div className="flex items-center gap-4 text-muted-foreground">
              <Link href="#" aria-label="LinkedIn">
                in
              </Link>
              <Link href="#" aria-label="Facebook">
                f
              </Link>
              <Link href="#" aria-label="X">
                x
              </Link>
              <Link href="#" aria-label="Instagram">
                ig
              </Link>
              <Link href="#" aria-label="YouTube">
                yt
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
