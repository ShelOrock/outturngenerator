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
  text?: string;
  arguments?: any[];
  dispatchToStore?: boolean;
  onClick: ModalFunctionOnClickType;
};

export interface Modal<ModalStateTypes = CreateCaskModalState | CreateOutturnModalState> {
  modalHeader?: string;
  modalState?: ModalStateTypes;
  confirmButton: ModalButton;
};

export type ModalFunctionType = (...args: any) => Modal
