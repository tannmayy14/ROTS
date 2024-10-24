// // src/pages/LandingPage.js
// import React from 'react';
// import './LandingPage.css';
// import { Container, Box, Typography, Button } from '@mui/material';

// const LandingPage = () => {
//   return (
//     <Box
//       sx={{
//         minHeight: '100vh',
//         width: '100%',
//         background: 'linear-gradient(to right, #516395, #614385)',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'left', 
//         alignItems: 'left',
//         paddingTop:'100px',
//         margin: 0,
//         boxSizing: 'border-box',
//       }}
//     >
//       <Container maxWidth="md" disableGutters>
//         <Typography variant="h1" gutterBottom className='Heading' align="left"  
//         sx={{ 
//           fontFamily: 'Oswald, sans-serif', 
//           fontSize: '10rem',
//         }}>
//           Riders On The Storm
//         </Typography>
//         <Typography variant="h6" color="textSecondary" paragraph align="left">
//           Discover the best bikes for every adventure!
//         </Typography>
//         <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
//           <Button variant="contained" color="primary" size="large">
//             Explore Bikes
//           </Button>
//         </Box>
//       </Container>
//     </Box>
//   );
// };


// export default LandingPage;

// src/pages/LandingPage.js
import React from 'react';
import './LandingPage.css';
import { Container, Box, Typography, Button } from '@mui/material';

const LandingPage = () => {
  return (
    <Box className="landing"
      sx={{
        minHeight: '100vh',
        width: '100%',
        background: 'linear-gradient(to right, #516395, #614385)',
        display: 'flex',
        flexDirection: 'row', // Changed from column to row to align text and image side by side
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: '100px',
        margin: 0,
        boxSizing: 'border-box',
      }}
    >
      <Container maxWidth="md" disableGutters sx={{ flexGrow: 1 }}>
        <Typography variant="h1" gutterBottom className='Heading' align="left"  
        sx={{ 
          fontFamily: 'Oswald, sans-serif', 
          fontSize: '10rem',
          color: '#f0e6ef',
        }}>
          Riders On The Storm
        </Typography>
        <Typography
          variant="h6"
          paragraph
          align="left"
          sx={{
            fontFamily:'lato',
            fontSize: '2.5rem', // Adjust font size as needed
            color: '#e0d4e6', // Slightly darker tone for subtitle
          }}
        >
          Discover the best bikes for every adventure!
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'left', mt: 4 }}>
          <Button variant="contained" color="primary" size="large">
            Explore Bikes
          </Button>
        </Box>
      </Container>

      {/* Picture box on the right */}
      <Box
        sx={{
          height: '100%', // Ensures the picture box is the same height
          width: '50%', // Adjust width as needed
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img className='imgLand'
          src="./backImageLanding.jpg" // Replace with your actual image URL
          alt="Bike Adventure"
          style={{
            width: '100%',
            height: 'auto', // Adjust the height proportionally
            objectFit: 'cover', // Ensures the image covers the box
          }}
        />
      </Box>
    </Box>
  );
};

export default LandingPage;

