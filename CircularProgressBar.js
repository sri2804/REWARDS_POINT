import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import assignment from './images/assignment.png';
import skills from './images/skills.jpeg';
import logo from './images/logo.png';
import tac from './images/TAC.jpeg';
import spl from './images/speciallabs.png'
import tech from './images/techevents.png'
const categories = [
  {
    id: 1,
    icon: assignment,
    title: "Assignments",
    gainedPoints: 50,
    totalPoints: 700
  },
  {
    id: 2,
    icon: skills,
    title: "Skills",
    gainedPoints: 75,
    totalPoints: 150
  },
  {
    id: 3,
    icon:tac,
    title: "TAC",
    gainedPoints: 25,
    totalPoints: 200
  },
  {
    id: 4,
    icon:spl,
    title: "Special Lab Activities",
    gainedPoints: 125,
    totalPoints: 500
  },
  {
    id: 5,
    icon: tech,
    title: "Technical Events",
    gainedPoints: 200,
    totalPoints: 200
  }, {
    id: 6,
    icon: assignment,
    title: "Category 3",
    gainedPoints: 25,
    totalPoints: 200
  },
  // Add more categories as needed
];

const CircularProgressBar = ({ icon, title, gainedPoints, totalPoints }) => {
  const progress = (gainedPoints / totalPoints) * 100;

  return (
    <Card variant="outlined" style={{ marginBottom: '20px', width: '100%' }}>
      <CardContent>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <div>
            <img src={icon} alt="Category Icon" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
            <Typography variant="subtitle1">{title}</Typography>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Box position="relative" display="inline-flex">
              <CircularProgress variant="determinate" value={progress} size={80} thickness={5} />
              <Box
                top={0}
                left={0}
                bottom={0}
                right={0}
                position="absolute"
                display="flex"
                alignItems="center"
                justifyContent="center"
                width="100%"
              >
                <Typography variant="caption" component="div" color="textSecondary">
                  {`${gainedPoints}/${totalPoints}`}
                </Typography>
              </Box>
            </Box>
          </div>
        </Box>
      </CardContent>
    </Card>
  );
};

const CategoryProgressBars = () => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginBottom: '20px' }}>
      {categories.map(category => (
        <CircularProgressBar
          key={category.id}
          icon={category.icon}
          title={category.title}
          gainedPoints={category.gainedPoints}
          totalPoints={category.totalPoints}
        />
      ))}
    </div>
  );
};

export default CategoryProgressBars;
