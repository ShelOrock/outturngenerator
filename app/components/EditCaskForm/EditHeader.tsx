import * as React from 'react';
const {
  useEffect,
  useState,
  useReducer
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
    name,
    caskNumber,
    price,
  } = localState;

  useEffect(() => checkLocalStateEdit(activeCask, localState), [activeCask, localState])

  const handleOnChange: InputOnChangeType = ({ target: { name, value } }) => dispatchLocally({ name, value });

  const checkLocalStateEdit = (previousState: typeof localState, currentState: typeof localState): void => {
    setIsEdited(false);

    Object.keys(previousState).forEach(key => {
      if(key !== 'updatedAt') {
        if(previousState[key] !== currentState[key]) setIsEdited(true);
      };
    });
  }

  return (
    <MainDiv>
      <Header>Editing Cask { activeCask.caskNumber } { activeCask.name }</Header>
      <Row>
        <InputModule>
            <InputLabel>Number</InputLabel>
            <InputField type='text' name='caskNumber' value={ caskNumber } onChange={ handleOnChange } />
          </InputModule>

          <InputModule>
            <InputLabel>Name</InputLabel>
            <InputField type='text' name='name' value={ name } onChange={ handleOnChange } />
          </InputModule>

          <InputModule>
            <InputLabel>Price</InputLabel>
            <InputField type='text' name='price' value={ price } onChange={ handleOnChange } />
          </InputModule>
        </Row>
      <ButtonManager props={ createButton(editCask, 'Save', activeCask.id, localState) } />
      <LinkButton to={ `/edit/${ activeCask.id }/step2` }>Next</LinkButton>
    </MainDiv>
  )
}