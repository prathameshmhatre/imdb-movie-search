import React from 'react';
import { List } from './features/list/Index';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Layout from "./layout/Index";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/">
            <List />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
