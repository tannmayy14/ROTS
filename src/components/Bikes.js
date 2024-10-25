// import React, { useState } from 'react';
// import { Container, Grid, Card, CardContent, Typography, CardMedia, ToggleButton, ToggleButtonGroup, Box, Button } from '@mui/material';
// import { bikes } from './BikeData';
// import { useNavigate } from 'react-router-dom';
// import './Bikes.css';

// const Bikes = () => {
//   const navigate = useNavigate();
//   const [selectedBike, setSelectedBike] = useState(null);
//   const [viewMode, setViewMode] = useState('grid');

//   const handleBikeClick = (bike) => {
//     setSelectedBike(bike);
//   };

//   const handleViewChange = (event, newView) => {
//     if (newView) {
//       setViewMode(newView);
//     }
//   };

//   const handleBackButtonClick = () => {
//     navigate('/');
//   };

//   const handleLogout = () => {
//     console.log("Logged out");
//     navigate('/');
//   };

//   return (
//     <Container sx={{ paddingTop: '30px', paddingBottom: '30px', maxWidth: '1200px' }}>
//       {/* Top Navigation Bar */}
//       <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', alignItems: 'center' }}>
//         <Button variant="outlined" onClick={handleBackButtonClick} sx={{ marginRight: 'auto', backgroundColor: '#2196F3', color: '#fff' }}>
//           Back
//         </Button>
//         <Button variant="outlined" onClick={handleLogout} sx={{ backgroundColor: '#f44336', color: '#fff' }}>
//           Logout
//         </Button>
//       </Box>

//       <Grid container spacing={3}>
//         {/* Left side: List of bikes */}
//         <Grid item xs={12} md={4}>
//           <ToggleButtonGroup
//             value={viewMode}
//             exclusive
//             onChange={handleViewChange}
//             aria-label="view mode"
//             sx={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}
//           >
//             <ToggleButton value="grid" aria-label="grid view" size="small">Grid</ToggleButton>
//             <ToggleButton value="list" aria-label="list view" size="small">List</ToggleButton>
//           </ToggleButtonGroup>
//           <Grid container spacing={2}>
//             {bikes.map((bike) => (
//               <Grid item xs={12} key={bike.id}>
//                 <Card
//                   onClick={() => handleBikeClick(bike)}
//                   className="bike-card"
//                   sx={{
//                     cursor: 'pointer',
//                     transition: 'transform 0.3s',
//                     maxWidth: '300px', // Reduced card width
//                     margin: '0 auto', // Center cards
//                   }}
//                 >
//                   {viewMode === 'grid' ? (
//                     <>
//                       <CardMedia component="img" height="100" image={bike.image} alt={bike.name} className="bike-image" />
//                       <CardContent>
//                         <Typography variant="h6" className="bike-title" sx={{ fontSize: '1.2rem' }}>{bike.name}</Typography>
//                       </CardContent>
//                     </>
//                   ) : (
//                     <CardContent>
//                       <Typography variant="h6" className="bike-title" sx={{ fontSize: '1.2rem' }}>{bike.name}</Typography>
//                       <Typography variant="body2" className="bike-details" sx={{ fontSize: '0.9rem' }}>Torque: {bike.torque}</Typography>
//                       <Typography variant="body2" className="bike-details" sx={{ fontSize: '0.9rem' }}>Engine Power: {bike.enginePower}</Typography>
//                     </CardContent>
//                   )}
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Grid>

