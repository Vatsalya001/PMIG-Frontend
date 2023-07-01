import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import VerifyOTP from "./components/VerifyOTP";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './components/Homepage';

function App() {
  return (
    <div className="App">
      <Navbar isLoggedIn={true} username="John" />

      <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        {/* Add more routes for other pages if needed */}
      </Switch>
      </Router>
      
      <header>
        <div>
          <VerifyOTP />
        </div>
      </header>
    </div>
  );
}

export default App;
