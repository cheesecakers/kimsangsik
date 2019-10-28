import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Registration from '@/pages/registration/Registration';
import Quiz from '@/pages/Quiz';
import Result from '@/pages/result/Result';

import './App.scss';

function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/registration">
            <Registration />
          </Route>
          <Route path="/result">
            <Result />
          </Route>
          <Route path="/quiz">
            <Quiz />
          </Route>
          <Route path="/">
            <Quiz />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
