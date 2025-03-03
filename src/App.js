import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Solutions from './components/Solutions';
import Contact from './components/Contact';
import Footer from './components/Footer';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <Navbar />
          <main style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                  <Features />
                  <Solutions />
                  <Contact />
                </>
              } />
              <Route path="/drones/*" element={
                <>
                  <Hero />
                  <Features />
                </>
              } />
              <Route path="/sensors/*" element={
                <>
                  <Hero />
                  <Features />
                </>
              } />
              <Route path="/software/*" element={
                <>
                  <Hero />
                  <Features />
                </>
              } />
              <Route path="/solutions/*" element={
                <>
                  <Solutions />
                  <Features />
                </>
              } />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
