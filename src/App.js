import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import MyTickers from './pages/MyTickers';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/my-tickers" exact>
          <MyTickers />
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
