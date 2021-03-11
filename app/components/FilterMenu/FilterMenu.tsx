import * as React from 'react';
const { useEffect, useReducer } = React;
import { useTypedSelector } from '../../utils';

import ButtonManager from '../Button/ButtonManager';
import * as StyledComponents from '../styledcomponents/index'
const {
  StyledForm: { Checkbox }
} = StyledComponents;

import * as actions from '../../redux/actions';
const {
  searchFilterActions: {
    setFilters,
  }
} = actions;

import { createButton } from '../../buttonProps';

import { InputOnChangeType, LocalReducerFunctionType } from '../../types';

export default () => {
  

  const { searchFilters } = useTypedSelector(state => state);

  const initialState = [];
  const reducer: LocalReducerFunctionType<typeof initialState> = (state = initialState, action) => {
    switch(action.type) {
      case 'ADD_FILTER': return [ ...state, action.value ]
      case 'REMOVE_FILTER': return state.filter(_filter => _filter !== action.value)
      case 'UPDATE_FILTERS': return [ ...action.value ]
      default: return [];
    }
  }

  const [ localFilters, dispatchLocally ] = useReducer(reducer, initialState)

  useEffect(() => dispatchLocally({ type: 'UPDATE_FILTERS', value: searchFilters }), [searchFilters])

  const handleOnCheck: InputOnChangeType = ({ target: { name } }) => {
    if(localFilters.includes(name)) dispatchLocally({ type: 'REMOVE_FILTER', value: name })
    else dispatchLocally({ type: 'ADD_FILTER', value: name })
  }

  return (
    <div>
        <ul>
            { flavourProfiles.map((flavour, idx) => (
              <li key={ idx }>
                <Checkbox
                  type='checkbox'
                  name={ flavour }
                  checked={ localFilters.includes(flavour) }
                  onChange={ handleOnCheck }
                />
                <label>{ flavour }</label>
              </li>
             ) )}
        </ul>
        <ButtonManager 
          props={ createButton(setFilters, 'Apply Filters', localFilters) }
        />
    </div>
    )
};

const flavourProfiles = [
  'Young & spritely',
  'Sweet, fruity & mellow',
  'Spicy & sweet',
  'Spicy & dry',
  'Deep, rich & dried fruits',
  'Old & dignified',
  'Light & delicate',
  'Juicy, oak & vanilla',
  'Oily & coastal',
  'Lightly peated',
  'Peated',
  'Heavily peated',
]