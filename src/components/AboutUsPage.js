import React from "react";
import "@mui/material/styles";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "./Footer";

const theme = createTheme({
  typography: {
    fontFamily: "Roboto, sans-serif",
    h2: {
      fontWeight: 700,
      color: "#2E3B4E",
    },
    h4: {
      fontWeight: 600,
      color: "#2E3B4E",
    },
    body1: {
      color: "#4A4A4A",
    },
    h5: {
      color: "#6C757D",
    },
  },
  palette: {
    primary: {
      main: "#007BFF",
    },
    secondary: {
      main: "#6C757D",
    },
    background: {
      default: "#F8F9FA",
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.12)",
          borderRadius: "16px",
          backgroundColor: "#FFFFFF",
        },
      },
    },
  },
});

const AboutUs = () => {
  return (
    <div>
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" style={{ padding: "2rem" }}>
        <header style={{ textAlign: "center", marginBottom: "2rem" }}>
          <Typography variant="h2" component="h1" gutterBottom >
          {/* About Us */}
          </Typography>
          <Typography variant="h3" gutterBottom >
             
          </Typography>
        </header>

        <Grid container spacing={4} alignItems="center" style={{ marginTop: "2rem" }}>
          <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom textAlign="center" sx={{ marginBottom: "1.5rem", fontWeight: 700 }}>              Our Mission
            </Typography>
            <Typography
              variant="body1"
              sx={{
                lineHeight: 1.8,
                color: "#4A4A4A",
                fontSize: { xs: "16px", sm: "18px", md: "20px" },
                marginBottom: "1.5rem",
                textAlign:"justify"
              }}
            >
              To empower businesses in the manufacturing sector to overcome supply chain
              challenges and foster sustainable growth. From raw material procurement to quality
              assurance, we bring all essential resources together on a single, comprehensive
              platform.
              {/* <ul>
                <li>Expertise in diverse industries</li>
                <li>Client-centric approach</li>
                <li>Proven track record of success</li>
                <li>Focus on innovation and quality</li>
              </ul> */}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardMedia
                component="img"
                height="300"
                image="/media/unnamed.jpg"
                alt="Why Choose Us"
                style={{ objectFit: "contain" }}
              />
            </Card>
          </Grid>
        </Grid>

        <Grid container spacing={4} alignItems="center" marginTop={"5rem"}>
  <Grid item xs={12} md={6}>
    <Typography variant="h4" gutterBottom textAlign="center" sx={{ marginBottom: "1.5rem", fontWeight: 700 }}>
      <strong>Who are we</strong>
    </Typography>
    <Typography
      variant="body1"
      sx={{
        lineHeight: 1.4, // Improved line height for readability
        color: "#4A4A4A",
        fontSize: { xs: "16px", sm: "18px", md: "20px" }, // Adaptive font size
        letterSpacing: "0.5px", // Slight letter spacing for better flow
        marginBottom: "1.5rem", 
        textAlign: "justify",
      }}
    >
      SureSupply connects businesses with a curated network of trusted partners, offering
      competitive pricing, fast delivery, secure payments, and integrated supply chain
      finance—all through a simple and intuitive platform. We specialize in making raw material procurement easier, safer, and more
      convenient. With unmatched convenience and a seamless experience, we help
      businesses worldwide access the resources they need to grow and thrive in today’s
      competitive market.
    </Typography>
  </Grid>

  <Grid item xs={12} md={6}>
    <Card>
      <CardMedia
        component="img"
        height="400"
        image="media/64644.jpg"
        alt="Our Team"
        style={{ objectFit: "contain" }}
      />
    </Card>
  </Grid>
</Grid>

        

        <Grid container spacing={4} alignItems="center" style={{ marginTop: "5rem" }}>
          
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom textAlign="center" >
              Story
            </Typography>
            <Typography
              variant="body1"
              sx={{
                lineHeight: 1.8, // Improved line height for readability
                color: "#4A4A4A",
                fontSize: { xs: "16px", sm: "18px", md: "20px" }, // Adaptive font size
                letterSpacing: "0.5px", // Slight letter spacing for better flow
                marginBottom: "1.5rem", // Add space between paragraphs
                textAlign: "justify"
              }}
            >
            SureSupply was founded by Akash Nakum, an IIM Udaipur alumnus with an MBA
            and a background in mechanical engineering. Having firsthand experience managing
            an MSME manufacturing unit, Akash has a deep understanding of the challenges
            faced by the manufacturing sector.
            <Typography></Typography>
            Driven by a passion to empower the manufacturing industry, Akash founded
            SureSupply to bridge critical gaps in the supply chain and provide technology-driven
            support to both MSMEs and large enterprises. At SureSupply, we are always eager to
            collaborate and connect—reach out to discover how we can create value together.
            
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardMedia
                component="img"
                height="auto"
                image="/media/na_feb_10.jpg"
                alt="Our Mission"
                style={{ objectFit: "contain" }}
              />
            </Card>
          </Grid>
        </Grid>

        
      </Container>
    </ThemeProvider>
    </div>
  );
};

export default AboutUs;
