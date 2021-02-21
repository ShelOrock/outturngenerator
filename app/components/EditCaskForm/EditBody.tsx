import * as React from 'react';
const {
  useEffect,
  useState,
  useReducer,
} = React;
import { useTypedSelector } from '../../utils';

import ButtonManager from '../Button/ButtonManager';
import * as StyledComponents from '../styledcomponents/index';
const {
  StyledType: { Header },
  StyledDiv: { MainDiv, Row },
  StyledNavigation: { LinkButton },
  StyledForm: {
    InputModule,
    InputLabel,
    InputField,
    TextArea
  }
} = StyledComponents

import * as thunks from '../../redux/thunks';
const { casksThunks: { editCask } } = thunks;

import { createButton } from '../../buttonProps';

import { InputOnChangeType, LocalReducerFunctionType } from '../../types/index';

export default () => {

  const { activeCask } = useTypedSelector(state => state); 
  const [ isEdited, setIsEdited ] = useState(false);

  const initialState = { ...activeCask };
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
  const {
    age,
    date,
    region,
    caskType,
    bottleOutturn,
    allocation,
    description
  } = localState

  useEffect(() => checkLocalStateEdit(activeCask, localState), [activeCask, localState]);

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
    <MainDiv>
      <Header>Editing Cask {activeCask.caskNumber} { name }</Header>
      <Row>
        <InputModule>
            <InputLabel>Age</InputLabel>
            <InputField type='text' name='age' value={ age } onChange={ handleOnChange } />
        </InputModule>

        <InputModule>
            <InputLabel>Date distilled</InputLabel>
            <InputField type='text' name='date' value={ date } onChange={ handleOnChange } />
        </InputModule>
        </Row>

        <InputModule>
        <InputLabel>Region</InputLabel>
        <InputField type='text' name='region' value={ region } onChange={ handleOnChange } />
        </InputModule>

        <InputModule>
        <InputLabel>Cask type</InputLabel>
        <InputField type='text' name='caskType' value={ caskType } onChange={ handleOnChange } />
        </InputModule>

        <Row>
        <InputModule>
            <InputLabel>Outturn</InputLabel>
            <InputField type='text' name='bottleOutturn' value={ bottleOutturn } onChange={ handleOnChange } />
        </InputModule>

        <InputModule>
            <InputLabel>Allocation</InputLabel>
            <InputField type='text' name='allocation' value={ allocation } onChange={ handleOnChange } />
        </InputModule>
        </Row>

        <InputModule>
          <InputLabel>Tasting Note</InputLabel>
          <TextArea name='description' value={ description } onChange={ handleOnChange } />
        </InputModule>
      <ButtonManager props={ createButton(editCask, 'Save', activeCask.id, localState) } />
      <LinkButton to={ `/edit/${ activeCask.id }/step1` }>Back</LinkButton>
      <LinkButton to={ `/edit/${ activeCask.id }/step2` }>Next</LinkButton>
    </MainDiv>
    </div>
  )
}