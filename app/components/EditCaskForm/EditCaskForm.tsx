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
import InputForm from '../Form/InputForm';
import * as StyledComponents from '../styledcomponents/index';
const { StyledDiv: { Column } } = StyledComponents;

import * as thunks from '../../redux/thunks';
const {
  casksThunks: { editCask },
  activeCaskThunks: { getActiveCask }
} = thunks;

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
  
  useEffect(() => { dispatch(getActiveCask(caskId)) }, [])
  useEffect(() => { checkLocalStateEdit(activeCask, localState) }, [activeCask, localState])
  useEffect(() => { Object.keys(activeCask).forEach(item => dispatchLocally({ name: `${ item }`, value: activeCask[item] })) }, [activeCask])

  const handleOnChange: InputOnChangeType = ({ target: { name, value } }) => dispatchLocally({ name, value });

  const checkLocalStateEdit = (previousState: typeof activeCask, currentState: typeof localState): void => {
    setIsEdited(false);

    Object.keys(previousState).forEach(key => {
      if(key !== 'updatedAt') {
        if(previousState[key] !== currentState[key]) setIsEdited(true);
      };
    });
  };

  const pageHeaderProps = {
    subNavigationProps: {
      link: activeOutturn.id ? `/outturn/${ activeOutturn.id }` : `/casks`,
      destination: '< Return to Cask List'
    },
    toolbarProps: {
      pageTitle: `Editing Cask ${ caskNumber } ${ name }`,
      addButtonProps: {
        disabled: !isEdited,
        onClickProps: createButton(editCask, 'Save Changes', id, localState) 
      },
      deleteButtonProps: {
        variant: 'secondary',
        disabled: !isEdited,
        dispatchToStore: false,
        onClickProps: createButton(setIsEdited, 'Cancel Changes', false)
      }
    }
  }

  const editCaskInputProps = [
    {
      sectionTitle: "Header",
      inputProps: [
        [
          {
            label: "Cask Number",
            type: "text",
            name: "caskNumber",
            size: "large",
            value: localState.caskNumber,
          },
          {
            label: "Name",
            type: "text",
            name: "name",
            size: "large",
            value: localState.name,
          },
        ],
        {
          label: "Price",
          type: "text",
          name: "price",
          size: "small",
          value: localState.price,
        },
      ],
    },
    {
      sectionTitle: "Body",
      inputProps: [
        [
          {
            label: "Age",
            type: "text",
            name: "age",
            size: "large",
            value: localState.age,
          },
          {
            label: "Date",
            type: "text",
            name: "date",
            size: "large",
            value: localState.date,
          },
        ],
        {
          label: "Region",
          type: "text",
          name: "region",
          size: "medium",
          value: localState.region,
        },
        {
          label: "Cask Type",
          type: "text",
          name: "caskType",
          size: "medium",
          value: localState.caskType,
        },
        [
          {
            label: "Outturn",
            type: "text",
            name: "bottleOutturn",
            size: "small",
            value: localState.bottleOutturn,
          },
          {
            label: "Allocation",
            type: "text",
            name: "allocation",
            size: "small",
            value: localState.allocation,
          },
        ],
        {
          label: "Tasting Note",
          type: "text",
          name: "description",
          size: "medium",
          value: localState.description,
        },
      ],
    },
  ]

  const inputFormProps = {
    backLinkButton: {
      link: '#',
      destination: ''
    },
    forwardLinkButton: {
      link: activeOutturn.id ? `/outturn/${ activeOutturn.id }` : `/casks`,
      destination: 'Next >'
    },
    inputPropsGenerator: editCaskInputProps,
    handleOnChange,
  }

  return (
    <Column>
      <PageHeader { ...pageHeaderProps } />
      <InputForm { ...inputFormProps } />
    </Column>
  )
}