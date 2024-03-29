//Dependency Libraries
import * as React from 'react';
const { useEffect } = React;
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useTypedSelector } from '../utils';

//Components
import * as Page from '../components/Pages';
import Navigation from './Navigation/Navigation';
import Login from './Authentication/Login';
import Signup from './Authentication/Signup';
import AllCasksContainer from './AllCasks/AllCasksContainer';
import CaskForm from './EditCaskForm/EditCaskForm';
import UserList from './Users/UserList';
import Modal from '../components/Organisms/Modal';
import Toast from './Toast/Toast';

//Redux thunks
import * as thunks from '../redux/thunks';
const {
  outturnsThunks: { getOutturns },
  allCasksThunks: { getCasks },
  activeUserThunks: { getActiveUser }
} = thunks;

export default () => {

  const dispatch = useDispatch();

  const { modal } = useTypedSelector(state => state);

  useEffect(() => {
    dispatch(getActiveUser(document.cookie.replace(/sessionId=/, '')));
    dispatch(getOutturns());
    dispatch(getCasks('ascending', []));
  }, []);

  return (
    <>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path='/' component={ Page.OutturnsPage } />
          <Route exact path='/login' component={ Login } />
          <Route exact path='/signup' component={ Signup } />
          <Route exact path='/casks' component={ AllCasksContainer } />
          <Route exact path='/outturn/:outturnId' component={ Page.ActiveOutturnPage }/>
          <Route exact path='/edit/:caskId' component={ CaskForm } />
          <Route exact path='/add/:caskId' component={ CaskForm } />
          <Route exact path='/users' component={ UserList } />
        </Switch>
      </Router>
      <Toast />
    </>
  )
};