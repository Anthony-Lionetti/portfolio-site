import Img from "../assets/projects-placeholder.png";
import { React, Django, Postgress, MySQL } from "../assets/tech-logos";

export const projectList = [
  {
    img: Img,
    title: "Project Title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tech: [
      { name: "Next.js", logo: React },
      { name: "LangChain", logo: React },
      { name: "Redis", logo: React },
    ],
  },
  {
    img: Img,
    title: "Project2 Title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tech: [
      { name: "React", logo: React },
      { name: "Django", logo: Django },
      { name: "Prostgress", logo: Postgress },
      { name: "Docker", logo: React },
    ],
  },
  {
    img: Img,
    title: "Project3 Title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tech: [
      { name: "Next.js", logo: React },
      { name: "HuggingFace", logo: React },
      { name: "MySql", logo: MySQL },
    ],
  },
  {
    img: Img,
    title: "Project4 Title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tech: [
      { name: "React", logo: React },
      { name: "Django", logo: Django },
      { name: "PyTorch", logo: React },
      { name: "MySQL", logo: MySQL },
    ],
  },
];
