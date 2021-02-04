import { Outturn, Cask } from '../index';

export interface OutturnCard {
  key: number;
  outturn: Outturn;
};

export interface CaskListItem {
  key: number;
  cask: Cask;
}