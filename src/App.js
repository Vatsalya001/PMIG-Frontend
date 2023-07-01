import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/Home';
import Profile from './components/Profile';
import SendEmail from './components/SendEmail';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar isLoggedIn={true} username="John" />
        <Route path="/" exact component={Home} />
        <Route path="/profile" component={Profile} /> 
      </Router>
    </div>
  );
}

export default App;

