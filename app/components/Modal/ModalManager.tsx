//Dependency Libraries
import * as React from 'react';
const { useState, useEffect } = React;
//Dependency Functions
import { createButton, useTypedSelector } from '../../utils';

//Components
import ModalInputManager from './ModalInputManager'
import ButtonManager from '../Button/ButtonManager';
//StyledComponents
import * as StyledComponents from '../styledcomponents';
const { 
  StyledType: { Heading },
  StyledDiv: { Row },
  StyledModal: { Modal }
} = StyledComponents;

//Redux actions
import * as actions from '../../redux/actions';
const { modalActions: { resetModal } } = actions;

//Types
import { ButtonProps, InputOnChangeType } from '../../types';

export default () => {

  const { modal } = useTypedSelector(state => state);
  const [ localModalState, setLocalModalState ] = useState({ ...modal.modalState })

  useEffect(() => setLocalModalState({ ...modal.modalState }), [modal])

  const onChange: InputOnChangeType = ( { target: { name, value } } ) => setLocalModalState({ ...localModalState, [name]: value })

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
    onChange,
  }

  const confirmButtonProps: ButtonProps = {
    variant: 'primary',
    dispatchToStore: modal.confirmButton && modal.confirmButton.dispatchToStore,
    onClick: modal.confirmButton
      && createButton(
        modal.confirmButton.onClick,
        modal.confirmButton.text,
        ...modal.confirmButton.arguments,
        localModalState,
      )
  };

  const cancelButtonProps: ButtonProps = {
    variant: 'secondary',
    onClick: createButton(
      resetModal,
      'Cancel'
    )
  };

  return (
    <div>
      { !!Object.keys(modal).length 
        && (
          <Modal>
            <Heading>{ modal.modalHeader }</Heading>
            <ModalInputManager { ...inputFormProps } />
            <Row>
              <ButtonManager { ...confirmButtonProps }/>
              <ButtonManager { ...cancelButtonProps } />
            </Row>
          </Modal>
        )
      }
    </div>
  );
};