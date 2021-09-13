import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Gallery from './pages/Gallery';
import NFT from './pages/NFT';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <div>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/aboutme" component={AboutMe}/>
            <Route exact path="/gallery" component={Gallery}/>
            <Route exact path="/nft" component={NFT}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/cart" component={Cart}/>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