//         {/* Right side: Detailed bike information */}
//         <Grid item xs={12} md={8} sx={{ textAlign: 'center', position: 'relative' }}>
//           {selectedBike ? (
//             <Box sx={{
//               background: 'linear-gradient(135deg, rgba(128, 0, 128, 0.8), rgba(75, 0, 130, 0.8))',
//               borderRadius: '10px',
//               padding: '20px',
//               boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
//               transition: 'transform 0.3s',
//               '&:hover': {
//                 transform: 'scale(1.02)',
//               }
//             }}>
//               <Typography variant="h4" sx={{ marginBottom: '20px', color: '#fff', fontSize: '2.5rem' }}>{selectedBike.name}</Typography>
//               <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', flexDirection: 'column' }}>
//                 <img src={selectedBike.image} alt={selectedBike.name} style={{ width: '400px', height: 'auto', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }} />
//                 <Box sx={{ textAlign: 'left', color: '#fff' }}>
//                   <Typography variant="body1" sx={{ fontSize: '1.1rem' }}><strong>Torque:</strong> {selectedBike.torque}</Typography>
//                   <Typography variant="body1" sx={{ fontSize: '1.1rem' }}><strong>Top Speed:</strong> {selectedBike.topSpeed}</Typography>
//                   <Typography variant="body1" sx={{ fontSize: '1.1rem' }}><strong>Colors Available:</strong> {selectedBike.colors.join(', ')}</Typography>
//                   <Typography variant="body1" sx={{ fontSize: '1.1rem' }}><strong>Engine Power:</strong> {selectedBike.enginePower}</Typography>
//                   <Typography variant="body1" sx={{ fontSize: '1.1rem' }}><strong>Weight:</strong> {selectedBike.weight}</Typography>
//                   <Typography variant="body1" sx={{ fontSize: '1.1rem' }}><strong>Fuel Type:</strong> {selectedBike.fuelType}</Typography>
//                 </Box>
//               </Box>
//               <Typography variant="body2" sx={{ marginTop: '20px', color: '#eee', fontSize: '1rem' }}>{selectedBike.description}</Typography>
//             </Box>
//           ) : (
//             <Typography variant="h6" sx={{ fontSize: '1.5rem' }}>Select a bike to see the details</Typography>
//           )}
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default Bikes;

// import React, { useState } from 'react';
// import { Container, Grid, Card, CardContent, Typography, CardMedia, ToggleButton, ToggleButtonGroup, Box, Button } from '@mui/material';
// import { bikes } from './BikeData';
// import { useNavigate } from 'react-router-dom';
// import './Bikes.css';

// const Bikes = () => {
//   const navigate = useNavigate();
//   const [selectedBike, setSelectedBike] = useState(null);
//   const [viewMode, setViewMode] = useState('grid');

//   const handleBikeClick = (bike) => {
//     setSelectedBike(bike);
//   };

//   const handleViewChange = (event, newView) => {
//     if (newView) {
//       setViewMode(newView);
//     }
//   };

//   const handleBackButtonClick = () => {
//     navigate('/');
//   };

//   const handleLogout = () => {
//     console.log("Logged out");
//     navigate('/');
//   };

//   return (
//     <Container sx={{ paddingTop: '30px', paddingBottom: '30px', maxWidth: '1200px', height: '100vh', position: 'relative', overflow: 'hidden' }}>
//       {/* Background Gradient */}
//       <Box sx={{
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         right: 0,
//         bottom: 0,
//         background: 'linear-gradient(135deg, rgba(128, 0, 128, 0.8), rgba(75, 0, 130, 0.8))',
//         zIndex: -1,
//       }} />

//       {/* Title */}
//       <Typography variant="h2" sx={{
//         textAlign: 'center',
//         color: '#fff',
//         marginBottom: '30px',
//         textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
//         animation: 'fadeIn 1s ease-in-out',
//       }}>
//         ROTS Store
//       </Typography>

//       {/* Top Navigation Bar */}
//       <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', alignItems: 'center' }}>
//         <Button variant="outlined" onClick={handleBackButtonClick} sx={{ marginRight: 'auto', backgroundColor: '#2196F3', color: '#fff' }}>
//           Back
//         </Button>
//         <Button variant="outlined" onClick={handleLogout} sx={{ backgroundColor: '#f44336', color: '#fff' }}>
//           Logout
//         </Button>
//       </Box>

//       <Grid container spacing={3}>
//         {/* Left side: List of bikes */}
//         <Grid item xs={12} md={4}>
//           <ToggleButtonGroup
//             value={viewMode}
//             exclusive
//             onChange={handleViewChange}
//             aria-label="view mode"
//             sx={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}
//           >
//             <ToggleButton value="grid" aria-label="grid view" size="small">Grid</ToggleButton>
//             <ToggleButton value="list" aria-label="list view" size="small">List</ToggleButton>
//           </ToggleButtonGroup>
//           <Grid container spacing={2}>
//             {bikes.map((bike) => (
//               <Grid item xs={12} key={bike.id}>
//                 <Card
//                   onClick={() => handleBikeClick(bike)}
//                   className="bike-card"
//                   sx={{
//                     cursor: 'pointer',
//                     transition: 'transform 0.3s',
//                     maxWidth: '300px', // Reduced card width
//                     margin: '0 auto', // Center cards
//                   }}
//                 >
//                   {viewMode === 'grid' ? (
//                     <>
//                       <CardMedia component="img" height="100" image={bike.image} alt={bike.name} className="bike-image" />
//                       <CardContent>
//                         <Typography variant="h6" className="bike-title" sx={{ fontSize: '1.2rem' }}>{bike.name}</Typography>
//                       </CardContent>
//                     </>
//                   ) : (
//                     <CardContent>
//                       <Typography variant="h6" className="bike-title" sx={{ fontSize: '1.2rem' }}>{bike.name}</Typography>
//                       <Typography variant="body2" className="bike-details" sx={{ fontSize: '0.9rem' }}>Torque: {bike.torque}</Typography>
//                       <Typography variant="body2" className="bike-details" sx={{ fontSize: '0.9rem' }}>Engine Power: {bike.enginePower}</Typography>
//                     </CardContent>
//                   )}
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Grid>

