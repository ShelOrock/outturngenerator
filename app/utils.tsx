import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState, Outturn } from './types/index';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export const truncateText = (string: string): string => {
  if(string.length > 50) return `${ string.slice(0, 50) }...`;
  return string;
};

export const capitalizeString = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1);

export const convertFromCamelCaseToSentenceCase = (str: string): string => str.replace(/([A-Z])/g, " $1");

export const generateOutturn = (outturn: Outturn): string => (
  `<html></html>`
);