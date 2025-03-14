import React from "react";
import { Typography, Button, Container } from "@mui/material";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <Container sx={{ textAlign: "center", padding: "100px 0" }}>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Typography variant="h2" gutterBottom>
          Shilpa Reddy Tippana
        </Typography>
        <Typography variant="h5" gutterBottom>
          Senior Frontend Developer
        </Typography>
        <Typography variant="body1" gutterBottom>
          Building Scalable, Responsive, and User-Friendly Web Applications
        </Typography>
        <Button variant="contained" color="primary" sx={{ marginTop: "20px" }}>
          Contact Me
        </Button>
      </motion.div>
    </Container>
  );
};

export default Hero;