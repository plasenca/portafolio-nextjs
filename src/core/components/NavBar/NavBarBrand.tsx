"use client";

import Image from "next/image";
import Link from "next/link";

import {
  NavbarBrand,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";

import { navigationLinks } from "@/config/ui-config/navigation/navigation-links";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export const NavBarBrand = () => {
  const pathName = usePathname();

  return (
    <>
      <Link href="/">
        <NavbarBrand className="cursor-pointer">
          <NavbarMenuToggle
            aria-label="toggle navigation"
            className={clsx(
              "hidden sm:display",
              "animate__animated animate__fadeIn"
            )}
          />
          <Image
            alt="Franzua Plasencia"
            src={`/static/logo.png`}
            width="50"
            height="50"
            priority
          />
          <p
            color="inherit"
            className={
              pathName === "/" ? "animate__animated animate__fadeIn" : ""
            }
          >
            Franzua Plasencia
          </p>
        </NavbarBrand>
      </Link>

      <NavbarMenu>
        {navigationLinks.map((link, index) => (
          <NavbarMenuItem key={link.title} className={clsx()}>
            <Link href={link.href} className="min-w-full text-inherit">
              {link.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </>
  );
};
