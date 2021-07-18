import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import Footer from './components/Footer';
// import ScrollToTop from './components/ScrollToTop';
import SmoothScrollBar from './components/SmoothScrollBar';

import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import About from './pages/About';

export default function App() {
  return (
    <Router>
      <NavMenu />
      <SmoothScrollBar>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="">
          <Home />
        </Route>
      </Switch>
      <Footer />
      </SmoothScrollBar> 
    </Router>
  );
}
