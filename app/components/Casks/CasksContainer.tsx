import * as React from 'react';
const { useEffect } = React;
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { useTypedSelector } from '../../utils';

import CaskList from './CaskList'
import ActiveCask from './ActiveCask';
import ButtonManager from '../Button/ButtonManager';
import * as StyledComponents from '../styledcomponents/index';
const {
  StyledType: { Header, Subheader },
  StyledDiv: { BodyDiv, Column },
  StyledLink: { LinkButton },
  StyledCask: { CaskListDiv },
} = StyledComponents;

import * as thunks from '../../redux/thunks';
const { activeOutturnThunks: { getActiveOutturn } } = thunks;

import { createModalButton } from '../../buttonProps';
import { createCaskModal } from '../../modalProps';

import { ParamTypes } from '../../types/index';

export default () => {

  const dispatch = useDispatch();

  const { outturnId } = useParams<ParamTypes>();
  const { activeOutturn } = useTypedSelector(state => state);

  useEffect(() => {
    dispatch(getActiveOutturn(outturnId))
  }, []);

  return (
    <div>
    <LinkButton to={ '/' }>Back</LinkButton>
    <Header>{ activeOutturn.name }</Header>
      <BodyDiv>
        <CaskListDiv>
          <Column>
            <CaskList />
          </Column>
        </CaskListDiv>
        <ActiveCask />
        <ButtonManager props={ createModalButton('Add a cask', createCaskModal(activeOutturn.id)) } />
        <Subheader textAlign='center'>ADD A CASK</Subheader>
      </BodyDiv>

    </div>
  )
}