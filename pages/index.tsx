export {};
import type { NextPage } from "next";
import { Box } from "@mui/material";
import Experience from "../src/components/Sections/TechTools/TechTools";
import Hero from "../src/components/Sections/Hero/Hero";
import Perks from "../src/components/Sections/Perks/Perks";
import Projects from "../src/components/Sections/Projects/Projects";
import CTA from "../src/components/Sections/CallToAction/CTA";
import { useEffect, useRef } from "react";
import CursorAnimation from "../src/gsap/CursorAnimation";
import About from "../src/components/Sections/About/About";
import Layout from "../Layout/Layout";

// Define the types for the objects in the arrays
interface Project {
  title: string;
  repoUrl: string;
  siteUrl: string;
  description: string;
  img: string;
}

interface Icon {
  filter: string;
  svg: string;
  title: string;
  isBackend: boolean;
}

// Static data for the projects and icons (since you store content in the public folder)
const projectsArray: Project[] = [
  {
    title: "Kaizen Development",
    img: "/projects/kaizendevlogo.png", // Image path in public folder
    siteUrl: "https://kaizendevelopment.uk",
    repoUrl: "", // Add the repo URL if available, otherwise leave it empty
    description:
      "My own web development agency focusing new websites and google ads.",
  },
  {
    title: "Pairsniper Data Analytics",
    img: "/projects/pairsniperlogo.svg", // Image path in public folder
    siteUrl: "https://fe-demo-data.vercel.app/",
    repoUrl: "",
    description:
      "Cryptocurrency data analytics platform providing insights into trading trends using the coinmarketcap API.",
  },
  {
    title: "Cluster Books",
    img: "/projects/clusterbookslogo2.png", // Image path in public folder
    siteUrl: "https://northcoders.com/project-phase/cluster-books",
    repoUrl: "",
    description:
      "A platform for swapping books with other book enthusiasts, built during my time at the northcoders bootcamp.",
  },
  {
    title: "Stolen Society",
    img: "/projects/stolensocietylogoportfolio.png", // Image path in public folder
    siteUrl: "https://stolensociety.co.uk/",
    repoUrl: "",
    description: "Landing page with email collection and shopify store.",
  },
];

const iconsArray: Icon[] = [
  {
    filter: "React",
    svg: "/icons/react.svg", // Example icon path
    title: "React",
    isBackend: false,
  },
  {
    filter: "Node.js",
    svg: "/icons/nodejs.svg", // Example icon path
    title: "Node.js",
    isBackend: true,
  },
  // Add more icons here if needed
];

const Home: NextPage = () => {
  const ball = useRef(null);

  useEffect(() => {
    if (ball.current) {
      CursorAnimation(ball.current);
    }
  }, []);

  return (
    <Layout
      desc="Kyle Powis | Front End Developer | Personal Portfolio Website"
      title="Kyle Powis | Front End Developer"
    >
      <Box sx={{ margin: "0 auto", color: "white" }}>
        <Hero />
        <Perks />
        <Experience iconsArray={iconsArray} />
        <Projects projectsArray={projectsArray} />
        <About />
        <CTA />
        <Box
          ref={ball}
          sx={{ display: { xs: "none", md: "block" } }}
          className="ball"
        ></Box>
      </Box>
    </Layout>
  );
};

export default Home;
