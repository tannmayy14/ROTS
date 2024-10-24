// import React, { useState, useEffect } from 'react';
// import { AppBar, Toolbar,Typography,Button, Box, Avatar, Container } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import './LandingPage.css';

// const LandingPage = () => {
//   const navigate = useNavigate();
// // eslint-disable-next-line
//   const phrases = [
//     "Welcome To the World of Bikes",
//     "Unleash Your Adventure",
//     "Ride with Freedom",
//     "Explore the Open Road",
//   ];

//   const [currentPhrase, setCurrentPhrase] = useState(phrases[0]);
//   const [index, setIndex] = useState(0);
//   const [animationClass, setAnimationClass] = useState('rotating-text-enter');

//   useEffect(() => {
//     const interval = setInterval(() => {
//       // Trigger exit animation first
//       setAnimationClass('rotating-text-exit');

//       // After the exit animation finishes, update the phrase and trigger the enter animation
//       setTimeout(() => {
//         setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
//         setAnimationClass('rotating-text-enter');
//       }, 1000); // Match this duration with the exit animation duration
//     }, 3000); // Change every 3 seconds

//     return () => clearInterval(interval);
//   }, [phrases.length]);

//   useEffect(() => {
//     setCurrentPhrase(phrases[index]);
//   }, [index, phrases]);

//   const handleExploreBikes = () => {
//     navigate('/bikes');
//   };

//   return (
//     <>
//       <AppBar position="static" className="navbar" sx={{ backgroundColor: '#516395' }}>
//         <Toolbar className="toolbar" sx={{ justifyContent: 'space-between' }}>
//           {/* Left: Logo Placeholder */}
//           <Box sx={{ display: 'flex', alignItems: 'center' }}>
//             <Box
//               sx={{
//                 width: '50px',
//                 height: '50px',
//                 backgroundColor: '#fff',
//                 borderRadius: '50%',
//               }}
//             />
//           </Box>

//           {/* Rotating Text */}
//           <Box
//             sx={{
//               display: 'flex',
//               justifyContent: 'center',
//               alignItems: 'center',
//               gap: '20px',
//               padding: '10px',
//               marginTop: '5px',
//               fontSize: '2.5rem',
//               fontFamily: 'Oswald, sans-serif',
//               color: '#f0e6ef',
//               borderRadius: '8px',
//             }}
//             className={animationClass} // Dynamically apply animation class
//           >
//             {currentPhrase}
//           </Box>

//           {/* Right: Profile Picture */}
//           <Box sx={{ display: 'flex', alignItems: 'center' }}>
//             <Avatar
//               alt="User Profile"
//               src={"C:\\Mobile\\DCIM\\Camera\\IMG_20210103_210624.jpg"}
//               sx={{
//                 width: '40px',
//                 height: '40px',
//                 marginLeft: '10px',
//                 marginRight: '10px',
//                 cursor: 'pointer',
//               }}
//             />
//           </Box>
//         </Toolbar>
//       </AppBar>

//       {/* Landing Page Content */}
//       <Box
//         sx={{
//           minHeight: '100vh',
//           width: '100%',
//           background: 'linear-gradient(to right, #516395, #614385)',
//           display: 'flex',
//           flexDirection: 'row',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           paddingTop: '0px',
//           margin: 0,
//           boxSizing: 'border-box',
//         }}
//       >
//         <Container maxWidth="md" disableGutters sx={{ flexGrow: 1 }}>
//           <Typography
//             variant="h1"
//             gutterBottom
//             align="left"
//             sx={{
//               fontFamily: 'Oswald, sans-serif',
//               fontSize: '10rem',
//               color: '#f0e6ef',
//               marginTop: '0px',
//               marginLeft:'40px',
//             }}
//           >
//             Riders On The Storm
//           </Typography>
//           <Typography
//             variant="h6"
//             paragraph
//             align="left"
//             sx={{
//               fontFamily: 'Lato, sans-serif',
//               fontSize: '2.5rem',
//               marginLeft:'40px',
//               color: '#e0d4e6',
//             }}
//           >
//             Discover the best bikes for every adventure!
//           </Typography>
//           <Box sx={{ display: 'flex', justifyContent: 'left', mt: 4,marginLeft:'40px'}}>
//             <Button variant="contained" color="primary" size="large" onClick={handleExploreBikes}>
//               Explore Bikes
//             </Button>
//           </Box>
//         </Container>

