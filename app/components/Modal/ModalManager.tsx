import * as React from 'react';
const { useState, useEffect } = React;
import { useTypedSelector } from '../../utils';

import * as StyledComponents from '../styledcomponents/index';
import ButtonManager from '../Button/ButtonManager';
const { 
  StyledType: { Header, Subheader },
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
              && modal.confirmButton
              ? (
                modal.inputModules.map(({ inputText, label }, idx) => {
                  let stateKey = Object.keys(localModalState)[idx]
                  return (
                    <div key={ idx }>
                      <Column alignItems='center'>
                        <Subheader>{ inputText }</Subheader>
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
              <ButtonManager props={ modal.confirmButton } />
              <ButtonManager props={ modal.cancelButton } />
            </Row>
          </ModalContainer>
        ): null
      }
    </div>
  );
};