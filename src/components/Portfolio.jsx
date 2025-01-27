import { Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const projects = [
  { title: 'Proyecto 1', image: '/images/project1.jpg' },
  { title: 'Proyecto 2', image: '/images/project2.jpg' },
  { title: 'Proyecto 3', image: '/images/project3.jpg' },
];

const Portfolio = () => {
  return (
    <Grid container spacing={3} sx={{ padding: 4 }}>
      {projects.map((project, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card
            component={motion.div}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            sx={{ boxShadow: 3, transition: 'box-shadow 0.3s', '&:hover': { boxShadow: 6 } }}
          >
            <CardMedia
              component="img"
              height="140"
              image={project.image}
              alt={project.title}
            />
            <CardContent>
              <Typography variant="h6" align="center">
                {project.title}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Portfolio;