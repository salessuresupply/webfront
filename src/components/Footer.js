import React from "react";
// import HomeIcon from '@mui/icons-material/Home';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Link from "@mui/material/Link";
import { LinkedIn, Home, Phone as PhoneIcon, Facebook, Close as CloseIcon, MailOutline } from "@mui/icons-material";

const theme = createTheme({
  typography: {
    fontFamily: "Roboto, sans-serif",
    h6: {
      fontWeight: 700,
      color: "#2E3B4E",
    },
    body1: {
      color: "#4A4A4A",
    },
    body2: {
      color: "#6C757D",
    },
  },
  palette: {
    primary: {
      main: "#007BFF",
    },
    background: {
      default: "#F8F9FA",
    },
  },
});

const Footer = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundColor: "#204392",
          color: "#fff",
          padding: "50px 0",
          marginTop: "50px"
        }}
      >
        <Container maxWidth="lg">
          <Grid container justifyContent="center" spacing={3}>
            <Grid item xs={12} sm={4} sx={{ textAlign: { xs: "center", sm: "left" } }}>
              <Typography variant="h6" gutterBottom color="inherit">
                {/* Contact Information */}
              </Typography>
              <Typography variant="body1" gutterBottom color="inherit">
                <Home sx={{ verticalAlign: "middle", marginRight: "8px" }} /> Jamnagar, Gujarat. 361007
              </Typography>
              <Typography variant="body1" gutterBottom color="inherit">
                <PhoneIcon sx={{ verticalAlign: "middle", marginRight: "8px", color: "white" }} /> +91-8780952559
              </Typography>
              <Typography variant="body1" color="inherit">
                <MailOutline sx={{ verticalAlign: "middle", marginRight: "8px", color: "white" }} /> sales@suresupply.in
              </Typography>
            </Grid>

            <Grid item xs={12} sm={4} sx={{ textAlign: { xs: "center", sm: "center" } }}>
              <Typography variant="h6" gutterBottom color="inherit">
                Follow Us
              </Typography>
              <Typography variant="body1" color="inherit">
                <Link href="https://www.linkedin.com/company/sure-supply/" target="_blank" color="inherit" underline="hover">
                  <LinkedIn sx={{ verticalAlign: "middle", marginRight: "8px" }} />
                </Link>
                <Link href="https://facebook.com/" target="_blank" color="inherit" underline="hover">
                  <Facebook sx={{ verticalAlign: "middle", marginRight: "8px" }} />
                </Link>
                <Link href="https://twitter.com/" target="_blank" color="inherit" underline="hover">
                  <CloseIcon sx={{ verticalAlign: "middle" }} />
                </Link>
              </Typography>
            </Grid>

            <Grid item xs={12} sm={4} sx={{ textAlign: { xs: "center", sm: "right" } }}>
              <Typography variant="body2" color="inherit">
                © 2024 SURESUPPLY. All rights reserved.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Footer;
