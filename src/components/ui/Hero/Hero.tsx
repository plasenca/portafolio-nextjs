import NextLink from "next/link";

import { Link, useTheme } from "@nextui-org/react";

import { BsFillArrowRightCircleFill } from "react-icons/bs";

import styles from "./Hero.module.css";

export const Hero = () => {
  const { theme } = useTheme();

  return (
    <section className={`py-60 px-28 2xl:px-64 ${styles.hero}`}>
      <div className={`${styles["hero-background"]}`} />
      <div className="grid md:grid-cols-2 md:gap-4">
        <div className="flex flex-col items-start">
          <h1 className="text-4xl lg:text-6xl font-bold">
            Hi! I{"'"}m{" "}
            <span style={{ color: theme?.colors.yellow700.value }}>
              Franzua Plasencia
            </span>
          </h1>
          <p className="text-2xl pt-7 lg:text-3xl">
            Full-Stack Developer with{" "}
            <span
              style={{
                color: theme?.colors.primarySolidHover.value,
              }}
            >
              Backend
            </span>{" "}
            Focus and Strong Technical, Interpersonal Skills, Able to Work
            Effectively with Cross-Functional Teams and Stakeholders
          </p>
          <Link
            href="/#contact"
            as={NextLink}
            animated={false}
            css={{
              marginTop: "2rem",
              color: theme?.colors.success.value,
              paddingLeft: "0",
              paddingRight: "5rem",
            }}
          >
            <span className="text-xl">Let{"'"}s Connect</span>
            &nbsp; &nbsp; &nbsp;
            <BsFillArrowRightCircleFill size={22} />
          </Link>
        </div>
        <div
          className={`sm:hidden md:block ${styles["hero-astro"]} animate__animated animate__fadeInUp animate__slow`}
        />
      </div>
    </section>
  );
};
