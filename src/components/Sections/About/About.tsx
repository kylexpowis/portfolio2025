import { Container, Box, Grid } from "@mui/material";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import ReadMore from "../ReadMore/ReadMore";
import { ColorModeContext } from "../../../../pages/_app";
import { useContext } from "react";
import kaidublin from "./kaidublincropped.png";
const About = () => {
  const colorMode = useContext(ColorModeContext);
  return (
    <>
      <Container
        id="about"
        maxWidth="lg"
        sx={{
          margin: "0 auto",
          py: "6em",
        }}
      >
        <Grid
          container
          sx={{
            justifyContent: {
              sm: "center",
              md: "space-between",
            },
          }}
        >
          <Grid item xs={12} sm={12} md={4} lg={5}>
            <Box
              sx={{
                maxWidth: "400px",
                width: "100%",
                height: "450px",
                margin: "0 auto",
                boxShadow: {
                  xs: "-.5em 1.5em 0px #FFFFFF",
                  sm: "-1.5em 1.5em 0px #FFFFFF",
                },
                position: "relative",
              }}
            >
              <Box
                sx={{
                  width: "100px",
                  height: "100px",
                  zIndex: "0",
                  position: "absolute",
                  right: {
                    xs: "-4%",
                    sm: "90%",
                  },

                  bottom: {
                    xs: "-5%",
                    sm: "-10%",
                  },
                  background: "transparent",
                  backgroundImage:
                    colorMode.mode === "dark"
                      ? "radial-gradient(white 2px, transparent 0)"
                      : "radial-gradient(black 2px, transparent 0)",
                  backgroundSize: "15px 13px",
                }}
              ></Box>
              <Image
                alt="Personal Image"
                className="img1 "
                fill
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                src={kaidublin}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={7.5} lg={7}>
            <Box
              sx={{
                pb: ".5em",
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: {
                    xs: "2.2em",
                    sm: "2.5em",
                    md: "3em",
                  },
                  py: ".5em",
                  pt: {
                    xs: "1.8em",
                    md: 0,
                  },
                }}
                fontWeight="600"
              >
                About Me
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  maxWidth: "570px",
                  fontSize: {
                    xs: ".8em",
                    sm: "1em",
                  },
                }}
              >
                Having discovered a deep-rooted passion for software
                development, I have used my experience during the Northcoders
                bootcamp to pivot my career into the industry. Coding allows me
                to harness my innate creativity and technical aptitude honed
                from my music production experience to master programming
                languages and software development methodologies. My past work
                experience has given me exceptional people skills, allowing me
                to seamlessly adapt to various settings. I am eager to
                contribute my diverse skill set, enthusiasm and adaptability to
                a thriving software development team.
              </Typography>
            </Box>
            <ReadMore>
              Aside from working hard, I tend to enjoy simple things like music,
              food, travelling and spending time with loved ones.
            </ReadMore>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default About;
