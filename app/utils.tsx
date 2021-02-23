import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState, Cask, Outturn } from './types/index';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export const truncateText = (string: string): string => {
  if(string.length > 50) return `${ string.slice(0, 50) }...`;
  return string;
};

export const assignColorPill = (string: string): string => {
  if(string) {
    string = string.toLowerCase()
  }

  switch(string) {
    case 'young & spritely':
      return '#DFAED1';
    
    case 'sweet, fruity & mellow':
      return '#BD72AC';

    case 'spicy & sweet':
      return '#774677';

    case 'spicy & dry':
      return '#F9B254';

    case 'deep, rich & dried fruit':
      return '#D76E57';

    case 'old & dignified':
      return '#982130';

    case 'light & delicate':
      return '#99D4DF';

    case 'juicy, oak & vanilla':
      return '#569ABC';

    case 'oily & coastal':
      return '#2E5C74';

    case 'lightly peated':
      return '#C5DEAC';

    case 'peated':
      return '#81AC6D';

    case 'heavily peated':
      return '#5B7C4E';

    default:
      return '#202448';
  };
};

export const capitalizeString = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1);

export const convertFromCamelCaseToSentenceCase = (str: string): string => str.replace(/([A-Z])/g, " $1");

export const generateOutturn = (outturn: Outturn): string => (
  `<html></html>`
);