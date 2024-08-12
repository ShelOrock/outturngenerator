import * as React from 'react';

import { AppThunk } from '../index';
import { ActionTypes } from '../index';
import { InputOnChangeType } from './form';

export interface DialogStateType {
  heading: string;
  subheading?: string;
  description?: string;
};

export interface DialogActionType {
  text: string;
  onClick: DialogFunctionOnClickType;
};

export type DialogFunctionOnClickType = (...args: any) => AppThunk | ActionTypes;

export type DialogInputOnChangeType = (e?: React.ChangeEvent<HTMLInputElement>) => void;

export interface DialogButton {
  text?: string;
  arguments?: any[];
  onClick: DialogFunctionOnClickType;
};

export interface DialogTypes {

};

export type DialogFunctionType = (...args: any) => DialogTypes
