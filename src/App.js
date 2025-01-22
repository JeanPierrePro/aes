import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';

function App() {
  return (
    <Router>
      <div>
        <h1>My Fullstack App</h1>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/profile" component={Profile} />
          <Route path="/" exact>
            <h2>Welcome to the App</h2>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;