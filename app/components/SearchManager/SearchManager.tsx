import * as React from 'react';
const { useState, useEffect } = React;
import { useDispatch } from 'react-redux';

import InputManager from '../Form/InputManager';

import * as actions from '../../redux/actions';
const { searchActions: { setSearch } } = actions;

import { InputOnChangeType, InputManagerPropTypes } from '../../types';

export default ({ placeholder, searchSet, firstCriteria = '', secondCriteria = '' }) => {

  const dispatch = useDispatch();
  const [ searchField, setSearchField ] = useState('');

  useEffect(() => {
    dispatch(setSearch(checkAgainstSearchSet()))
  }, [ searchField ]);

  const handleOnChange: InputOnChangeType = (e) => setSearchField(e.target.value)

  const checkAgainstSearchSet = () => {
    return [
      ...firstCriteria && searchSet.filter(setItem => setItem[firstCriteria].toLowerCase().includes(searchField.toLowerCase())),
      ...secondCriteria && searchSet.filter(setItem => setItem[secondCriteria].toLowerCase().includes(searchField.toLowerCase())),
    ]
  };

  const searchFieldProps: InputManagerPropTypes = {
    placeholder, 
    type: 'text',
    size: 'large',
    name: 'searchField',
    value: searchField,
    onChange: handleOnChange
  }

  return (
    <InputManager { ...searchFieldProps } />
  )
}