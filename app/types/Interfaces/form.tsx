import * as React from 'react';

export interface CaskFormPropTypes {
  key?: number;
  caskPosition: number;
}

export interface CaskListPropTypes {
  key?: number;
  caskPosition: number;
  caskNumber: string;
}

export interface LocalReducerActionType {
  name: string;
  value: string;
}

export type InputOnChangeType = (e?: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;

export type ButtonOnClickType = () => void;