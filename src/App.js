import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Restuarant from './Component/Restuarant/Restuarant';
import NotFound from './Component/NotFound/NotFound'
import Header from "./Component/Header/Header";
import MealDetails from "./Component/MealDetails/MealDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/restuarent'>
            <Restuarant></Restuarant>
          </Route>
          <Route path='/restuarant/:mealID'>
            <MealDetails></MealDetails>
          </Route>
          <Route path='/*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
