import * as React from 'react';
const { useState, useEffect } = React;
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../utils';

import * as StyledComponents from '../styledcomponents/index';
const { 
  StyledType: { Header, Subheader },
  StyledDiv: { Column, Row },
  StyledButton: { Button },
  StyledForm: {
    InputModule,
    InputLabel,
    InputField
  },
  StyledModal: { ModalContainer }
} = StyledComponents;

import * as actions from '../../redux/actions';
const { modalActions: { setModal } } = actions;

export default () => {

  const dispatch = useDispatch();

  const { modal } = useTypedSelector(state => state);
  const [ localModalState, setLocalModalState ] = useState({ ...modal.stateShape })

  useEffect(() => setLocalModalState({ ...modal.stateShape}), [modal])

  const localModalButton = modal.buttonModule;

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
              && localModalButton
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
              <Button variant={ localModalButton.type === 'CREATE' ? 'primary' : 'secondary' } onClick={ () => dispatch(localModalButton.buttonOnClickFunction(...localModalButton.arguments, localModalState)) }>{ modal.buttonModule.buttonText }</Button>
              <Button variant={ localModalButton.type === 'CREATE' ? 'secondary' : 'primary' } onClick={ () => dispatch(setModal({})) }>Cancel</Button>
            </Row>
          </ModalContainer>
        ): null
      }
    </div>
  );
};