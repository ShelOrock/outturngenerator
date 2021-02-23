import * as React from 'react';
const {
  useEffect,
  useState,
  useReducer,
} = React;
import { useTypedSelector } from '../../utils';

import SubNavigation from '../Navigation/SubNavigation';
import PageHeader from '../PageHeader/PageHeader';
import ButtonManager from '../Button/ButtonManager';
import InputManager from '../Form/InputManager';
import * as StyledComponents from '../styledcomponents/index';
const {
  StyledType: { Header },
  StyledDiv: { MainDiv, Row },
  StyledNavigation: { LinkButton },
} = StyledComponents

import * as thunks from '../../redux/thunks';
const { casksThunks: { editCask } } = thunks;

import { createButton } from '../../buttonProps';
import { editCaskInputProps } from '../../inputProps';

import { InputOnChangeType, LocalReducerFunctionType } from '../../types/index';

export default () => {

  const { activeCask, activeOutturn } = useTypedSelector(state => state); 
  const {
    id,
    age,
    date,
    region,
    caskType,
    bottleOutturn,
    allocation,
    description
  } = activeCask
  const [ , setIsEdited ] = useState(false);

  const initialState = { 
    age,
    date,
    region,
    caskType,
    bottleOutturn,
    allocation,
    description
  };
  const reducer: LocalReducerFunctionType<typeof initialState> = (state, action) => {
    switch (action.name) {
      case `${ action.name }`:
        return {
          ...state,
          [action.name]: action.value
        };
    
      default: return state;
    }
  };

  const [ localState, dispatchLocally ] = useReducer(reducer, initialState)

  useEffect(() => checkLocalStateEdit(initialState, localState), [activeCask, localState]);

  const handleOnChange: InputOnChangeType = ({ target: { name, value } }) => dispatchLocally({ name, value })

  const checkLocalStateEdit = (previousState: typeof localState, currentState: typeof localState): void => {
    setIsEdited(false);

    Object.keys(previousState).forEach(key => {
      if(key !== 'updatedAt') {
        if(previousState[key] !== currentState[key]) setIsEdited(true);
      };
    });
  }

  return (
    <div>
      <Row justifyContent='space-between'>
        <SubNavigation link={ `/outturn/${ activeOutturn.id }` } destination='< Return to Cask List' />
        <Row justifyContent='space-evenly'>
          <LinkButton to={ `/edit/${ id }/step1` }>{ '< Back' }</LinkButton>
          <LinkButton to={ `/outturn/${ activeOutturn.id }` }>{ 'Finish and Return to Cask List>' }</LinkButton>
        </Row>
      </Row>
      <PageHeader pageTitle={ `Editing Cask no. ${ activeCask.caskNumber } ${ activeCask.name }`}/>
      <MainDiv>
       <Header>Editing Cask { activeCask.caskNumber } { activeCask.name }</Header>
        <Row>
          { editCaskInputProps(handleOnChange, localState).map((input, idx) => <InputManager key={ idx } props= { input } /> )}
        </Row>
        <ButtonManager props={ createButton(editCask, 'Save', activeCask.id, localState) } />
        <LinkButton to={ `/edit/${ activeCask.id }/step1` }>Back</LinkButton>
        <LinkButton to={ `/edit/${ activeCask.id }/step2` }>Next</LinkButton>
      </MainDiv>
    </div>
  )
}