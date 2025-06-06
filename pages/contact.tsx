export { };
import {
  Box,
  Typography,
  Container,
  Button,
  FormControl,
  TextField,
} from "@mui/material";
import { useRef, useEffect, useState, useContext } from "react";
import HeroSectionAnimation from "../src/gsap/HeroSectionAnimation";
import gsap from "gsap";
import { Divider } from "@mui/material";
import Input from "../src/components/Mui/Input";
import ContactBox from "../src/components/Contact/ContactBox";
import Layout from "../Layout/Layout";
import SocialMedia from "../src/components/Contact/SocialMedia";
import emailjs from "@emailjs/browser";
import { ColorModeContext } from "./_app";

const Contact = () => {
  const colorMode = useContext(ColorModeContext);

  const ref = useRef(null);
  const form = useRef();
  const [status, setStatus] = useState(0);
  const [email, setEmail] = useState("");
  const color = status === 200 ? "green" : "red";
  const inputColor = colorMode.mode === "light" ? "black" : "white";

  useEffect(() => {
    // Move GSAP animations to client-side only
    const q = gsap.utils.selector(ref.current);
    
    gsap.to(".gradientBg2", {
      opacity: 1,
      duration: ".7",
      delay: ".75",
    });
    
    if (q) {
      HeroSectionAnimation(q);
    }
  }, []); // Remove q dependency

  const sendEmail = async (e: any) => {
    e.preventDefault();

    if (!form.current) return;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(regexEmail)) {
      setStatus(400);
      return;
    }

    const req = await emailjs.sendForm(
      `service_smmd8ag`,
      "template_9k196sc",
      form.current,
      "pzUVXXZJNg1RHRWZF"
    );
    const res = await req;
    setStatus(res ? res.status : 400);
  };

  return (
    <Layout
      title="Kyle Powis Contact Page"
      desc="If you have questions or need help you can contact me at kylepowis@gmail.com | Or Send a Message through the form."
    >
      <Container
        maxWidth="lg"
        sx={{
          pt: {
            xs: "7.5em",
            sm: "8.5em",
          },
          pb: "4em",
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Background elements */}
        <Box
          sx={{
            width: "150px",
            height: "150px",
            zIndex: "0",
            position: "absolute",
            top: { xs: "60%", sm: "75%" },
            transform: "rotate(15deg)",
            right: { xs: "80%", sm: "86%" },
            background: "transparent",
            backgroundImage: "radial-gradient(#0092ff 2px, transparent 0)",
            backgroundSize: "15px 13px",
          }}
        />
        <Box
          className="gradientBg2"
          sx={{
            width: "90px",
            height: "90px",
            zIndex: "0",
            position: "absolute",
            top: { xs: "6%", sm: "5%" },
            opacity: 0,
            right: "-4%",
            background: "transparent",
            backgroundImage: "radial-gradient(#0092ff 2px, transparent 0)",
            backgroundSize: "15px 13px",
          }}
        />

        {/* Hero Text */}
        <Box ref={ref}>
          <Typography
            className="t1"
            variant="h1"
            sx={{
              fontSize: { xs: "2.4em", sm: "3.4em", md: "3.8em" },
              textAlign: "center",
              transform: "translateY(40px)",
              opacity: 0,
              fontWeight: "600",
              mb: 3
            }}
          >
            Let&apos;s achieve the impossible together
          </Typography>
          <Typography
            variant="h2"
            className="secondary t2 t25o0"
            sx={{
              textAlign: "center",
              margin: "0 auto",
              fontSize: { xs: ".9em", sm: "1em" },
              maxWidth: "570px",
              fontWeight: "300",
              mb: 6
            }}
          >
            If you need help or have some questions, I&apos;ll be there ready and happy to help.
          </Typography>
        </Box>

        {/* Contact Form and Info */}
        <Box
          component="form"
          ref={form}
          onSubmit={sendEmail}
          sx={{
            width: { xs: "100%", md: "600px" },
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: 3
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              pb: "1em",
              color,
            }}
          >
            {status === 200 ? "Message sent. Expect a reply soon!" : ""}
            {status > 200 &&
              "There was an error, make sure to fill all the inputs and try again."}
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: "1em",
            }}
          >
            <Input name="user_name" label="Name" />
            <Input name="user_phone" type="number" label="Phone" />
          </Box>
          {/* <Input name="user_email" type='email' label='Email' mt='1em'/> */}

          <TextField
            name={"user_email"}
            type={"email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              color: inputColor || "black",
              input: {
                color: inputColor || "black",
              },
              width: "100%",
              mt: "1em",
            }}
            label={"Email"}
            variant="outlined"
          />

          <Input name="message" label="Subject" mt="1em" multi={true} />

          <Button
            type="submit"
            className="loadMore"
            variant="contained"
            sx={{
              display: "flex",
              margin: "4em auto ",
              padding: ".5em 3.5em",
              width: {
                xs: "100%",
                sm: "250px",
              },
              background: "transparent",
              border: "1px solid",
              color: "#fffff",
              ":hover": {
                border: "1px solid transparent",
              },
            }}
          >
            Send
          </Button>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Contact Information */}
        <Box sx={{ width: { xs: "100%", md: "600px" }, margin: "0 auto" }}>
          <ContactBox
            href="mailto:kylepowis@gmail.com"
            target="_blank"
            t1="Get in touch"
            t2="Email Address"
            t3="kylepowis@gmail.com"
          />
          <ContactBox
            target="_blank"
            href={""}
            t1="Contact Directly"
            t2="Phone Number"
            t3="+44 7427 235 749"
          />
        </Box>

        {/* Social Media */}
        <SocialMedia />
      </Container>
    </Layout>
  );
};

export default Contact;