//         {/* Picture box on the right */}
//         <Box
//           sx={{
//             height: '100%',
//             width: '50%',
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//           }}
//         >
//           <img
//             src="./landgraphic.png"
//             alt="Bike Adventure"
//             style={{
//               width: '100%',
//               height: '800px',
//               objectFit: 'cover',
//               marginBottom: '110px',
//             }}
//           />
//         </Box>
//       </Box>
//     </>
//   );
// };

// export default LandingPage;

import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Avatar, Menu, MenuItem, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";  // Import both getAuth and signOut
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const [user, setUser] = useState(null); // Track the user state
  const [anchorEl, setAnchorEl] = useState(null); // Manage dropdown anchor state

  // Example rotating phrases (no changes to this logic)
  // eslint-disable-next-line
  const phrases = ["Welcome To the World of Bikes", "Unleash Your Adventure", "Ride with Freedom", "Explore the Open Road"];
  const [currentPhrase, setCurrentPhrase] = useState(phrases[0]);
  const [index, setIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState('rotating-text-enter');

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationClass('rotating-text-exit');
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setAnimationClass('rotating-text-enter');
      }, 1000);
    }, 3000);
    return () => clearInterval(interval);
  }, [phrases.length]);

  useEffect(() => {
    setCurrentPhrase(phrases[index]);
  }, [index, phrases]);

  // Listen for Firebase authentication state
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user); // Update user state when authentication state changes
    });
    return () => unsubscribe();
  }, [auth]);

  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget); // Open dropdown when avatar is clicked
  };

  const handleMenuClose = () => {
    setAnchorEl(null); // Close the dropdown menu
  };

  const handleSignOut = async () => {
    await signOut(auth); // Firebase sign out
    setAnchorEl(null);
  };

  const handleExploreBikes = () => {
    navigate('/bikes');
  };

  const handleSignIn = () => {
    navigate('/signin'); // Navigate to SignIn page
  };

  const handleSignUp = () => {
    navigate('/signup'); // Navigate to SignUp page
  };

  return (
    <>
      <AppBar position="static" className="navbar" sx={{ backgroundColor: '#516395' }}>
        <Toolbar className="toolbar" sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box
              sx={{
                width: '50px',
                height: '50px',
                backgroundColor: '#fff',
                borderRadius: '50%',
              }}
            />
          </Box>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '20px',
              padding: '10px',
              marginTop: '5px',
              fontSize: '2.5rem',
              fontFamily: 'Oswald, sans-serif',
              color: '#f0e6ef',
              borderRadius: '8px',
            }}
            className={animationClass}
          >
            {currentPhrase}
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar
              alt="User Profile"
              onClick={handleProfileClick}
              src={user ? user.photoURL : "default-profile.jpg"} // Display user's photo or a default image
              sx={{
                width: '40px',
                height: '40px',
                marginLeft: '10px',
                marginRight: '10px',
                cursor: 'pointer',
              }}
            />
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              {user ? (
                <>
                  <MenuItem onClick={handleSignOut}>Logout</MenuItem>
                  <MenuItem onClick={() => navigate('/contact')}>Contact Us</MenuItem>
                </>
              ) : (
                <>
                  <MenuItem onClick={handleSignIn}>Sign In</MenuItem>
                  <MenuItem onClick={handleSignUp}>Sign Up</MenuItem>
                  <MenuItem onClick={() => navigate('/contact')}>Contact Us</MenuItem>
                </>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          minHeight: '100vh',
          width: '100%',
          background: 'linear-gradient(to right, #516395, #614385)',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: '0px',
          margin: 0,
          boxSizing: 'border-box',
        }}
      >
        <Container maxWidth="md" disableGutters sx={{ flexGrow: 1 }}>
          <Typography
            variant="h1"
            gutterBottom
            align="left"
            sx={{
              fontFamily: 'Oswald, sans-serif',
              fontSize: '10rem',
              color: '#f0e6ef',
              marginTop: '0px',
              marginLeft: '40px',
            }}
          >
            Riders On The Storm
          </Typography>
          <Typography
            variant="h6"
            paragraph
            align="left"
            sx={{
              fontFamily: 'Lato, sans-serif',
              fontSize: '2.5rem',
              marginLeft: '40px',
              color: '#e0d4e6',
            }}
          >
            Discover the best bikes for every adventure!
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'left', mt: 4, marginLeft: '40px' }}>
            <Button variant="contained" color="primary" size="large" onClick={handleExploreBikes}>
              Explore Bikes
            </Button>
          </Box>
        </Container>

        <Box
          sx={{
            height: '100%',
            width: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            src="./landgraphic.png"
            alt="Bike Adventure"
            style={{
              width: '100%',
              height: '800px',
              objectFit: 'cover',
              marginBottom: '110px',
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default LandingPage;
