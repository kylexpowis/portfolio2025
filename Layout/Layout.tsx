import { Box } from "@mui/material";
import Head from "next/head";
import { useState } from "react";
import Navbar from "../src/components/Navbar/Navbar";
import { ILayout } from "../src/Types/Types";
import CustomDrawer from "../src/components/Drawer/Drawer";
import Footer from "../src/components/Footer/Footer";

const Layout = ({ navbarSx, title, children, desc }: ILayout) => {
  const [isOpen, setOpen] = useState(false);
  const toggleDrawer = (state?: boolean) => {
    setOpen(state !== undefined ? state : !isOpen);
  };

  return (
    <>
      <Head>
        <title>
          {title || "Kyle Powis Personal Portfolio | Front End Developer"}
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="shortcut icon"
          // href="" LOGO HERE
        />

        <meta
          name="description"
          content={`${
            desc || "Kyle Powis Personal Portfolio | Front End Developer"
          }`}
        />

        <meta
          property="og:title"
          content="Kyle Powis Personal Portfolio | Front End Developer"
        />

        {/* <meta property="og:url" content="" /> LINK FOR OG DEPLOY GOES HERE (in content= quotes) */}

        <meta
          property="og:description"
          content="Kyle Powis Personal Portfolio | Front End Developer, and this is my Portfolio"
        />

        {/* <!-- Og Type -->
<meta property="og:type" content="article" /> */}

        <meta httpEquiv="content-language" content="en" />
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <meta name="description" content="Site Meta Description" /> */}
        <meta name="keywords" content="Personal Portfolio" />
        <meta name="author" content="Kyle Powis" />
        <meta name="publisher" content="publisher" />
        <meta name="copyright" content="copyright" />
        <meta name="page-topic" content="Software & Web Development" />
        <meta name="page-type" content="Portfolio" />
        <meta name="audience" content="Everyone" />
        {/* <!-- Facebook, whatsapp, instagram, twitter and other popular social media --> */}
        {/* <meta property="og:title" content={title}/> */}
        {/* <meta property="og:description" content="Site Content short description"/> */}
        {/* <meta property="og:image" content="http://example.com/thumbnail.jpg"/> */}
        {/* <meta property="og:url" content="http://example.com"/> */}
        {/* <meta name="twitter:card" content="summary_large_image"/> */}

        {/* <!-- Some Non-essential but recommended --> */}
        {/* <meta property="og:site_name" content="Website Name"> <!-- Optional --> */}
        {/* <meta name="twitter:image:alt" content="Alt text for image"> <!-- Optional --> */}

        {/* <!-- If has need analytics for facebook and twitter --> */}
        {/* <meta property="fb:app_id" content="your_app_id" /> */}
        {/* <meta name="twitter:site" content="@website-username"/> */}
      </Head>
      <Navbar toggleDrawer={toggleDrawer} navbarSx={navbarSx} />
      <CustomDrawer isOpen={isOpen} toggleDrawer={toggleDrawer} />
      <Box className="site-content">{children}</Box>
      <Footer />
    </>
  );
};

export default Layout;
