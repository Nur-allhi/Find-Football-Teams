import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import NotFound from "./Components/NotFound/NotFound";
import ClubDetails from "./Components/ClubDetails/ClubDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/details/:clubId">
            <ClubDetails></ClubDetails>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
