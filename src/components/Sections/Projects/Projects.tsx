import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Tooltip,
  Typography,
} from "@mui/material";
import { centeredStyles } from "../Perks/Perks";
import ProjectCard from "./ProjectCard";
import { useEffect } from "react";
import MainTitleAnimation from "../../../gsap/MainTitleAnimation";
import gsap from "gsap";

const projectsArray = [
  {
    title: "Kaizen Development",
    img: "/projects/kaizendevlogo.png", // Ensure the image is placed in the appropriate folder
    siteUrl: "https://kaizendevelopment.uk",
    repoUrl: "", // Add the repo URL if available, otherwise leave it empty
    description:
      "My own web development agency focusing new websites and google ads.",
  },
  {
    title: "Pairsniper Data Analytics",
    img: "/projects/pairsniperlogo.svg", // Image path
    siteUrl: "https://fe-demo-data.vercel.app/",
    repoUrl: "",
    description:
      "Cryptocurrency data analytics platform providing insights into trading trends using the coinmarketcap API.",
  },
  {
    title: "Cluster Books",
    img: "/projects/clusterbookslogo2.png", // Image path
    siteUrl: "https://northcoders.com/project-phase/cluster-books",
    repoUrl: "",
    description:
      "A platform for swapping books with other book enthusiasts, built during my time at the northcoders bootcamp.",
  },
  {
    title: "Stolen Society",
    img: "/projects/stolensocietylogoportfolio.png", // Image path
    siteUrl: "https://stolensociety.co.uk/",
    repoUrl: "",
    description: "Landing page with email collection and shopify store.",
  },
];

const Projects = () => {
  useEffect(() => {
    MainTitleAnimation(".title3", ".title4");

    setTimeout(() => {
      for (let i = 0; i < projectsArray.length; i++) {
        gsap.to(`.p${i}`, {
          duration: 0.8,
          transform: "translateX(0%)",
          ease: "easeIn",
          scrollTrigger: {
            trigger: `.p${i}`,
            start: "top 60%",
          },
        });
      }
    }, 100);
  }, []);

  return (
    <Box
      sx={{
        overflowX: "hidden",
      }}
    >
      <Container
        id="ProjectSection"
        maxWidth="lg"
        sx={{
          margin: "0 auto",
          py: "6em",
        }}
      >
        <Grid container>
          <Grid item sx={centeredStyles}>
            <Typography
              className="title3 t25o0"
              variant="h1"
              sx={{
                fontSize: {
                  xs: "2.2em",
                  sm: "2.5em",
                  md: "3em",
                },
              }}
              fontWeight="600"
            >
              Projects
            </Typography>
            <Typography
              className="title4 t25o0"
              variant="h2"
              sx={{
                pt: "1.5em",
                maxWidth: "570px",
                fontSize: {
                  xs: ".8em",
                  sm: "1em",
                },
              }}
            >
              No better way to get experience than real-life projects
            </Typography>
          </Grid>
          <Box
            sx={{
              ...centeredStyles,
              mt: "3em",
            }}
          >
            {projectsArray.map((project, index) => (
              <ProjectCard
                key={project.title}
                className={`p${index}`}
                isReversed={index % 2 === 0}
                siteUrl={project.siteUrl}
                repoUrl={project.repoUrl}
                title={project.title}
                img={project.img}
                description={project.description}
              />
            ))}
          </Box>
          <Box
            sx={{
              margin: "0 auto",
              mt: "3em",
            }}
          >
            <Tooltip title="More Projects Soon">
              <Button
                className="loadMore"
                variant="contained"
                sx={{
                  opacity: 0,
                  padding: ".5em 3.5em",
                  background: "transparent",
                  border: "1px solid",
                  color: "#FFFFFF",
                  ":hover": {
                    border: "1px solid transparent",
                  },
                }}
              >
                Load More
              </Button>
            </Tooltip>
          </Box>
        </Grid>
      </Container>
      <Divider className="divider" />
    </Box>
  );
};

export default Projects;
