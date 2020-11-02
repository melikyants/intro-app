import "./App.scss";
import { HomePage, AboutUsPage } from "./Pages";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
      <Router>
    <div className="App">
        <nav className="navigation">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/about">
            <AboutUsPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
    </div>
      </Router>
  );
}

export default App;
