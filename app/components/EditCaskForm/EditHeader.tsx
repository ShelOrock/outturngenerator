import * as React from 'react';
const {
  useEffect,
  useState,
  useReducer,
} = React;
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../utils';

import PageHeader from '../Header/PageHeader'
import InputForm from './InputForm';
import * as StyledComponents from '../styledcomponents/index';
const { StyledDiv: { Column } } = StyledComponents;

import * as thunks from '../../redux/thunks';
const {
  casksThunks: { editCask },
  activeCaskThunks: { getActiveCask }
} = thunks;

import { editCaskInputProps } from '../../inputProps';
import { createButton } from '../../buttonProps';

import {
  InputOnChangeType,
  LocalReducerFunctionType,
  ParamTypes,
} from '../../types/index';

export default () => {

  const dispatch = useDispatch();

  const { activeCask, activeOutturn } = useTypedSelector(state => state); 
  const {
    id,
    name,
    caskNumber,
  } = activeCask
  const [ isEdited, setIsEdited ] = useState(false);

  const initialState = {
    name: '',
    caskNumber: '',
    price: '',
    age: '',
    date: '',
    region: '',
    caskType: '',
    bottleOutturn: '',
    allocation: '',
    description: '',
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

  const { caskId } = useParams<ParamTypes>()

  useEffect(() => {
    dispatch(getActiveCask(caskId))
  }, [])
  useEffect(() => checkLocalStateEdit(initialState, localState), [activeCask, localState])
  useEffect(() => {
    Object.keys(activeCask).forEach(item => dispatchLocally({ name: `${ item }`, value: activeCask[item] }))
  }, [activeCask])


  const handleOnChange: InputOnChangeType = ({ target: { name, value } }) => dispatchLocally({ name, value });

  const checkLocalStateEdit = (previousState: typeof localState, currentState: typeof localState): void => {
    setIsEdited(false);

    Object.keys(previousState).forEach(key => {
      if(key !== 'updatedAt') {
        if(previousState[key] !== currentState[key]) setIsEdited(true);
      };
    });
  }

  const pageHeaderProps = {
    subNavigationProps: {
      link: activeOutturn.id ? `/outturn/${ activeOutturn.id }` : `/casks`,
      destination: '< Return to Cask List'
    },
    toolbarProps: {
      pageTitle: `Editing Cask ${ caskNumber } ${ name }`,
      addButtonProps: {
        disabled: !isEdited,
        onClickProps: createButton(editCask, 'Save', id, localState) 
      }
    }
  }

  const inputFormProps = {
    backLinkButton: {
      link: '#',
      destination: ''
    },
    forwardLinkButton: {
      link: `/edit/${id}/step2`,
      destination: 'Next >'
    },
    inputPropsGenerator: { editCaskInputProps },
    handleOnChange: { handleOnChange },
    localState: { localState }
  }

  return (
    <Column>
      <PageHeader { ...pageHeaderProps } />
      <InputForm { ...inputFormProps } />
    </Column>
  )
}