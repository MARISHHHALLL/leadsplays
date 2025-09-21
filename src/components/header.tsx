import { LogoIcon } from "@/icons";
import React from "react";
import { Button } from "./ui/button";
import { Squircle } from "@squircle-js/react";
import Link from "next/link";

const DATA = [
  {
    id: 1,
    value: "Home",
    href: "/",
  },
  {
    id: 2,
    value: "Featured",
    href: "/featured",
  },
  {
    id: 3,
    value: "Blog",
    href: "/blog",
  },
  {
    id: 4,
    value: "Contact",
    href: "/contact",
  },
];

export const Header = () => {
  return (
    <div className="w-full h-[132px] bg-black flex flex-row items-center justify-center gap-[150px]">
      <LogoIcon />
      <ul className="flex flex-row items-center gap-[30px]">
        {DATA.map((item) => {
          return (
            <Link key={item.id} href={item.href}>
              <li className="text-[20px] cursor-pointer leading-[72px] font-semibold text-white">
                {item.value}
              </li>
            </Link>
          );
        })}
      </ul>
      <Squircle
        cornerRadius={12}
        cornerSmoothing={1}
        className="bg-[#D9E1D5]/15 h-[50px]"
      >
        <Button className=" bg-transparent h-full w-full px-[30px]  py-[10px] text-[20px] font-semibold">
          Join
        </Button>
      </Squircle>
    </div>
  );
};
