import * as React from 'react';
const { useEffect } = React;
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navigation from './Navigation/Navigation';
import Login from './Authentication/Login';
import AllOutturnsContainer from './Outturns/AllOutturnContainer';
import AllCasksContainer from './Casks/AllCasksContainer';
import CasksContainer from './OutturnCasks/CasksContainer';
import CaskForm from './EditCaskForm/EditCaskForm';
import ModalManager from './Modal/ModalManager';
import Toast from './Toast/Toast';

import * as thunks from '../redux/thunks';
const {
  outturnsThunks: { getOutturns },
  casksThunks: { getCasks },
  userThunks: { getUser }
} = thunks;

export default () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser(document.cookie.replace(/sessionId=/, '')));
    dispatch(getOutturns());
    dispatch(getCasks('ascending', []));
  }, []);

  return (
    <div>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path='/' component={ AllOutturnsContainer } />
          <Route exact path='/login' component={ Login } />
          <Route exact path='/casks' component={ AllCasksContainer } />
          <Route exact path='/outturn/:outturnId' component={ CasksContainer }/>
          <Route exact path='/edit/:caskId' component={ CaskForm } />
          <Route exact path='/add/:caskId' component={ CaskForm } />
        </Switch>
      </Router>
      <ModalManager />
      <Toast />
    </div>
  )
};