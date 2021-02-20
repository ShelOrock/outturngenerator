import * as React from 'react';
const { useState, useEffect } = React;
import { useTypedSelector } from '../../utils';

import CaskSearch from '../CaskSearch/CaskSearch';
import ButtonManager from '../Button/ButtonManager';
import * as StyledComponents from '../styledcomponents/index';
const { 
  StyledType: { Header, Body },
  StyledDiv: { Column, Row },
  StyledForm: {
    InputModule,
    InputLabel,
    InputField
  },
  StyledModal: { ModalContainer }
} = StyledComponents;

export default () => {

  const { modal } = useTypedSelector(state => state);
  const [ localModalState, setLocalModalState ] = useState({ ...modal.stateShape })

  useEffect(() => setLocalModalState({ ...modal.stateShape }), [modal])

  return (
    <div>
      {
        Object.keys(modal).length 
        ? (
          <ModalContainer>
            { modal.modalHeader ? <Header>{ modal.modalHeader }</Header> : null }
            {
              modal.inputModules
              && modal.inputModules.length
              && localModalState
              && Object.keys(localModalState)
              && modal.confirmButton
              && modal.cancelButton
              ? (
                modal.inputModules.map(({ inputText, label }, idx) => {
                  let stateKey = Object.keys(localModalState)[idx]
                  return (
                    <div key={ idx }>
                      <Column alignItems='center'>
                        <Body>{ inputText }</Body>
                        <InputModule>
                          <InputLabel>{ label }</InputLabel>
                          <InputField
                            type='text'
                            name={ stateKey }
                            value={ localModalState[stateKey] || '' }
                            onChange={ ( { target: { name, value } } ) => setLocalModalState({ ...localModalState, [name]: value }) }/>
                        </InputModule>
                      </Column>
                    </div>
                  );
                })
              ) : null
            }
            <Row>
              <ButtonManager props={ { ...modal.confirmButton, arguments: [ ...modal.confirmButton.arguments, localModalState ] } }/>
              <ButtonManager props={ modal.cancelButton } />
            </Row>
          </ModalContainer>
        ): null
      }
      <CaskSearch />
    </div>
  );
};