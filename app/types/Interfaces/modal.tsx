import * as React from 'react';

import { AppThunk } from '../index';
import { ActionTypes } from '../index';
import { ButtonOnClickType } from './form';

export interface ModalStateType {
  heading: string;
  subheading?: string;
  description?: string;
};

export interface ModalActionType {
  text: string;
  onClick: ModalFunctionOnClickType;
};

export type ModalFunctionOnClickType = (...args: any) => AppThunk | ActionTypes;

export type ModalInputOnChangeType = (e?: React.ChangeEvent<HTMLInputElement>) => void;

export interface ModalButton {
  text?: string;
  arguments?: any[];
  dispatchToStore?: boolean;
  onClick: ModalFunctionOnClickType;
};

export interface Modal {
  heading: string;
  state?: ModalStateType;
  primaryAction: ModalActionType;
  secondaryAction: ModalActionType;
};

export type ModalFunctionType = (...args: any) => Modal
