import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import VerifyOTP from "./components/VerifyOTP";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './components/Homepage';
import SendEmail from "./components/SendEmail";

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

