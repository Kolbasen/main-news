import React from 'react';
import {
	BrowserRouter as Router,
	Route,
  Switch,
} from 'react-router-dom';
import './App.css';
import Cards from '../Cards/Cards'
import AppToolBar from '../AppToolBar/AppToolBar'
import CurrentNewsContainer from '../CurrentNews/CurrentNewsContainer'

function App() {

  return (
    <div>
      <Router>
      <AppToolBar/>
        <Switch>
          <Route exact path='/' component={Cards}/>
          <Route exact path='/news/:id' children={<CurrentNewsContainer/>}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
