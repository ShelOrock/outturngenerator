import * as React from 'react';
const { useEffect } = React;
import { useHistory } from 'react-router-dom';
import { useTypedSelector } from '../../../utils';

//Components
import PageHeaderManager from '../../Header/PageHeaderManager';
import SignupForm from './SignupForm';
//Styled Components
import * as StyledComponents from '../../styledcomponents/index';
const { StyledDiv: { Column } } = StyledComponents;

import { PageHeaderPropTypes } from '../../../types';

export default () => {

  const history = useHistory();

  const { activeUser } = useTypedSelector(state => state)

  useEffect(() => {
    if(activeUser.loggedIn == 'Online') history.push('/');
  }, [activeUser]);

  const pageHeaderProps: PageHeaderPropTypes = {
    subNavigationProps: {
      link: "/",
      destination: "< Back",
    },
    toolbarProps: {
      pageTitle: 'Sign up',
      addButtonProps: null,
      deleteButtonProps: null
    }
  };

  return (
    <Column>
      <PageHeaderManager { ...pageHeaderProps }/>
      <SignupForm />
    </Column>
  );
};