import './App.scss';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import logo from './assets/ippon.png';

import Home from './containers/Home/Home';
import Voiture from './containers/Voiture/Voiture';

const App = () => {
  const titre = 'Bienvenue dans notre garage !';

  return (
    <div className="App">
      <Router>
        <div id="header">
          <img src={logo} alt="logo" />
          <h1>{titre}</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/voiture">Voiture</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div id={'content'}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/voiture">
              <Voiture />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
