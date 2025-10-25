import React, { useState } from 'react';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/auth';  // Adjust path as per your folder structure
import { Typography, TextField, Button, Box, Divider } from '@mui/material';
import { styled } from '@mui/system';
import GoogleIcon from '@mui/icons-material/Google';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './SignIn.css';

const BackgroundContainer = styled(Box)({
  position: 'relative',
  width: '100vw',
  minheight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundImage: 'url(./src/assets/signInBack.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  overflowX: 'hidden',
  padding: '1rem',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    zIndex: -1,
  },
});

const StyledBox = styled(Box)({
  maxWidth: '400px',
  width: '100%',
  padding: '2.5rem',
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  borderRadius: '12px',
  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  animation: 'fadeIn 1.2s ease-in-out',
});

const StyledTextField = styled(TextField)({
  marginBottom: '1.5rem',
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#ccc',
    },
    '&:hover fieldset': {
      borderColor: '#FFBF00',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#FFBF00',
    },
  },
});

const StyledButton = styled(Button)({
  backgroundColor: '#FFBF00',
  color: '#1C1C1C',
  padding: '0.8rem',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    backgroundColor: '#1C1C1C',
    color: '#FFBF00',
    transform: 'scale(1.05)',
  },
});

const StyledGoogleButton = styled(Button)({
  backgroundColor: '#FFFFFF',
  color: '#1C1C1C',
  padding: '0.8rem',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    backgroundColor: '#4285F4',
    color: '#FFF',
    transform: 'scale(1.05)',
  },
});

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError("Passwords don't match");
      toast.error("Passwords don't match", {
        position: 'top-right',
        autoClose: 3000,
      });
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
        toast.success('Sign up successful!', {
        position: "top-right",
        autoClose: 3000, // Auto close after 3 seconds
    });
      navigate('/');
    } catch (error) {
      setError(error.message);
      toast.error(`Error: ${error.message}`, {
        position: 'top-right',
        autoClose: 3000,
    });
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      toast.success('Sign in with Google successful!', {
        position: 'top-right',
        autoClose: 3000,
      });
      navigate('/');
    } catch (error) {
      setError(error.message);
      toast.error(`Error: ${error.message}`, {
        position: 'top-right',
        autoClose: 3000,
      });
    }
  };

  return (
    <BackgroundContainer>
      <StyledBox>
        <Typography variant="h4" component="h2" align="center" gutterBottom>
          Sign In to ROTS
        </Typography>
        <form onSubmit={handleSubmit}>
          <StyledTextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            required
            className="fade-in"
          />
          <StyledTextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            required
            className="fade-in"
          />
          <StyledTextField
            label="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            fullWidth
            required
            className="fade-in"
          />
          {error && (
            <Typography color="error" variant="body2" align="center" gutterBottom>
              {error}
            </Typography>
          )}
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <StyledButton type="submit" fullWidth className="fade-in">
              Sign In
            </StyledButton>
          </Box>
        </form>
        <ToastContainer /> 
        <Divider sx={{ my: 2 }}>
          <Typography variant="body2" color="textSecondary">
            or
          </Typography>
        </Divider>
        <StyledGoogleButton
          onClick={handleGoogleSignIn}
          fullWidth
          variant="contained"
          startIcon={<GoogleIcon />}
          className="fade-in"
        >
          Sign in with Google
        </StyledGoogleButton>
      </StyledBox>
    </BackgroundContainer>
  );
}

export default SignIn;
