import React from "react";
import { Typography, Container, Grid, Paper, Box } from "@mui/material";
import { motion } from "framer-motion";

const skills = [
  {
    category: "Frontend Development",
    skills: ["React.js", "Redux", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Vue.js", "Tailwind CSS", "Material UI", "Core UI", "PrimeReact"],
  },
  {
    category: "Performance & Optimization",
    skills: ["Webpack", "Lazy Loading", "Code Splitting", "Lighthouse Audits"],
  },
  {
    category: "Backend & APIs",
    skills: ["RESTful APIs", "ASP.NET", "Node.js"],
  },
  {
    category: "Version Control & CI/CD",
    skills: ["Git", "GitHub", "GitLab", "Bitbucket", "Docker"],
  },
  {
    category: "Testing & Debugging",
    skills: ["Jest", "Cypress", "Chrome DevTools"],
  },
  {
    category: "Project Management & Agile",
    skills: ["Jira", "Scrum"],
  },
];

const SkillCard = ({ category, skills }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Paper elevation={3} sx={{ padding: "20px", borderRadius: "10px", height: "100%" }}>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold", color: "primary.main" }}>
          {category}
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Paper
                elevation={2}
                sx={{
                  padding: "10px 15px",
                  borderRadius: "20px",
                  backgroundColor: "primary.main",
                  color: "white",
                  fontWeight: "500",
                }}
              >
                {skill}
              </Paper>
            </motion.div>
          ))}
        </Box>
      </Paper>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <Container id="skills" sx={{ padding: "80px 0" }}>
      <Typography variant="h3" gutterBottom sx={{ textAlign: "center", fontWeight: "bold", marginBottom: "40px" }}>
        Skills & Technologies
      </Typography>
      <Grid container spacing={4}>
        {skills.map((category, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <SkillCard category={category.category} skills={category.skills} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Skills;