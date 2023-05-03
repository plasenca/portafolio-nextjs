import { FC, PropsWithChildren } from "react";
import { NavbarApp } from "../ui";

import styles from "./MainLayout.module.css";

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <NavbarApp />
      <div
        className={`${styles["background-gradient-radius"]} container mx-auto max-w-full`}
      >
        {children}
      </div>
    </>
  );
};
