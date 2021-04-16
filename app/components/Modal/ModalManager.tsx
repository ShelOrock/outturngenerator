import * as React from 'react';
const { useState, useEffect } = React;
import { createButton, useTypedSelector } from '../../utils';

import ModalInputManager from './ModalInputManager'
import ButtonManager from '../Button/ButtonManager';
import * as StyledComponents from '../styledcomponents/index';
const { 
  StyledType: { Header },
  StyledDiv: { Row },
  StyledModal: { ModalContainer }
} = StyledComponents;

import * as actions from '../../redux/actions';
import { addOutturn } from '../../redux/outturns/thunks';
const { modalActions: { resetModal } } = actions;

export default () => {

  const { modal } = useTypedSelector(state => state);
  const [ localModalState, setLocalModalState ] = useState({ ...modal.modalState })

  useEffect(() => setLocalModalState({ ...modal.modalState }), [modal])

  const handleOnChange = ( { target: { name, value } } ) => setLocalModalState({ ...localModalState, [name]: value })

  const generateInputProps = () => (
    Object.keys(localModalState).map(stateSlice => ({
      label: stateSlice,
      type: 'text',
      name: stateSlice,
      value: localModalState[stateSlice]
    }))
  );

  const inputFormProps = {
    inputPropsGenerator: generateInputProps(),
    handleOnChange,
  }

  const confirmButtonProps = {
    variant: 'primary',
    onClickFunctionProps: modal.confirmButton && createButton(
      modal.confirmButton.onClickFunction,
      modal.confirmButton.text,
      ...modal.confirmButton.arguments,
      localModalState,
    )
  };

  const cancelButtonProps = {
    variant: 'secondary',
    onClickFunctionProps: createButton(
      resetModal,
      'Cancel'
    )
  };

  return (
    <div>
      { !!Object.keys(modal).length 
        && (
          <ModalContainer>
            <Header>{ modal.modalHeader }</Header>
            <ModalInputManager { ...inputFormProps } />
            <Row>
              <ButtonManager { ...confirmButtonProps }/>
              <ButtonManager { ...cancelButtonProps } />
            </Row>
          </ModalContainer>
        )
      }
    </div>
  );
};