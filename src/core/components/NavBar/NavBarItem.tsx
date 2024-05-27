"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { NavbarItem } from "@nextui-org/react";

interface Props {
  href: string;
  title: string;
  urlname: string;
}

export const NavBarItem: React.FC<Props> = ({ title, href, urlname }) => {
  const pathName = usePathname();
  return (
    <NavbarItem
      isActive={pathName == urlname}
      href={href}
      as={Link}
      className="animate__animated animate__fadeIn"
    >
      {title}
    </NavbarItem>
  );
};
