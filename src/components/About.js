import React from "react";
import { Typography, Container, Box, Grid } from "@mui/material";
import { motion } from "framer-motion";

const About = () => {
  return (
    <Box
      id="about"
      sx={{
        padding: "80px 0",
        backgroundImage: "url('/path/to/your/background-image.jpg')", // Add your background image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "rgba(0, 0, 0, 0.6)", // Dark overlay for better text visibility
        backgroundBlendMode: "multiply",
      }}
    >
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  component="img"
                  src="/images/profiepic.jpg" // Add your profile picture path
                  alt="Profile Picture"
                  sx={{
                    width: "250px",
                    height: "250px",
                    borderRadius: "50%",
                    border: "5px solid #3498db",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
                  }}
                />
              </Box>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold", color: "white" }}>
                About Me
              </Typography>
              <Typography variant="body1" sx={{ color: "white", lineHeight: "1.8" }}>
                A results-driven Senior Frontend Developer with 6.5 years of experience specializing in{" "}
                <strong>React.js, Redux, TypeScript, JavaScript, HTML, CSS, Vue, Tailwind CSS, Material UI, Webpack, Git, and RESTful APIs</strong>. Adept at building{" "}
                <strong>RWD (Responsive Web Design) interfaces</strong>, optimizing web applications for performance and scalability, and collaborating effectively with UX/UI teams.
              </Typography>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;