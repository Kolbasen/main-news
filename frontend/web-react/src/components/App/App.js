import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import './App.css';
import CardsContainer from '../Cards/CardsContainer';
import AppToolBar from '../AppToolBar/AppToolBar';
import CurrentNewsContainer from '../CurrentNews/CurrentNewsContainer';
import TagNewsContainer from '../TagNews/TagNewsContainer';
import AdminLogin from '../AdminComponents/AdminLogin/AdminLogin';
import Admin from '../AdminComponents/Admin/Admin';

function App() {

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/admin' component={Admin}/>
          <Route exact path='/adminlogin' component={AdminLogin}/>
          <Fragment>
            <AppToolBar/>
            <Route exact path='/' component={CardsContainer}/>
            <Route exact path='/news/:id' children={<CurrentNewsContainer/>}/>
            <Route exact path='/news/tag/:tag' children={<TagNewsContainer/>}/>
          </Fragment>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
