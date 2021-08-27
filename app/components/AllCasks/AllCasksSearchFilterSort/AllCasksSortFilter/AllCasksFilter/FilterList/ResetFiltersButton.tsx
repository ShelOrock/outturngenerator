import * as React from 'react';
import { useTypedSelector } from '../../../../../../utils';

import ButtonManager from '../../../../../Button/ButtonManager';

import * as ReduxActions from '../../../../../../redux/actions';
const { filterActions: { resetFilters } } = ReduxActions;

import { ActionFunctionType } from '../../../../../../types';

export default () => {

  const { filters } = useTypedSelector(state => state);

  interface ResetFiltersOnClickButtonPropTypes {
    onClickFunction: ActionFunctionType;
    arguments: any[];
    text: string;
  };

  interface ResetFiltersButtonPropTypes {
    variant: string;
    disabled: boolean;
    onClick: ResetFiltersOnClickButtonPropTypes;
  };

  const resetFiltersOnClickButtonProps: ResetFiltersOnClickButtonPropTypes = {
    onClickFunction: resetFilters,
    arguments: [],
    text: 'X Clear Filters',
  };

  const resetFilterButtonProps: ResetFiltersButtonPropTypes = {
    variant: "tertiary",
    disabled: !filters.length,
    onClick: resetFiltersOnClickButtonProps,
  };

  return !!filters.length && <ButtonManager { ...resetFilterButtonProps } />;
};