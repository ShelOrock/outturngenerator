import * as React from 'react';
const { useState, useEffect } = React;
import { useTypedSelector } from '../../utils';

import ButtonManager from '../Button/ButtonManager';
import * as StyledComponents from '../styledcomponents/index';
const { 
  StyledType: { Header },
  StyledDiv: { Row },
  StyledModal: { ModalContainer }
} = StyledComponents;
import * as actions from '../../redux/actions';
const { modalActions: { resetModal } } = actions;

export default () => {

  const { modal } = useTypedSelector(state => state);
  const [ localModalState, setLocalModalState ] = useState({ ...modal.stateShape })

  useEffect(() => setLocalModalState({ ...modal.stateShape }), [modal])

  const handleOnChange = ( { target: { name, value } } ) => setLocalModalState({ ...localModalState, [name]: value })

  const confirmProps = {
    text: 'Test',
    arguments: [],
  }

  const cancelProps = {
    text: 'Cancel',
    arguments: [],
    onClickFunction: resetModal
  }

  const confirmButtonProps = {
    variant: 'primary',
    onClickFunctionProps: confirmProps
  }

  const cancelButtonProps = {
    variant: 'secondary',
    onClickFunctionProps: cancelProps
  };

  return (
    <div>
      { !!Object.keys(modal).length 
        && (
          <ModalContainer>
            { modal.modalHeader && <Header>{ modal.modalHeader }</Header> }
            <Row justifyContent='space-evenly'>
              { modal.confirmButton.arguments && <ButtonManager    
                variant= 'primary'
                onClickFunctionProps={ { ...modal.confirmButton, arguments: [ ...modal.confirmButton.arguments, localModalState ] }}/> }
              <ButtonManager { ...cancelButtonProps } />
            </Row>
          </ModalContainer>
        )
      }
    </div>
  );
};