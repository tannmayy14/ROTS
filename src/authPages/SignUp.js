import React, { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';  // Added for Firebase Storage
import { auth } from '../firebase/auth';  // Adjust path as per your folder structure
import './SignUp.css'; // External CSS for styling
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom'; // For navigation

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [photo, setPhoto] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const db = getFirestore();
  const storage = getStorage();  // Firebase Storage reference

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        await updateProfile(user, { displayName: name });

        // Upload photo to Firebase Storage
        let photoURL = '';
        if (photo) {
            const photoRef = ref(storage, `profilePictures/${user.uid}`);
            const snapshot = await uploadBytes(photoRef, photo);
            photoURL = await getDownloadURL(snapshot.ref); // Get the download URL of the photo
        }

        // Store user data in Firestore with photo URL
        await setDoc(doc(db, "users", user.uid), {
            name,
            age,
            gender,
            email,
            photoURL // Save the photo URL in Firestore
        });

        // Show success toast notification
        toast.success('Sign up successful!', {
            position: "top-right",
            autoClose: 3000, // Auto close after 3 seconds
        });

        // Redirect to home page after showing the toast
        navigate('/'); // Ensure the profile image state is handled in the home component

    } catch (error) {
        setError(error.message);
        console.error('Error signing up:', error);
        toast.error(`Error: ${error.message}`, {
            position: 'top-right',
            autoClose: 3000,
        });
    }
};

  return (
    <div className="signup-container">
      <div className="signup-left">
        <img src="./signUpimage.png" className="signup-image" />
        <button onClick={() => navigate('/')} className="back-button">Back to Website</button>
      </div>
      <div className="signup-right">
        <h2>Create an Account</h2>
        <form onSubmit={handleSubmit} className="signup-form">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            required
            className="input-field"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className="input-field"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="input-field"
          />
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Age"
            required
            className="input-field"
          />
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="input-field"
            required
          >
            <option value="" disabled>Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <input
            type="file"
            onChange={(e) => setPhoto(e.target.files[0])}
            placeholder="Upload Photograph"
            className="input-field"
          />
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
        <ToastContainer /> 
      </div>
    </div>
  );
}

export default SignUp;
