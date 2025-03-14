import React from "react";
import { Typography, Container, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motion } from "framer-motion";

const experience = [
  {
    title: "Senior Frontend Developer | Etisalat, Abu Dhabi, UAE",
    duration: "April 2024 - Present",
    responsibilities: [
      "Developed and maintained high-performance, scalable React.js applications for telecommunication security projects used by UAE police.",
      "Implemented PrimeReact UI components and ensured seamless UI/UX experience.",
      "Optimized application performance and responsiveness through Redux and Redux-Toolkit for efficient state management.",
      "Created data visualization dashboards with Chart.js to display security statistics.",
      "Collaborated closely with UX/UI teams to translate wireframes into functional, pixel-perfect UIs.",
      "Ensured cross-browser compatibility and accessibility compliance.",
      "Integrated real-time data streams for live security monitoring dashboards.",
    ],
  },
  {
    title: "Tech Lead | Telemerge, Maharashtra, India",
    duration: "October 2022 - October 2023",
    responsibilities: [
      "Led a team of frontend developers to build high-performance web applications.",
      "Designed and implemented responsive web designs (RWD) ensuring cross-browser compatibility.",
      "Developed modular, reusable React.js components improving code maintainability.",
      "Conducted code reviews, mentored junior developers, and improved coding standards.",
      "Integrated RESTful APIs with frontend components for seamless user interaction.",
      "Improved frontend build processes using Webpack and Babel to reduce load times.",
      "Implemented unit and end-to-end testing strategies using Jest and Cypress.",
    ],
  },
  {
    title: "Senior Frontend Developer | Techefolks, Telangana, India",
    duration: "September 2020 - October 2022",
    responsibilities: [
      "Key contributor to a premium streaming platform, improving accessibility and SEO, increasing Google visibility by 80%.",
      "Improved website performance by 85% using lazy loading and code-splitting strategies.",
      "Integrated RESTful APIs and enhanced user authentication flow.",
      "Worked closely with stakeholders to deliver high-quality frontend solutions.",
      "Designed and developed interactive video streaming components.",
      "Implemented progressive web app (PWA) features for enhanced offline capabilities.",
      "Optimized front-end bundle size by removing unused dependencies and refactoring code.",
    ],
  },
  {
    title: "Software Developer | GGK Tech, Hyderabad, India",
    duration: "July 2017 - April 2019",
    responsibilities: [
      "Built custom business intelligence dashboards using React, Redux, and FusionCharts.",
      "Developed a mutual funds processing application using React and REST APIs.",
      "Collaborated with backend teams to optimize API interactions for efficiency.",
      "Implemented dynamic chart rendering to enhance data visualization.",
      "Developed reusable UI components to standardize design patterns across multiple projects.",
      "Integrated Docker for containerized deployment, improving application scalability and portability.",
      "Enhanced application security measures by implementing JWT authentication and secure API endpoints.",
    ],
  },
];

const Experience = () => {
  return (
    <Container id="experience" sx={{ padding: "80px 0" }}>
      <Typography variant="h3" gutterBottom>
        Work Experience
      </Typography>
      {experience.map((exp, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>{exp.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography><strong>Duration:</strong> {exp.duration}</Typography>
              <Typography><strong>Responsibilities:</strong></Typography>
              <ul>
                {exp.responsibilities.map((responsibility, i) => (
                  <li key={i}>{responsibility}</li>
                ))}
              </ul>
            </AccordionDetails>
          </Accordion>
        </motion.div>
      ))}
    </Container>
  );
};

export default Experience;