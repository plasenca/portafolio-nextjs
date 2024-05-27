import { Navbar, NavbarContent } from "@nextui-org/react";

import { navigationLinks } from "@/config/ui-config/navigation/navigation-links";

import { NavBarActions } from "./NavBarActions";
import { NavBarBrand } from "./NavBarBrand";
import { NavBarItem } from "./NavBarItem";

export const NavBarApp = () => {
  return (
    <Navbar
      position={"sticky"}
      className="fixed rounded-3xl mt-4 lg:ml-4 lg:mr-4 justify-center"
      shouldHideOnScroll
    >
      <NavBarBrand />
      <NavContent />
      <NavBarActions />
    </Navbar>
  );
};

const NavContent = () => {
  return (
    <NavbarContent className="hidden sm:block" justify="start">
      {navigationLinks.map((link) => (
        <NavBarItem
          key={link.title}
          href={link.href}
          title={link.title}
          urlname={link.urlname}
        />
      ))}
    </NavbarContent>
  );
};
