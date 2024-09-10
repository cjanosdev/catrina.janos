import React from 'react';
import { Typography, Box, Avatar, Container, Paper, ListItem, List, ListItemText, IconButton, Link } from '@mui/material';
import { StaticImage } from "gatsby-plugin-image";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import * as styles from './homepage.module.css';

const SocialIconButton = styled(IconButton)(({ theme }) => ({
  margin: theme.spacing(1),
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.1)',
    backgroundColor: 'transparent',
  },
}));

const HomePage: React.FC = () => {

  const theme = useTheme(); // Hook to access the theme
  return (
    <Container>
      <Paper elevation={3} sx={{ padding: '20px', marginTop: '20px' }}>
        {/* Row 1: Large Centered Image */}
        <Box 
          display="flex" 
          flexDirection="column" 
          alignItems="center"
          mb={4} // margin-bottom to create space between rows
        >
          <Avatar
            sx={{ 
              width: 250, 
              height: 350, 
              borderRadius: '50%', 
              boxShadow: 3 
            }}
          >
            <StaticImage
              src="../images/grad_img_Large.jpeg"
              alt="Catrina Janos"
              layout="fixed"
              width={250}
              height={350}
              placeholder="blurred"
              style={{ borderRadius: '50%' }}
            />
          </Avatar>

        {/* Social Media Icons */}
        <Box display="flex" justifyContent="center" mt={2}>
          <IconButton
            aria-label="LinkedIn"
            href="https://www.linkedin.com/in/catrinajanos/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.socialIcon} ${styles.LinkedIn}`}
          >
            <LinkedInIcon sx={{ fontSize: 40 }} />
          </IconButton>
          <IconButton
            aria-label="Email"
            href="mailto:cjanosdev@protonmail.com"
            className={`${styles.socialIcon} ${styles.Email}`}
          >
            <EmailIcon sx={{ fontSize: 40 }} />
          </IconButton>
        </Box>
      </Box>


        {/* Row 2: Two Columns for Content */}
        <Box 
          display="flex" 
          flexDirection={{ xs: 'column', md: 'row' }} 
          gap={{ xs: 2, md: 4 }} // space between columns
        >
          {/* Left Column: Introductory and Concluding Paragraphs */}
          <Box
            flex={{ xs: '1', md: '2' }}
            textAlign={{ xs: 'center', md: 'left' }}
            sx={{
              backgroundColor: theme.palette.secondary.main,
              padding: '20px',
            }}
          >
            <Typography variant="h4" sx={{ marginBottom: '10px' }}>
              Hello, I am Catrina Janos!
            </Typography>
            <Typography variant="body1" paragraph>
              I’m a PhD student at the University of New Hampshire (UNH) with a solid academic foundation in computer science. My journey began with an Associate of Science in Information Technology from NHTI – Concord’s Community College (May 2016), followed by a Bachelor of Science in Computer Science from UNH (May 2024). During this time, I developed a deep interest in distributed systems, robotics, IoT, security, and networking, and I am eager to explore these fields further through research.
            </Typography>
            <Typography variant="body1" paragraph>
              My technical expertise spans a wide range of languages and frameworks, including C, C++, C#, Java, JavaScript, React/TypeScript, Go, Scala, and Python, and I am currently exploring Rust. My research interests lie in edge computing, where I’m particularly fascinated by decentralized federated learning, which enables machine learning models to be trained across distributed devices without compromising privacy. I’m also interested in robotics and multi-agent system coordination, where I hope to explore how autonomous systems can collaborate and coordinate tasks efficiently in dynamic environments.
            </Typography>
            <Typography variant="body1" paragraph>
              Thank you for visiting my page, and feel free to connect with me to discuss research, share insights, or collaborate on future projects!
            </Typography>
          </Box>

          {/* Right Column: Professional Experience */}
          <Box
            flex={{ xs: '1', md: '1' }}
            sx={{
              backgroundColor: theme.palette.primary.main,
              padding: '20px',
            }}
          >
            <Typography variant="h4" sx={{ marginBottom: '10px' }}>
              Professional Experience
            </Typography>
            <Typography variant="body1" paragraph>
              While pursuing my academics I worked in industry for Geocomp, a geostructural engineering company. I worked as a member of the research and development department on various projects focused on infrastructure monitoring software and services.
            </Typography>
            <Box sx={{ marginTop: '10px' }}>
              <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                Projects at Geocomp
              </Typography>
              <List sx={{ paddingLeft: 0, paddingTop: 0 }}>
                <ListItem>
                  <ListItemText
                    primary={
                      <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'whitesmoke' }}>
                        Desktop Development (Governor Mario M. Cuomo Bridge Project):
                      </Typography>
                    }
                    secondary={
                      <Typography variant="body1" paragraph sx={{ marginTop: '10px' }}>
                        <ul>
                          <li>Developed a desktop application to monitor the structural health of the bridge in real-time.</li>
                          <li>Integrated with multiple sensor networks for continuous data collection, processing, and analysis.</li>
                          <li>Provided actionable insights to ensure bridge safety.</li>
                          <li>Backend development in C#.</li>
                          <li>Frontend development using Windows Presentation Foundation (WPF) framework.</li>
                        </ul>
                      </Typography>
                    }
                  />
                </ListItem>

                <ListItem>
                  <ListItemText
                    primary={
                      <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'whitesmoke'  }}>
                        Charting Microservice Development:
                      </Typography>
                    }
                    secondary={
                      <Typography variant="body1" paragraph sx={{ marginTop: '10px' }}>
                        <ul>
                          <li>Created a NestJS-based microservice to centralize chart rendering.</li>
                          <li>Replaced previous systems: a React application and a Microsoft Word add-in.</li>
                          <li>Enhanced scalability and performance.</li>
                          <li>Ensured consistent chart outputs across different applications.</li>
                        </ul>
                      </Typography>
                    }
                  />
                </ListItem>

                <ListItem>
                  <ListItemText
                    primary={
                      <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'whitesmoke'  }}>
                        DevOps Workflow Optimization:
                      </Typography>
                    }
                    secondary={
                      <Typography variant="body1" paragraph sx={{ marginTop: '10px' }}>
                        <ul>
                          <li>Set up Azure DevOps pipelines for automated build, test, and deployment processes.</li>
                          <li>Implemented gated builds and reliable deployment to Azure App Service in a Docker container.</li>
                          <li>Streamlined development workflows and improved overall efficiency.</li>
                        </ul>
                      </Typography>
                    }
                  />
                </ListItem>

                <ListItem>
                  <ListItemText
                    primary={
                      <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'whitesmoke'  }}>
                        PR Poke Tool:
                      </Typography>
                    }
                    secondary={
                      <Typography variant="body1" paragraph sx={{ marginTop: '10px' }}>
                        <ul>
                          <li>Developed an automation tool integrating Azure DevOps and Slack.</li>
                          <li>Monitors pull request (PR) statuses and sends notifications via Slack.</li>
                          <li>Reduced bottlenecks in the review process.</li>
                          <li>Improved the efficiency of development teams.</li>
                        </ul>
                      </Typography>
                    }
                  />
                </ListItem>

                <ListItem>
                  <ListItemText
                    primary={
                      <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'whitesmoke'  }}>
                        iSiteCentral:
                      </Typography>
                    }
                    secondary={
                      <Typography variant="body1" paragraph sx={{ marginTop: '10px' }}>
                        <ul>
                          <li>Played a crucial role in the development of iSiteCentral, a web-based platform for construction risk management and structural health monitoring.</li>
                          <li>Managed real-time data across thousands of sensors in various projects, from small-scale to enterprise-level.</li>
                          <li>Enhanced the platform’s ability to process and visualize both structured and unstructured data.</li>
                          <li>Improved integration flexibility with various sensor manufacturers.</li>
                          <li>Contributed to developing both frontend and backend components.</li>
                        </ul>
                      </Typography>
                    }
                  />
                </ListItem>
              </List>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}

export default HomePage;
