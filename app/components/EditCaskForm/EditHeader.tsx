import * as React from 'react';
const {
  useEffect,
  useState,
  useReducer
} = React;
import { useTypedSelector } from '../../utils';

import SubNavigation from '../Header/SubNavigation';
import PageHeader from '../Header/PageHeader'
import ButtonManager from '../Button/ButtonManager';
import InputManager from '../Form/InputManager';
import * as StyledComponents from '../styledcomponents/index';
const {
  StyledDiv: { MainDiv, Row },
  StyledNavigation: { LinkButton },
} = StyledComponents

import * as thunks from '../../redux/thunks';
const { casksThunks: { editCask } } = thunks;

import { editCaskInputProps } from '../../inputProps';
import { createButton } from '../../buttonProps';

import { InputOnChangeType, LocalReducerFunctionType } from '../../types/index';

export default () => {

  const { activeCask, activeOutturn } = useTypedSelector(state => state); 
  const {
    id,
    name,
    caskNumber,
    price
  } = activeCask
  const [ isEdited, setIsEdited ] = useState(false);

  const initialState = {
    name,
    caskNumber,
    price
  };
  const reducer: LocalReducerFunctionType<typeof initialState> = (state = initialState, action) => {
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

  useEffect(() => checkLocalStateEdit(initialState, localState), [activeCask, localState])

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
    <div>
      <PageHeader
        subNavigationProps={ {
          link: `/outturn/${ activeOutturn.id }`,
          destination: '< Return to Cask List'
        } }
        toolbarProps={ {
          pageTitle: `Editing Cask no. ${ caskNumber } ${ name }`
        } }
      />
      <MainDiv>
        { editCaskInputProps(handleOnChange, localState).map((input, idx) => <InputManager key={ idx } props= { input } /> )}
        <Row>
          <LinkButton to={ `/edit/${ id }/step2` }>{ 'Next >' }</LinkButton>
          <ButtonManager disabled={ !isEdited } props={ createButton(editCask, 'Save', id, localState) } />
        </Row>
      </MainDiv>
    </div>
  )
}