//         {/* Right side: Detailed bike information */}
//         <Grid item xs={12} md={8} sx={{ textAlign: 'center', position: 'relative' }}>
//           {selectedBike ? (
//             <Box sx={{
//               background: 'linear-gradient(135deg, rgba(128, 0, 128, 0.8), rgba(75, 0, 130, 0.8))',
//               borderRadius: '10px',
//               padding: '20px',
//               boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
//               transition: 'transform 0.3s',
//               '&:hover': {
//                 transform: 'scale(1.02)',
//               }
//             }}>
//               <Typography variant="h4" sx={{ marginBottom: '20px', color: '#fff', fontSize: '2.5rem' }}>{selectedBike.name}</Typography>
//               <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', flexDirection: 'column' }}>
//                 <img src={selectedBike.image} alt={selectedBike.name} style={{ width: '400px', height: 'auto', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }} />
//                 <Box sx={{ textAlign: 'left', color: '#fff' }}>
//                   <Typography variant="body1" sx={{ fontSize: '1.1rem' }}><strong>Torque:</strong> {selectedBike.torque}</Typography>
//                   <Typography variant="body1" sx={{ fontSize: '1.1rem' }}><strong>Top Speed:</strong> {selectedBike.topSpeed}</Typography>
//                   <Typography variant="body1" sx={{ fontSize: '1.1rem' }}><strong>Colors Available:</strong> {selectedBike.colors.join(', ')}</Typography>
//                   <Typography variant="body1" sx={{ fontSize: '1.1rem' }}><strong>Engine Power:</strong> {selectedBike.enginePower}</Typography>
//                   <Typography variant="body1" sx={{ fontSize: '1.1rem' }}><strong>Weight:</strong> {selectedBike.weight}</Typography>
//                   <Typography variant="body1" sx={{ fontSize: '1.1rem' }}><strong>Fuel Type:</strong> {selectedBike.fuelType}</Typography>
//                 </Box>
//               </Box>
//               <Typography variant="body2" sx={{ marginTop: '20px', color: '#eee', fontSize: '1rem' }}>{selectedBike.description}</Typography>
//             </Box>
//           ) : (
//             <Typography variant="h6" sx={{ fontSize: '1.5rem' }}>Select a bike to see the details</Typography>
//           )}
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default Bikes;
import React, { useState } from 'react';
import { Container, Grid, Card, CardContent, Typography, CardMedia, ToggleButton, ToggleButtonGroup, Box, Button } from '@mui/material';
import { bikes } from './BikeData';
import { useNavigate } from 'react-router-dom';
import './Bikes.css';

