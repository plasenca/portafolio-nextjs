import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { Navbar } from "@nextui-org/react";

interface Props {
  href: string;
  title: string;
  urlname: string;
  isCollapse?: boolean;
}

export const NavBarItem: React.FC<Props> = ({
  title,
  href,
  urlname,
  isCollapse = false,
}) => {
  const router = useRouter();
  const pathName = usePathname();
  return (
    <Navbar.Link
      isActive={pathName == urlname}
      variant={isCollapse ? "underline" : "highlight"}
      href={href}
      as={Link}
      className="animate__animated animate__fadeIn"
    >
      {title}
    </Navbar.Link>
  );
};
