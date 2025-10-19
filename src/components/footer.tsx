"use client";

import Link from "next/link";

import { LogoBlind } from "@/icons";

export function Footer() {
  return (
    <footer
      className="bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url(/images/big-card-background.png)",
      }}
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-lg space-y-4">
            <LogoBlind />
            <p className="text-sm leading-6 text-[#212529]">
              This powerful tool eliminates the need to leave Salesforce to get things done as I can create a custom proposal with dynamic pricing tables.
            </p>
          </div>

          <nav className="grid gap-6 text-sm text-[#212529] grid-cols-2">
            <div className="space-y-2 flex flex-col">
              <Link href="/" className="transition hover:text-black hover:underline">
                Home
              </Link>
              <Link href="#" className="transition hover:text-black hover:underline">
                About us
              </Link>
              <Link href="contact-us" className="transition hover:text-black hover:underline">
                Contact us
              </Link>
              <Link href="blog" className="transition hover:text-black hover:underline">
                Blog
              </Link>
            </div>
            <div className="space-y-2 flex flex-col">
              <Link href="#" className="transition hover:text-black hover:underline">
                Cookies
              </Link>
              <Link href="terms" className="transition hover:text-black hover:underline">
                Terms of service
              </Link>
              <Link href="/privacy-policy" className="transition hover:text-black hover:underline">
                Privacy policy
              </Link>
            </div>
          </nav>
        </div>

        <p className="text-xs leading-6 text-black/60">
          At Playleads, we help founders save on the tools that power their business. Access $1M+ in exclusive perks and discounts — no credit card, no hidden fees, just smarter growth.
        </p>

        <div className="flex flex-col gap-6 border-t border-black/10 pt-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <div className="text-xs text-black/70">
            Leads Plays (c) 2025, All rights reserved.
          </div>

        </div>
      </div>
    </footer>
  );
}