interface NavigationLink {
  title: string;
  href: string;
  urlname: string;
}

export const navigationLinks: NavigationLink[] = [
  {
    title: "Home",
    href: "/",
    urlname: "/",
  },
  {
    title: "Tecnologies",
    href: "/#tecnologies",
    urlname: "/#tecnologies",
  },
  {
    title: "Projects",
    href: "/projects",
    urlname: "/projects",
  },
  {
    title: "About",
    href: "/about",
    urlname: "/about",
  },
  {
    // TODO: Crear un blog para el enlace
    title: "Blog",
    href: "/",
    urlname: "/q",
  },
];