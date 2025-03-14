import React from "react";
import { Typography, Container } from "@mui/material";

const Footer = () => {
  return (
    <Container sx={{ padding: "20px 0", textAlign: "center" }}>
      <Typography variant="body2">
        &copy; 2024 Shilpa Reddy Tippana. All rights reserved.
      </Typography>
    </Container>
  );
};

export default Footer;