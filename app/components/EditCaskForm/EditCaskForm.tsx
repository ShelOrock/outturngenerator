//Dependency Libraries
import * as React from 'react';
const {
  useEffect,
  useState,
  useReducer,
} = React;
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
//Dependency Functions
import {
  useTypedSelector,
  createButton,
  flavourProfiles
} from '../../utils';

//Components
import PageHeader from '../Header/PageHeaderManager'
import InputForm from '../Form/InputForm';
//Styled Components
import * as StyledComponents from '../styledcomponents/index';
const { StyledDiv: { Column } } = StyledComponents;

//Redux Thunks
import * as thunks from '../../redux/thunks';
const {
  casksThunks: { editCask },
  activeCaskThunks: { getActiveCask }
} = thunks;

//Types
import {
  ButtonProps,
  CaskFormPropTypes,
  FormPropTypes,
  InputOnChangeType,
  LocalReducerFunctionType,
  PageHeaderPropTypes,
  ParamTypes,
} from '../../types/index';

export default () => {

  const dispatch = useDispatch();

  const {
    activeCask,
    activeOutturn,
    allOutturns,
    activeUser
  } = useTypedSelector(state => state); 

  const {
    id,
    name,
    caskNumber,
  } = activeCask

  const initialState = {
    name: '',
    caskNumber: '',
    price: '',
    flavourProfile: 'Choose a flavour Profile',
    age: '',
    date: '',
    region: '',
    caskType: '',
    bottleOutturn: '',
    allocation: '',
    description: '',
    outturnId: '',
    caskPosition: activeCask.caskPosition,
  };

  const reducer: LocalReducerFunctionType<any> = (state = initialState, action) => {
    switch (action.name) {
      case 'CANCEL_CHANGES':
        return activeCask;

      case 'SET_CASK_POSITION':
        return {
          ...state,
          caskPosition: action.value
        }


      case `${ action.name }`:
        return {
          ...state,
          [action.name]: action.value
        };

      default: return state;
    }
  };

  const [ localState, dispatchLocally ] = useReducer(reducer, initialState)
  const [ isEdited, setIsEdited ] = useState(false);
  const { caskId } = useParams<ParamTypes>()

  useEffect(() => { dispatch(getActiveCask(caskId)) }, [])
  useEffect(() => { checkLocalStateEdit(activeCask, localState) }, [activeCask, localState])
  useEffect(() => { evaluateCaskPosition() }, [localState.outturnId])
  useEffect(() => { Object.keys(activeCask).forEach(item => dispatchLocally({ name: `${ item }`, value: activeCask[item] == null ? '' : activeCask[item] })) }, [activeCask])

  const onChange: InputOnChangeType = ({ target: { name, value } }) => dispatchLocally({ name, value });

  const evaluateUserType = activeUser.userType == 'Admin' || activeUser.userType == 'Standard'

  const checkLocalStateEdit = (previousState: typeof activeCask, currentState: typeof localState): void => {
    setIsEdited(false);
    Object.keys(previousState).forEach(key => {
      if(key !== 'updatedAt') {
        if(key !== 'outturnId') {
          if(previousState[key] !== currentState[key]) setIsEdited(true);
        } else {
          if(!!previousState[key] || !!currentState[key]) {
            if(!!previousState[key] !== !!currentState[key] || previousState[key] !== currentState[key]) setIsEdited(true); 
          }
        }
      };
    });
  };

  const addButtonProps: ButtonProps = evaluateUserType
    && {
      disabled: !isEdited,
      onClick: createButton(
        editCask,
        'Save Changes',
        id,
        localState
      ) 
  };

  const deleteButtonProps: ButtonProps = evaluateUserType
  && {
      variant: 'secondary',
      disabled: !isEdited,
      dispatchToStore: false,
      onClick: createButton(
        dispatchLocally,
        'Cancel Changes',
        { name: 'CANCEL_CHANGES' }
      )
  }

  const pageHeaderProps: PageHeaderPropTypes = {
    subNavigationProps: {
      link: activeOutturn.id ? `/outturn/${ activeOutturn.id }` : `/casks`,
      destination: '< Return to Cask List'
    },
    toolbarProps: {
      pageTitle: `Editing Cask ${ caskNumber } ${ name }`,
      addButtonProps,
      deleteButtonProps,
    }
  };
  
  const caskFormInputProps: CaskFormPropTypes = [
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
        {
          type: 'select',
          selectValue: localState.flavourProfile,
          label: 'Flavour Profile',
          onChange: (e) => dispatchLocally(
            { name: 'flavourProfile',
            value: e.target.value}
          ),
          width: '200px',
          options: [
            {
              value: 'Choose a Flavour Profile',
              name: 'Choose a Flavour Profile'
            },
            ...flavourProfiles.map(flavourProfile => ({
              value: flavourProfile,
              name: flavourProfile
            }))         
          ]
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
          size: "large",
          value: localState.region,
        },
        {
          label: "Cask Type",
          type: "text",
          name: "caskType",
          size: "large",
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
          type: "textArea",
          name: "description",
          size: "large",
          value: localState.description,
        },
      ],
    },
    {
      sectionTitle: 'Outturn',
      inputProps: [
        {
          type: 'select',
          selectValue: localState.outturnId,
          label: 'Choose an Outturn',
          onChange: (e) => dispatchLocally({ name: 'outturnId', value: e.target.value}),
          width: '250px',
          options: [
            {
              value: '',
              name: 'No Associated Outturn'
            },
            ...allOutturns.map(outturn => ({
              value: outturn.id,
              name: outturn.name
            }))
          ],
        },
      ],
    },
  ];

  const evaluateCaskPosition = () => {
    if(localState.outturnId) {
      let caskLength = allOutturns.find(outturn => outturn.id == localState.outturnId).casks
      dispatchLocally({ name: 'SET_CASK_POSITION', value: caskLength.length })
    } else {
      dispatchLocally({ name: 'SET_CASK_POSITION', value: null })
    }
  }

  const confirmButton: ButtonProps = evaluateUserType
  && {
    disabled: !isEdited,
    onClick: createButton(
      editCask,
      'Save Changes',
      id,
      localState,
    ) 
  }

  const cancelButton: ButtonProps = evaluateUserType
  && {
      variant: 'secondary',
      disabled: !isEdited,
      dispatchToStore: false,
      onClick: createButton(
        dispatchLocally,
        'Cancel Changes',
        { name: 'CANCEL_CHANGES' }
      )
  }

  const formProps: FormPropTypes = {
    backLinkButton: {
      link: activeOutturn.id ? `/outturn/${ activeOutturn.id }` : `/casks`,
      destination: `< Return to ${ activeOutturn.id ? 'Outturn' : 'Cask List' }`
    },
    forwardLinkButton: {
      link: activeOutturn.id ? `/outturn/${ activeOutturn.id }` : `/casks`,
      destination: 'Next >'
    },
    confirmButton,
    cancelButton,
    inputPropsGenerator: caskFormInputProps,
    onChange,
    width: '60%'
  }

  return (
    <Column>
      <PageHeader { ...pageHeaderProps } />
      <InputForm { ...formProps } />
    </Column>
  )
}