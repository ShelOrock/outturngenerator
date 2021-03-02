import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../utils'

import ButtonManager from '../Button/ButtonManager';
import * as StyledComponents from '../styledcomponents/index'
const {
  StyledForm: { Checkbox }
} = StyledComponents;

import * as actions from '../../redux/actions';
const {
  searchFilterActions: {
    addFilter,
    removeFilter,
    resetFilters
  }
} = actions;

import * as thunks from '../../redux/thunks';
const { 
  casksThunks: { getCasks }
} = thunks;

import { createButton } from '../../buttonProps';

import { InputOnChangeType } from '../../types';

export default ({ sortMethod }: any) => {
  
  const dispatch = useDispatch();
  const { searchFilters } = useTypedSelector(state => state);

  const handleOnCheck: InputOnChangeType = ({ target: { name } }) => {
    if(searchFilters.includes(name)) dispatch(removeFilter(name))
    else dispatch(addFilter(name))
  }

  return (
    <div>
        <ul>
            { flavourProfiles.map((flavour, idx) => (
              <li key={ idx }>
                <Checkbox
                  type='checkbox'
                  name={ flavour }
                  checked={ searchFilters.includes(flavour) }
                  onChange={ handleOnCheck }
                />
                <label>{ flavour }</label>
              </li>
             ) )}
        </ul>
        <ButtonManager 
          props={ createButton(getCasks, 'Filter', sortMethod, searchFilters) }
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
  'Other'
]