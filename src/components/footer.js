import React from 'react';
import './footer.css'; // Assuming you will store the CSS separately
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: '#516395',
        color: '#f0e6ef',
        textAlign: 'center',
        padding: '20px',
        position: 'relative',
        bottom: 0,
        width: '100%',
      }}
    >
      <Typography variant="body1">
        © {new Date().getFullYear()} Riders On The Storm. All Rights Reserved.
      </Typography>
      <Typography variant="body2">
        <Link to="/contact" style={{ color: '#ff9800', textDecoration: 'none' }}>
          Contact Us
        </Link>
      </Typography>
    </Box>
  );
};
