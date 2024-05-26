import Image from "next/image";

import { navigationLinks } from "@/config/ui-config/navigation/navigation-links";
import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";

import { navigationSocialLinks } from "@/config/ui-config/navigation/navigation-social";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { AiOutlineDownload } from "react-icons/ai";
import { NavBarItem } from "./NavBarItem";

const CV_URL =
  "https://drive.google.com/file/d/1rcRGmlSABk2yvCuphu89V40s3-LCQzpv/view?usp=sharing";

export const NavBarApp = () => {
  // const { isDark } = useTheme();
  const router = useRouter();

  return (
    <Navbar
      position={"sticky"}
      className="fixed rounded-3xl mt-4 lg:ml-4 lg:mr-4"
      shouldHideOnScroll
    >
      <NavBrand />
      <NavContent />
      <NavActions />
    </Navbar>
  );
};

const NavBrand = () => {
  const router = useRouter();
  const pathName = usePathname();

  return (
    <>
      <NavbarBrand
        style={{
          cursor: "pointer",
        }}
        onClick={() => router.push("/")}
      >
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
      <Navbar.Collapse>
        {navigationLinks.map((link, index) => (
          <Navbar.CollapseItem
            key={link.title}
            css={{
              color: index === navigationLinks.length - 1 ? "#" : "",
            }}
          >
            <Link
              style={{
                minWidth: "100%",
                color: "inherit",
              }}
              href={link.href}
            >
              {link.title}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </>
  );
};

const NavContent = () => {
  return (
    <Navbar.Content
      enableCursorHighlight
      activeColor={"secondary"}
      hideIn="sm"
      variant={"default"}
    >
      {navigationLinks.map((link) => (
        <NavBarItem
          key={link.title}
          href={link.href}
          title={link.title}
          urlname={link.urlname}
        />
      ))}
    </Navbar.Content>
  );
};

const NavActions = () => {
  const { theme } = useTheme();
  const pathName = usePathname();

  return (
    <Navbar.Content>
      {navigationSocialLinks.map((link) => (
        <Navbar.Item
          key={link.title}
          className={pathName == "/" ? "animate__animated animate__fadeIn" : ""}
        >
          <Navbar.Link href={link.href} target="_blank" as={Link}>
            <link.icon cursor={"pointer"} />
          </Navbar.Link>
        </Navbar.Item>
      ))}

      <Navbar.Link href={CV_URL} target="_blank" as={Link}>
        <Button
          size={"sm"}
          color={"primary"}
          animated
          //! Use this way because the theme is not working with tailwind
          style={{
            backgroundColor: theme?.colors.secondary.value,
          }}
        >
          <div className="hidden lg:block">Download &nbsp;</div>
          CV &nbsp; <AiOutlineDownload />
        </Button>
      </Navbar.Link>
    </Navbar.Content>
  );
};
