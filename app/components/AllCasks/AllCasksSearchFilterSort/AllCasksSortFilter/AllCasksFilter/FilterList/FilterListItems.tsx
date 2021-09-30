import *  as React from 'react';
import { flavourProfiles } from '../../../../../../utils';

// import ButtonManager from '../../../../../Button/ButtonManager';

import * as ReduxActions from '../../../../../../redux/actions';
const { filterActions: { removeFilter } } = ReduxActions;

import { ActionFunctionType } from '../../../../../../types';

export default ({ filter }) => {

  interface FilterListItemOnClickPropTypes {
    onClickFunction: ActionFunctionType,
    arguments: any[];
    text: string;
  };

  interface FilterListItemPropTypes {
    dispatchToStore: boolean;
    onClick: any;
    variant: string;
  };

  const filterListItemOnClickProps: FilterListItemOnClickPropTypes = {
    onClickFunction: removeFilter,
    arguments: [ filter ],
    text: `X ${ filter }`,
  };

  const filterListItemProps: FilterListItemPropTypes = {
    dispatchToStore: true,
    onClick: filterListItemOnClickProps,
    variant: flavourProfiles.includes(filter) ? filter : 'default'
  };

  return <></>//<ButtonManager { ...filterListItemProps } />
};