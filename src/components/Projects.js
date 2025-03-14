import React from "react";
import { Typography, Container, Grid, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Etisalat",
    description:
      "Developed a high-performance React.js dashboard for UAE police to monitor security statistics in real-time. Integrated Chart.js for data visualization and PrimeReact for UI components.",
    technologies: ["React.js", "Redux", "Chart.js", "PrimeReact", "RESTful APIs"],
    role: "Led the frontend development team and ensured cross-browser compatibility.",
    impact: "Improved real-time data monitoring efficiency by 40%.",
  },
  {
    title: "SonyLiv",
    description:
      "Enhanced a premium video streaming platform by implementing lazy loading, code-splitting, and PWA features. Improved SEO and accessibility, leading to an 80% increase in Google visibility.",
    technologies: ["React.js", "TypeScript", "Tailwind CSS", "PWA", "Webpack"],
    role: "Key contributor to frontend performance optimization.",
    impact: "Reduced page load time by 85% and improved user retention by 30%.",
  },
  {
    title: "Cytrack Dashboard",
    description:
      "Built custom business intelligence dashboards using React, Redux, and FusionCharts. Enabled dynamic chart rendering for better data visualization.",
    technologies: ["React.js", "Redux", "FusionCharts", "RESTful APIs"],
    role: "Designed and developed reusable UI components.",
    impact: "Streamlined data analysis processes for stakeholders.",
  },
  {
    title: "PControl Milestone",
    description:
      "Developed a mutual funds processing application using React and REST APIs. Integrated Docker for containerized deployment.",
    technologies: ["React.js", "RESTful APIs", "Docker", "JWT Authentication"],
    role: "Collaborated with backend teams to optimize API interactions.",
    impact: "Improved application scalability and portability.",
  },
];

const Projects = () => {
  return (
    <Container id="projects" sx={{ padding: "80px 0" }}>
      <Typography variant="h3" gutterBottom>
        Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    {project.description}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" gutterBottom>
                    <strong>Technologies:</strong> {project.technologies.join(", ")}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" gutterBottom>
                    <strong>Role:</strong> {project.role}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    <strong>Impact:</strong> {project.impact}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;