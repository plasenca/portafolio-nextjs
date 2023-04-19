import { FC, PropsWithChildren } from "react";
import { NavbarApp } from "../ui";

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <NavbarApp />
      {children}
    </>
  );
};
