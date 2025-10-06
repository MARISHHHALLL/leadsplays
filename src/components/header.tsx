"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { LogoIcon } from "@/icons";
import { Button } from "./ui/button";
import { Squircle } from "@squircle-js/react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

const NAV_ITEMS = [
  { id: 1, label: "Home", href: "/" },
  { id: 2, label: "Featured", href: "/featured" },
  { id: 3, label: "Blog", href: "/blog" },
  { id: 4, label: "Contact", href: "/contact" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-[999] bg-black h-[132px] w-full">
      <div className="mx-auto h-full flex items-center md:justify-center justify-between md:gap-[150px] gap-[0px] md:px-0 px-7">
        <Link href="/" aria-label="Go to homepage">
          <LogoIcon />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={cn("text-[20px] font-semibold capitalize tracking-[0px] text-white/50 transition", pathname === item.href && "!text-white")}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link href="/join" aria-label="Join now">
            <Squircle
              cornerRadius={12}
              cornerSmoothing={1}
              className="bg-[#D9E1D5]/15 h-[50px]"
            >
              <Button className=" bg-transparent h-full w-full px-[30px]  py-[10px] text-[20px] font-semibold">
                Join
              </Button>
            </Squircle>
          </Link>
        </div>

        <Popover open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <PopoverTrigger asChild>
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center rounded-md border border-white/20 text-white transition hover:bg-white/10 md:hidden"
              aria-expanded={isMenuOpen}
              aria-controls="primary-navigation"
              aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
            >
              {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </PopoverTrigger>
          <PopoverContent align="end" className="border-t border-white/10 bg-black md:hidden z-[999]">
            <div>
              <nav
                id="primary-navigation"
                className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6"
              >
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    className="rounded-lg px-3 py-2 text-base font-medium text-white transition hover:bg-white/10"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link href="/join" className="mt-2">
                  <Squircle
                    cornerRadius={12}
                    cornerSmoothing={1}
                    className="bg-[#D9E1D5]/15"
                  >
                    <Button className="w-full bg-transparent px-6 py-3 text-base font-semibold text-white hover:bg-white/10">
                      Join
                    </Button>
                  </Squircle>
                </Link>
              </nav>
            </div>
          </PopoverContent>
        </Popover>



      </div>
    </header>
  );
};