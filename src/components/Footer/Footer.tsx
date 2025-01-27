import gsap from "gsap";
import { Box, Typography, Divider, Grid } from "@mui/material";

import Link from "next/link";
import { useRouter } from "next/router";
function Copyright() {
  return (
    <>
      <Divider />
      <Box
        maxWidth="lg"
        sx={{
          textAlign: "center",
          margin: "1em auto",
        }}
      >
        <Typography variant="h1" fontSize="1em">
          {"Copyright © "}
          <Link
            color="inherit"
            target="_blank"
            rel="noreferrer"
            href="https://kylepowis.dev"
          >
            kylepowis.dev
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Box>
    </>
  );
}
const styles = {
  mt: "1em",
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  flexWrap: "wrap",
  color: "white",
};

function Footer() {
  const router = useRouter();
  return (
    <Box>
      <Divider />
      <Box
        sx={{
          width: "100%",
          color: "white",
          minHeight: "200px",
          display: "flex",
          margin: "0 auto",
        }}
      >
        <Grid
          sx={{
            gap: "1.5em",
            mx: {
              xs: "3vw",
              lg: "auto",
            },
            my: "2em",
          }}
          maxWidth="lg"
          container
        >
          <Grid item xs={12} sm={6} md={5}></Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Typography variant="h1" fontSize="1.4em" fontWeight="400">
              Links
            </Typography>

            <Box className="link" sx={styles}>
              <Typography
                className="FooterLink"
                onClick={() => {
                  router.push("/");
                  gsap.to(window, { duration: 0.8, scrollTo: `#hero` });
                }}
              >
                Home
              </Typography>
              <Link href="/contact">Contact</Link>

              <Typography
                className="FooterLink"
                onClick={() => {
                  router.push("/");
                  gsap.to(window, { duration: 0.5, scrollTo: `#about` });
                }}
              >
                About
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3} md={3}>
            <Typography variant="h1" fontSize="1.4em" fontWeight="400">
              Contact
            </Typography>
            <Box className="link" sx={styles}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/kylexpowis"
              >
                Github
              </a>
              <Typography variant="h1" fontSize="1em">
                kylepowis@gmail.com
              </Typography>
              <Typography variant="h1" fontSize="1em">
                Manchester UK
              </Typography>
              <Typography variant="h1" fontSize="1em">
                +44 7427 235 749
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Copyright />
    </Box>
  );
}
export default Footer;
