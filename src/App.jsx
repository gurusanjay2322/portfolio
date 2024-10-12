import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import About from './pages/About';
import Contact from './pages/Contact';
import Hero from './pages/Hero';
import Expirience from './pages/Expirience';
import Projects from './pages/ProjectsPage';
import ProjectsPage from './pages/ProjectsPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Layout is used as the wrapper for all the routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Hero />} /> {/* Default route */}
          <Route path="about" element={<About/>} />
          <Route path="expirience" element={<Expirience/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="projects" element={<ProjectsPage/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
