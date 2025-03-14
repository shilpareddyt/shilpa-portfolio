import React from "react";
import { Typography, Container, Button, Grid, Box, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Contact = () => {
  return (
    <Container id="contact" sx={{ padding: "80px 0", textAlign: "center" }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Typography variant="h3" gutterBottom>
          Contact Me
        </Typography>
        <Typography variant="body1" gutterBottom>
          Feel free to reach out to me for collaborations or opportunities!
        </Typography>

        {/* Contact Details */}
        <Grid container spacing={4} sx={{ marginTop: "20px" }}>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <IconButton color="primary" href="mailto:shilpareddyt10@gmail.com">
                <EmailIcon fontSize="large" />
              </IconButton>
              <Box sx={{ marginLeft: "10px" }}>
                <Typography variant="h6">Email</Typography>
                <Typography variant="body1">shilpareddyt10@gmail.com</Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <IconButton color="primary" href="tel:+971501253638">
                <PhoneIcon fontSize="large" />
              </IconButton>
              <Box sx={{ marginLeft: "10px" }}>
                <Typography variant="h6">Phone</Typography>
                <Typography variant="body1">+971 501253638</Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <IconButton color="primary">
                <LocationOnIcon fontSize="large" />
              </IconButton>
              <Box sx={{ marginLeft: "10px" }}>
                <Typography variant="h6">Location</Typography>
                <Typography variant="body1">Al Khalidiya, Abu Dhabi, UAE</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Email Button */}
        <Button
          variant="contained"
          color="primary"
          href="mailto:shilpareddyt10@gmail.com"
          sx={{ marginTop: "40px" }}
        >
          Email Me
        </Button>
      </motion.div>
    </Container>
  );
};

export default Contact;