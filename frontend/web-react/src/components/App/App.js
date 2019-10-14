import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
} from 'react-router-dom';
import './App.css';
import Cards from '../Cards/Cards'
import AppToolBar from '../AppToolBar/AppToolBar'
import CurrentNews from '../CurrentNews/CurrentNews';

function App() {
  return (
    <div>
      <Router>
      <AppToolBar/>
        <Switch>
          <Route exact path='/' component={Cards}/>
          <Route path='/news' component={CurrentNews}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
