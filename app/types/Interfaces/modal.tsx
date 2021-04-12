import * as React from 'react';

import { AppThunk } from '../index';
import { ActionTypes } from '../index';

export interface CreateCaskModalState {
  name: string;
  caskNumber: string;
}

export interface CreateOutturnModalState {
  name: string;
  description: string;
}

export type ModalFunctionOnClickType = (...args: any) => AppThunk | ActionTypes;

export type ModalInputOnChangeType = (e?: React.ChangeEvent<HTMLInputElement>) => void;

export interface ModalButton {
  type?: 'CREATE' | 'DELETE',
  text?: string;
  arguments?: any[];
  onClickFunction?: ModalFunctionOnClickType;
}

export interface Modal<stateShapeTypes = CreateCaskModalState | CreateOutturnModalState> {
  modalHeader?: string;
  stateShape?: stateShapeTypes;
  confirmButton?: ModalButton;
  cancelButton?: ModalButton;
}

export type ModalFunctionType = (...args: any) => Modal
