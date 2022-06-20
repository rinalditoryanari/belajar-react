import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/about';
import ArticleDetail from './pages/aricle-detail';
import Auth from './pages/auth';
import Home from './pages/home';

const App = () => {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/auth" element={<Auth />} />
        <Route
          exact
          path="/article/detail/:id"
          element={<ArticleDetail />}
        />
      </Routes>
    </Router>
  );
};

export default App;
