import {
  Outturn,
  Cask,
  InputOnChangeType
} from '../index';
import { ActionTypes, AppDispatch, AppThunk } from '../redux';

export interface GenericComponentProps {
  children?: React.ReactNode;
};

export interface OutturnCard {
  key: string;
  outturn: Outturn;
  sortMethod: string;
};

export interface CaskListItem {
  key: string;
  cask: Cask;
}

export interface ButtonProps {
  text?: string;
  size?: string;
  variant?: string;
  disabled?: boolean;
  dispatch?: AppDispatch | null;
  onClick?: (() => void) | AppThunk | ActionTypes;
}

export interface SubNavigationPropTypes {
  link: string;
  destination: string;
}

export interface ToolbarPropTypes {
  pageTitle: string;
  addButtonProps: ButtonProps | null;
  deleteButtonProps: ButtonProps | null;
}

export interface PageHeaderPropTypes {
  subNavigationProps: SubNavigationPropTypes,
  toolbarProps: ToolbarPropTypes
}

export interface FormPropTypes {
  backLinkButton: SubNavigationPropTypes;
  forwardLinkButton: SubNavigationPropTypes;
  confirmButton?: ButtonProps;
  cancelButton?: ButtonProps;
  inputPropsGenerator;
  onChange: InputOnChangeType;
  width: string;
}

export interface InputPropTypes {
  label: string;
  type: 'text'
    |'password'
    | 'select'
    | 'textArea';
  name: string;
  size: 'small'
    | 'medium'
    | 'large'
    | 'default';
  value: string;
};

export interface TextInputPropTypes {
  placeholder: string;
  type: 'text' | 'password';
  name: string;
  value: string;
  onChange?: InputOnChangeType;
}

export interface InputManagerPropTypes {
  label?: string;
  placeholder?: string;
  type: 'text' | 'password';
  size: 'small'
    | 'medium'
    | 'large'
    | 'default';
  name: string;
  value: string;
  onChange: InputOnChangeType;
}

export interface OptionPropTypes {
  value: string;
  name: string;
}

export type SelectOptionPropTypes = OptionPropTypes[]

export interface SelectPropTypes {
  selectValue: string;
  label: string;
  disabled?: boolean;
  onChange: InputOnChangeType
  width?: string;
  options: SelectOptionPropTypes
}

export type InputGroupPropTypes = InputPropTypes | SelectPropTypes | (InputPropTypes|SelectPropTypes)[];

export interface FormInputPropTypes {
  sectionTitle?: string;
  inputProps: InputGroupPropTypes | InputGroupPropTypes[]
}

export interface AttemptUserLoginButtonPropTypes {
  dispatchToStore: boolean,
  onClick: any;
  size: string;
}

export interface AttemptUserLogoutButtonPropTypes extends AttemptUserLoginButtonPropTypes {
  size: 'small' | 'default'
}

export type LoginFormPropTypes = FormInputPropTypes[];

export type SignUpFormPropTypes = FormInputPropTypes[];

export type CaskFormPropTypes = FormInputPropTypes[] | SelectPropTypes;