const Bikes = () => {
  const navigate = useNavigate();
  const [selectedBike, setSelectedBike] = useState(null);
  const [viewMode, setViewMode] = useState('list');
  const [scrollIndex, setScrollIndex] = useState(0);
  const bikesPerView = 2; // Number of bikes to show at a time

  const handleBikeClick = (bike) => {
    setSelectedBike(bike);
  };

  const handleViewChange = (event, newView) => {
    if (newView) {
      setViewMode(newView);
    }
  };

  const handleBackButtonClick = () => {
    navigate('/');
  };

  const handleLogout = () => {
    console.log("Logged out");
    navigate('/');
  };

  const handleScrollDown = () => {
    if (scrollIndex + bikesPerView < bikes.length) {
      setScrollIndex(scrollIndex + bikesPerView);
    }
  };

  const handleScrollUp = () => {
    if (scrollIndex - bikesPerView >= 0) {
      setScrollIndex(scrollIndex - bikesPerView);
    }
  };

  return (
    <Container sx={{ paddingTop: '30px', paddingBottom: '30px', maxWidth: '200%', height: '100vh', position: 'relative', overflow: 'hidden', margin: 0 }}>
      {/* Top Navigation Bar */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', alignItems: 'center' }}>
        <Button variant="outlined" onClick={handleBackButtonClick} sx={{ marginRight: 'auto', backgroundColor: '#2196F3', color: '#fff' }}>
          Back
        </Button>
        <Button variant="outlined" onClick={handleLogout} sx={{ backgroundColor: '#f44336', color: '#fff' }}>
          Logout
        </Button>
      </Box>

      <Grid container spacing={3} sx={{ width: '100%' }}>
        {/* Left side: List of bikes */}
        <Grid item xs={12} md={4} sx={{ padding: 0 }}>
          <ToggleButtonGroup
            value={viewMode}
            exclusive
            onChange={handleViewChange}
            aria-label="view mode"
            sx={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}
          >
            <ToggleButton value="grid" aria-label="grid view" size="small">Grid</ToggleButton>
            <ToggleButton value="list" aria-label="list view" size="small">List</ToggleButton>
          </ToggleButtonGroup>

          {/* Scrollable Container for Bikes */}
          <Box sx={{ maxHeight: '600px', overflowY: 'auto', position: 'relative', height: '100%' }}>
            {bikes.slice(scrollIndex, scrollIndex + bikesPerView).map((bike) => (
              <Card
                key={bike.id}
                onClick={() => handleBikeClick(bike)}
                className="bike-card"
                sx={{
                  cursor: 'pointer',
                  transition: 'transform 0.3s',
                  margin: '8px 0',
                }}
              >
                <CardMedia component="img" height="100" image={bike.image} alt={bike.name} className="bike-image" />
                <CardContent>
                  <Typography variant="h6" className="bike-title" sx={{ fontSize: '1.2rem' }}>{bike.name}</Typography>
                </CardContent>
              </Card>
            ))}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
              <Button onClick={handleScrollUp} disabled={scrollIndex === 0}>▲</Button>
              <Button onClick={handleScrollDown} disabled={scrollIndex + bikesPerView >= bikes.length}>▼</Button>
            </Box>
          </Box>
        </Grid>

        {/* Right side: Detailed bike information */}
        <Grid item xs={12} md={8} sx={{ textAlign: 'center', position: 'relative', padding: 0 }}>
          {selectedBike ? (
            <Box sx={{
              background: 'linear-gradient(135deg, rgba(128, 0, 128, 0.8), rgba(75, 0, 130, 0.8))',
              borderRadius: '10px',
              padding: '20px',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'scale(1.02)',
              }
            }}>
              <Typography variant="h4" sx={{ marginBottom: '20px', color: '#fff', fontSize: '2.5rem' }}>{selectedBike.name}</Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', flexDirection: 'column' }}>
                <img src={selectedBike.image} alt={selectedBike.name} style={{ width: '400px', height: 'auto', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }} />
                <Box sx={{ textAlign: 'left', color: '#fff' }}>
                  <Typography variant="body1" sx={{ fontSize: '1.1rem' }}><strong>Torque:</strong> {selectedBike.torque}</Typography>
                  <Typography variant="body1" sx={{ fontSize: '1.1rem' }}><strong>Top Speed:</strong> {selectedBike.topSpeed}</Typography>
                  <Typography variant="body1" sx={{ fontSize: '1.1rem' }}><strong>Colors Available:</strong> {selectedBike.colors.join(', ')}</Typography>
                  <Typography variant="body1" sx={{ fontSize: '1.1rem' }}><strong>Engine Power:</strong> {selectedBike.enginePower}</Typography>
                  <Typography variant="body1" sx={{ fontSize: '1.1rem' }}><strong>Weight:</strong> {selectedBike.weight}</Typography>
                  <Typography variant="body1" sx={{ fontSize: '1.1rem' }}><strong>Fuel Type:</strong> {selectedBike.fuelType}</Typography>
                </Box>
              </Box>
              <Typography variant="body2" sx={{ marginTop: '20px', color: '#eee', fontSize: '1rem' }}>{selectedBike.description}</Typography>
            </Box>
          ) : (
            <Typography variant="h6" sx={{ fontSize: '1.5rem' }}>Select a bike to see the details</Typography>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Bikes;
