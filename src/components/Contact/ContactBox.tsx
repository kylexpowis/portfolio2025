import { Box, Typography } from "@mui/material";
import { IContactBox } from "../../Types/Types";

const ContactBox = ({ t1, t2, t3, target, href }: IContactBox) => {
    return (
        <Box
            sx={{
                width: "100%",
                py: "1.5em",
                borderBottom: "1px solid rgba(255,255,255,0.1)",
                overflow: "hidden",
                flexShrink: 0,
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: {
                        xs: "column",
                        sm: "row"
                    },
                    alignItems: {
                        xs: "center",
                        sm: "flex-start"
                    },
                    gap: {
                        xs: "1em",
                        sm: "2em"
                    },
                }}
            >
                <Typography
                    variant="h1"
                    sx={{
                        fontSize: {
                            xs: "1.4em",
                            sm: "1.6em"
                        },
                        textAlign: {
                            xs: "center",
                            sm: "left"
                        },
                        fontWeight: "600",
                        flexShrink: 0,
                        "& a": {
                            textDecoration: "none",
                            color: "inherit",
                            transition: "color 0.2s ease",
                            "&:hover": {
                                color: "primary.main"
                            }
                        }
                    }}
                >
                    <a href={href} target={target || "_self"} rel="noopener noreferrer">
                        {t1}
                    </a>
                </Typography>

                <Box
                    sx={{
                        minWidth: {
                            xs: "100%",
                            sm: "250px"
                        },
                        maxWidth: {
                            xs: "100%",
                            sm: "250px"
                        },
                        textAlign: {
                            xs: "center",
                            sm: "right"
                        },
                        flexShrink: 0
                    }}
                >
                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: "1em",
                            cursor: "pointer",
                            fontWeight: "400",
                            mb: 0.5,
                            whiteSpace: "normal"
                        }}
                    >
                        {t2}
                    </Typography>
                    <Typography
                        variant="h3"
                        sx={{
                            fontSize: "1em",
                            fontWeight: "300",
                            color: "text.secondary",
                            whiteSpace: "normal"
                        }}
                    >
                        {t3}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default ContactBox;