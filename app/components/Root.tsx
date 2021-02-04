import * as React from 'react';
const { useEffect } = React;
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Home';
import Navigation from './Navigation/Navigation';
import Login from './Authentication/Login';
import EditHeader from './EditCaskForm/EditHeader';
import EditBody from './EditCaskForm/EditBody';
import CaskList from './Casks/CaskList';
import ModalContainer from './Modal/ModalContainer';
import Toast from './Toast/Toast';

import * as thunks from '../redux/thunks';
const {
  outturnsThunks: { getOutturns },
  userThunks: { getUser }
} = thunks;

export default () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser(document.cookie.replace(/sessionId=/, '')));
    dispatch(getOutturns());
  }, []);

  return (
    <div>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route exact path='/login' component={ Login } />
          <Route exact path='/outturn/:outturnId' component={ CaskList }/>
          <Route exact path='/edit/:caskId/step1' component={ EditHeader } />
          <Route exact path='/edit/:caskId/step2' component={ EditBody } />
        </Switch>
      </Router>
      <ModalContainer />
      <Toast />
    </div>
  )
};