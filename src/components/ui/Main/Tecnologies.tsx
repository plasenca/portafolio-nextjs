import NextLink from "next/link";

import { Button, Card, Link } from "@nextui-org/react";

import { IExpertise } from "@/entities";

const listExpertise: IExpertise[] = [
  {
    name: "Backend Developer",
    description:
      "Backend developer passionate about building robust and efficient applications using languages like Python and Typescript, and frameworks like FastAPI, Flask, Nestjs and Express.",
    projectsUrl: "url",
    color: "red",
  },
  {
    name: "Frontend Developer",
    description:
      "Enim quis nostrud eiusmod enim Lorem fugiat incididunt nostrud duis nulla.",
    projectsUrl: "url",
  },
  {
    name: "Mobile Developer",
    description:
      "Enim quis nostrud eiusmod enim Lorem fugiat incididunt nostrud duis nulla.",
    projectsUrl: "url",
  },
];

export const Tecnologies = () => {
  return (
    <section className="container mx-auto px-10 flex flex-col items-center pb-10">
      <h2 id="tecnologies" className="font-bold text-5xl pb-5">
        My Expertise
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
        {listExpertise.map((expertise) => (
          <CardTecnology key={expertise.name} {...expertise} />
        ))}
      </div>
    </section>
  );
};

const CardTecnology: React.FC<IExpertise> = ({
  name,
  description,
  projectsUrl,
}) => {
  return (
    <Card
      isHoverable
      css={{
        borderColor: "transparent",
      }}
    >
      <Card.Header>
        <p className="font-semibold text-lg">{name}</p>
      </Card.Header>
      <Card.Body>
        <p className="text-base">{description}</p>
      </Card.Body>
      <Card.Footer
        isBlurred
        css={{
          borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.1)",
          bottom: 0,
          zIndex: 1,
        }}
      >
        <div className="container grid grid-cols-2">
          <div className="flex items-center">Projects</div>
          <div className="flex justify-end">
            <Button flat auto rounded color={"secondary"}>
              <Link
                className="text-sm"
                color={"inherit"}
                as={NextLink}
                href="/#"
              >
                See them
              </Link>
            </Button>
          </div>
        </div>
      </Card.Footer>
    </Card>
  );
};
