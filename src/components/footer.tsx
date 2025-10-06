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
              <Link href="#" className="transition hover:text-black hover:underline">
                Home
              </Link>
              <Link href="#" className="transition hover:text-black hover:underline">
                About us
              </Link>
              <Link href="#" className="transition hover:text-black hover:underline">
                Contact us
              </Link>
              <Link href="#" className="transition hover:text-black hover:underline">
                Blog
              </Link>
            </div>
            <div className="space-y-2 flex flex-col">
              <Link href="#" className="transition hover:text-black hover:underline">
                Cookies
              </Link>
              <Link href="#" className="transition hover:text-black hover:underline">
                Terms of service
              </Link>
              <Link href="#" className="transition hover:text-black hover:underline">
                Privacy policy
              </Link>
            </div>
          </nav>
        </div>

        <p className="text-xs leading-6 text-black/60">
          At Playleads, we believe every founder deserves a fair start. Building a business is hard enough. finding the tools, software, and services you need shouldn't drain your budget. That's why we've made it our mission to connect entrepreneurs, startups, and small businesses with exclusive perks, discounts, and resources worth over $1,000,000+ in value. We partner with trusted companies from productivity tools and marketing platforms to cloud services and financial solutions to give you access to credits, free trials, and special deals designed to help you grow faster, spend smarter, and scale stronger. Whether you're just launching your first idea, raising your next round, or scaling a global team, Playleads is here to make sure you never pay full price for the essentials that power your business. Our promise is simple: instant access, no hidden fees, no credit card required. Just the best tools at the best value, so you can focus on what really matters building your vision.
        </p>

        <div className="flex flex-col gap-6 border-t border-black/10 pt-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <div className="text-xs text-black/70">
            Leads Plays (c) 2025, All rights reserved.
          </div>
          <div className="flex gap-4 text-xs uppercase tracking-[0.2em] text-black/70">
            <Link href="#" aria-label="LinkedIn" className="transition hover:text-black">
              in
            </Link>
            <Link href="#" aria-label="Facebook" className="transition hover:text-black">
              f
            </Link>
            <Link href="#" aria-label="X" className="transition hover:text-black">
              x
            </Link>
            <Link href="#" aria-label="Instagram" className="transition hover:text-black">
              ig
            </Link>
            <Link href="#" aria-label="YouTube" className="transition hover:text-black">
              yt
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}