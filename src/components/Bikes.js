import React, { useState } from 'react';
import { Container, Grid, Card, CardContent, Typography, CardMedia, ToggleButton, ToggleButtonGroup, Box } from '@mui/material';
import { bikes } from './BikeData';
import './Bikes.css';

const Bikes = () => {
  const [selectedBike, setSelectedBike] = useState(null); // State to track selected bike
  const [viewMode, setViewMode] = useState('grid'); // Default view is grid

  const handleBikeClick = (bike) => {
    setSelectedBike(bike); // Update state with clicked bike's info
  };

  const handleViewChange = (event, newView) => {
    if (newView) {
      setViewMode(newView); // Update view mode based on toggle selection
    }
  };

  return (
    <Container sx={{ paddingTop: '50px', display: 'flex', gap: '10px', marginLeft: '30px' }}>
      {/* Left side: List of bikes */}
      <Grid container spacing={2} sx={{ width: '30%' }}>
        <Grid item xs={12}>
          <ToggleButtonGroup
            value={viewMode}
            exclusive
            onChange={handleViewChange}
            aria-label="view mode"
            sx={{ marginBottom: '20px' }}
          >
            <ToggleButton value="grid" aria-label="grid view" size="small">Grid</ToggleButton>
            <ToggleButton value="list" aria-label="list view" size="small">List</ToggleButton>
          </ToggleButtonGroup>
        </Grid>
        {bikes.map((bike) => (
          <Grid item xs={12} key={bike.id}>
            <Card
        onClick={() => handleBikeClick(bike)}
        className="bike-card"  // Applying CSS class
        sx={{ cursor: 'pointer', transition: 'transform 0.3s' }}
        >
        {viewMode === 'grid' ? (
            <>
            <CardMedia component="img" height="140" image={bike.image} alt={bike.name} className="bike-image" />
            <CardContent>
                <Typography variant="h6" className="bike-title">{bike.name}</Typography>
            </CardContent>
            </>
        ) : (
            <CardContent>
            <Typography variant="h6" className="bike-title">{bike.name}</Typography>
            <Typography variant="body2" className="bike-details">Torque: {bike.torque}</Typography>
            <Typography variant="body2" className="bike-details">Engine Power: {bike.enginePower}</Typography>
            </CardContent>
        )}
        </Card>
          </Grid>
        ))}
      </Grid>

      {/* Right side: Detailed bike information */}
      <Box sx={{ width: '70%', paddingLeft: '30px', textAlign: 'center' }}>
        {selectedBike ? (
          <>
            {/* Bike name at the top */}
            <Typography variant="h4" sx={{ marginBottom: '20px' }}>{selectedBike.name}</Typography>

            {/* Center part for image and side tables */}
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              {/* Left table */}
              <Box sx={{ flex: 1, textAlign: 'left', paddingRight: '20px' }}>
                <Typography variant="body1"><strong>Torque:</strong> {selectedBike.torque}</Typography>
                <Typography variant="body1"><strong>Top Speed:</strong> {selectedBike.topSpeed}</Typography>
                <Typography variant="body1"><strong>Colors Available:</strong> {selectedBike.colors.join(', ')}</Typography>
              </Box>

              {/* Center image */}
              <Box sx={{ flex: 1 }}>
                <img src={selectedBike.image} alt={selectedBike.name} style={{ width: '300px', height: 'auto' }} />
              </Box>

              {/* Right table */}
              <Box sx={{ flex: 1, textAlign: 'right', paddingLeft: '20px'}}>
                <Typography variant="body1" ><strong>Engine Power:</strong> {selectedBike.enginePower}</Typography>
                <Typography variant="body1"><strong>Weight:</strong> {selectedBike.weight}</Typography>
                <Typography variant="body1"><strong>Fuel Type:</strong> {selectedBike.fuelType}</Typography>
              </Box>
            </Box>

            {/* Description below the image */}
            <Typography variant="body2" sx={{ marginTop: '20px' }}>{selectedBike.description}</Typography>
          </>
        ) : (
          <Typography variant="h6">Select a bike to see the details</Typography>
        )}
      </Box>
    </Container>
  );
};

export default Bikes;


