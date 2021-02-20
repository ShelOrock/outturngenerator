import { Outturn, Cask } from '../index';

export interface OutturnCard {
  key: string;
  outturn: Outturn;
};

export interface CaskListItem {
  key: string;
  cask: Cask;
}

export interface ButtonProps {
  size?: string;
  variant?: string;
  disabled?: boolean;
  props: any;
}