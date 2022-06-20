import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import About from './pages/about';
import Auth from './pages/auth';
import Home from './pages/home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/auth" element={<Auth />} />
      </Routes>
    </Router>
  );
};

export default App;
