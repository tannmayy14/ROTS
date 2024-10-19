// src/pages/LandingPage.js
import React from 'react';
import './LandingPage.css';
import { Container, Box, Typography, Button } from '@mui/material';

const LandingPage = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        background: 'linear-gradient(to right, #516395, #614385)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'left', 
        alignItems: 'left',
        paddingTop:'100px',
        margin: 0,
        boxSizing: 'border-box',
      }}
    >
      <Container maxWidth="md" disableGutters>
        <Typography variant="h1" gutterBottom className='Heading' align="left"  
        sx={{ 
          fontFamily: 'Oswald, sans-serif', 
          fontSize: '10rem',
        }}>
          Riders On The Storm
        </Typography>
        <Typography variant="h6" color="textSecondary" paragraph align="left">
          Discover the best bikes for every adventure!
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Button variant="contained" color="primary" size="large">
            Explore Bikes
          </Button>
        </Box>
      </Container>
    </Box>
  );
};


export default LandingPage;

