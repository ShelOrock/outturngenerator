import * as React from 'react';
const { useState, useEffect } = React;
import { useTypedSelector } from '../../utils';

import CaskSearch from '../CaskSearch/CaskSearch';
import ButtonManager from '../Button/ButtonManager';
import InputManager from '../Form/InputManager';
import * as StyledComponents from '../styledcomponents/index';
const { 
  StyledType: { Header, Subheader },
  StyledDiv: { Column, Row },
  StyledModal: { ModalContainer }
} = StyledComponents;

import { editCaskInputProps } from '../../inputProps';

export default () => {

  const { modal } = useTypedSelector(state => state);
  const [ localModalState, setLocalModalState ] = useState({ ...modal.stateShape })

  useEffect(() => setLocalModalState({ ...modal.stateShape }), [modal])

  const handleOnChange = ( { target: { name, value } } ) => setLocalModalState({ ...localModalState, [name]: value })

  return (
    <div>
      {
        Object.keys(modal).length 
        ? (
          <ModalContainer>
            { modal.modalHeader ? <Header>{ modal.modalHeader }</Header> : null }
            {
              localModalState
              && Object.keys(localModalState)
              && modal.confirmButton
              && modal.cancelButton
              ? editCaskInputProps(handleOnChange, localModalState).map((input, idx) => <InputManager key={ idx } props= { input } />)
              : null
            }
            <Row justifyContent='space-evenly'>
              <ButtonManager variant='primary' props={ { ...modal.confirmButton, arguments: [ ...modal.confirmButton.arguments, localModalState ] } }/>
              <ButtonManager variant='secondary' props={ modal.cancelButton } />
            </Row>
          </ModalContainer>
        ): null
      }
      <CaskSearch />
    </div>
  );
};