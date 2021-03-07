
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CountryDetails from './components/CountryDetails/CountryDetails';
import NoMatch from './NoMatch/NoMatch';
import Nav from './components/Nav/Nav';



function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path='/name/:countryName'>
            <CountryDetails></CountryDetails>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
