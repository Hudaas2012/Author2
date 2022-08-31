import logo from './logo.svg';
import './App.css';
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NewAuthor from './views/NewAuthor';


function App() {
  return (
    <div className="App">
      <header className="App-header">

        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route exact path="/author/new/">
              <NewAuthor />
            </Route>
            <Route exact path="/author/:id">
              <Detail />
            </Route>
            <Route exact path="/author/edite/:id">
              <Update />
            </Route>
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;