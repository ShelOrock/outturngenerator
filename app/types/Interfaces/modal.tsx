import * as React from 'react';

import { AppThunk } from '../index';

export interface ModalInputModule {
  inputText: string;
  label: string;
}

export interface CreateCaskModalState {
  name: string;
  caskNumber: string;
}

export interface CreateOutturnModalState {
  name: string;
  description: string;
}

export type ModalFunctionOnClickType = (...args: any) => AppThunk;

export type ModalInputOnChangeType = (e?: React.ChangeEvent<HTMLInputElement>) => void;

export interface ModalButton {
  type: 'CREATE' | 'DELETE',
  buttonText: string;
  arguments: any[];
  buttonOnClickFunction: ModalFunctionOnClickType;
}

export interface Modal<stateShapeTypes = CreateCaskModalState | CreateOutturnModalState> {
  modalHeader?: string;
  stateShape?: stateShapeTypes;
  inputModules?: ModalInputModule[];
  buttonModule?: ModalButton;
}

export type ModalFunctionType = (...args: any) => Modal
