"use client";

import { navigationSocialLinks } from "@/config/ui-config/navigation/navigation-social";
import { Button, Link, NavbarContent, NavbarItem } from "@nextui-org/react";
import NextLink from "next/link";

import { usePathname } from "next/navigation";
import { AiOutlineDownload } from "react-icons/ai";

const CV_URL =
  "https://drive.google.com/file/d/1rcRGmlSABk2yvCuphu89V40s3-LCQzpv/view?usp=sharing";

export const NavBarActions = () => {
  const pathName = usePathname();

  return (
    <NavbarContent>
      {navigationSocialLinks.map((link) => (
        <NavbarItem
          key={link.title}
          className={pathName == "/" ? "animate__animated animate__fadeIn" : ""}
        >
          <Link href={link.href} target="_blank" as={NextLink}>
            <link.icon cursor={"pointer"} className="text-white" />
          </Link>
        </NavbarItem>
      ))}

      <Link href={CV_URL} target="_blank" as={Link}>
        <Button
          size={"sm"}
          color={"primary"}
          className="animate__animated animate__fadeIn bg-secondary-500 hover:bg-secondary-600"
        >
          <div className="hidden lg:block">Download &nbsp;</div>
          CV &nbsp; <AiOutlineDownload />
        </Button>
      </Link>
    </NavbarContent>
  );
};
