import Image from "next/image";
import Link from "next/link";

import { Button, Navbar, Text, useSSR } from "@nextui-org/react";
import { useRouter } from "next/router";

import { AiOutlineDownload } from "react-icons/ai";

import { navigationLinks, navigationSocialLinks } from "@/config";
import { LinkNav } from "./LinkNav";

//* Constants

const CV_URL =
  "https://drive.google.com/file/d/1rcRGmlSABk2yvCuphu89V40s3-LCQzpv/view?usp=sharing";

export const NavbarApp = () => {
  // const { isDark } = useTheme();
  const router = useRouter();

  //* Check if is in the browser
  const { isBrowser } = useSSR();
  if (!isBrowser) return null;

  return (
    <Navbar variant={"sticky"} shouldHideOnScroll>
      <NavBrand />
      <NavContent />
      <NavActions />
    </Navbar>
  );
};

const NavBrand = () => {
  const router = useRouter();

  return (
    <>
      <Navbar.Brand
        style={{
          cursor: "pointer",
        }}
        onClick={() => router.push("/")}
      >
        <Navbar.Toggle
          aria-label="toggle navigation"
          showIn={"sm"}
          className="animate__animated animate__fadeIn"
        />
        <Image
          alt="Logo de Franzua Plasencia"
          src={`/static/logo.png`}
          width="50"
          height="50"
          priority
        />
        <Text
          b
          color="inherit"
          hideIn="xs"
          className="animate__animated animate__fadeIn"
        >
          Franzua Plasencia
        </Text>
      </Navbar.Brand>
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
        <LinkNav
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
  return (
    <Navbar.Content>
      {navigationSocialLinks.map((link) => (
        <Navbar.Item
          key={link.title}
          css={{
            "&:hover": {
              borderRadius: "50%",
              backgroundColor: "$secondary",
              color: "white",
            },
            padding: "0.5rem",
          }}
        >
          <Navbar.Link href={link.href} target="_blank" as={Link}>
            <link.icon cursor={"pointer"} />
          </Navbar.Link>
        </Navbar.Item>
      ))}

      <Navbar.Link href={CV_URL} target="_blank" as={Link}>
        <Button size={"sm"} color="secondary" animated>
          <div>Download &nbsp;</div>
          CV &nbsp; <AiOutlineDownload />
        </Button>
      </Navbar.Link>
    </Navbar.Content>
  );
};
