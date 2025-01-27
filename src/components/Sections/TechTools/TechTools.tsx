import { Container, Typography, Grid, Divider } from "@mui/material";
import { useContext, useEffect } from "react";
import { ColorModeContext } from "../../../../pages/_app";
import MainTitleAnimation from "../../../gsap/MainTitleAnimation";
import { centeredStyles } from "../Perks/Perks";
import ToolCard from "./ToolCard";
import gsap from "gsap";

const TechTools = () => {
  // Define your iconsArray
  const iconsArray = [
    {
      title: "JavaScript",
      isBackend: false,
      svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    },
    {
      title: "React",
      isBackend: false,
      svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
    {
      title: "Typescript",
      isBackend: true,
      svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    },
    {
      title: "Node.js",
      isBackend: true,
      svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    },
    {
      title: "PostgreSQL",
      isBackend: true,
      svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    },
    {
      title: "Supabase",
      isBackend: true,
      svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
    },
    {
      title: "Next.js",
      isBackend: false,
      svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    },
  ];

  let FrontendTools = iconsArray.filter((icon) => !icon.isBackend);
  let OtherTools = iconsArray.filter((icon) => icon.isBackend);

  const colorMode = useContext(ColorModeContext);

  // Handle theme-specific filtering
  const isfilterMode = (item: any) =>
    colorMode?.mode === "light" ? false : item?.filter;

  useEffect(() => {
    MainTitleAnimation(".title1", ".title2");
    gsap.to(".secondTitle", {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: ".secondTitle",
        start: "top 70%",
      },
    });
  }, []);

  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          margin: "0 auto",
          py: {
            xs: "6em",
          },
        }}
      >
        <Grid container>
          <Grid item sx={centeredStyles}>
            <Typography
              className=" title1 t25o0"
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
              My Tech Stack
            </Typography>
            <Typography
              variant="h2"
              className="secondary title2 t25o0"
              sx={{
                pt: "1.5em",
                maxWidth: "570px",
                fontSize: {
                  xs: ".8em",
                  sm: "1em",
                },
              }}
            >
              Frontend technologies I prefer using
            </Typography>
          </Grid>
          <Grid
            sx={{
              ...centeredStyles,
              flexDirection: "row",
              justifyContent: {
                xs: "center",
              },
              mt: "3em",
              flexWrap: "wrap",
            }}
            xs={12}
            item
          >
            {FrontendTools.map((item) => (
              <ToolCard
                className="toolCard1"
                filter={isfilterMode(item)}
                svg={item.svg}
                title={item.title}
                key={item.title}
              />
            ))}
          </Grid>

          {OtherTools.length > 0 && (
            <>
              <Grid item sx={centeredStyles}>
                <Typography
                  variant="h2"
                  className="secondary secondTitle t25o0"
                  sx={{
                    pt: "3.5em",
                    opacity: 0,
                    fontSize: {
                      xs: ".8em",
                      sm: "1em",
                    },
                  }}
                >
                  Other technologies
                </Typography>
              </Grid>
              <Grid
                sx={{
                  ...centeredStyles,
                  flexDirection: "row",
                  justifyContent: {
                    xs: "center",
                  },
                  mt: "3em",
                  flexWrap: "wrap",
                }}
                xs={12}
                item
              >
                {OtherTools.map((tool) => (
                  <ToolCard
                    className="toolCard2"
                    filter={isfilterMode(tool)}
                    svg={tool.svg}
                    title={tool.title}
                    key={tool.title}
                  />
                ))}
              </Grid>
            </>
          )}
        </Grid>
      </Container>
      <Divider />
    </>
  );
};

export default TechTools;
