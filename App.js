import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Portfolio/header';
import MainPage from './Portfolio/mainPage';
import Skills from './Portfolio/skills';
import ProjectDetails from './Portfolio/projectDetails';
import Education from './Portfolio/education';
import Footer from './Portfolio/footer';
import ContactDetails from './Portfolio/contactForm';
import About from './Portfolio/about'
import { Container,CssBaseline } from '@mui/material';

function App() {
  return (
    <Router>
      <CssBaseline />
      <Header />
      <Container maxWidth="xl" sx={{ padding: { xs: 2, sm: 4, md: 6 }, minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<ProjectDetails />} />
          <Route path="/contact" element={<ContactDetails />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

// export default App;
// frontend/src/App.js
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function App() {
//     const [message, setMessage] = useState('');

//     useEffect(() => {
//         // Fetch message from the backend
//         axios.get('http://localhost:8080/api/message')
//             .then(response => setMessage(response.data))
//             .catch(error => console.error("Error fetching message:", error));
//     }, []);

//     return (
//         <div>
//             <h1>React Frontend</h1>
//             <p>Message from Backend: {message}</p>
//         </div>
//     );
// }

export default App;

