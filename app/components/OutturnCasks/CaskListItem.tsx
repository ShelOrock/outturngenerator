import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector, assignColorPill } from '../../utils';

import ButtonManager from '../Button/ButtonManager';
import * as StyledComponents from '../styledcomponents/index';
const {
  StyledType: { Subheader, Body },
  StyledDiv: { Row, Column },
  StyledCask: {
    CaskListItemDiv,
    CaskListItemButton,
    CaskListItemFlavourPill
  }
} = StyledComponents;

import * as actions from '../../redux/actions';
const { markCaskActions: { markCask, unmarkCask } } = actions

import * as thunks from '../../redux/thunks';
const { activeCaskThunks: { getActiveCask } } = thunks

import { createModalButton } from '../../buttonProps'
import { deleteCaskModal } from '../../modalProps';

import { InputOnChangeType } from '../../types/index';

export default (props: any) => {

  const dispatch = useDispatch();

  const {
    markedCasks,
    activeOutturn,
    activeCask
  } = useTypedSelector(state => state);

  const {
    id,
    name,
    caskNumber,
    flavourProfile
  } = props.cask;

  const handleOnCheck: InputOnChangeType = e => {
    if(markedCasks.includes(e.target.name)) dispatch(unmarkCask(e.target.name))
    else dispatch(markCask(e.target.name))
  }
  
  return (

        <CaskListItemDiv flavourProfile= { assignColorPill(flavourProfile ) } ref={ props.innerRef }>
          <Row alignItems='center'>
            <Row alignItems='center' justifyContent='center'>
              <Column>
                <input
                  type='checkbox'
                  name={ id }
                  checked={ markedCasks.includes(id) }
                  onChange={ handleOnCheck }
                />
                <CaskListItemFlavourPill flavourProfile={ assignColorPill(flavourProfile) }/>
              </Column>
            </Row>
            <Row justifyContent='space-between' width='100%'>
              <CaskListItemButton flavourProfile={ assignColorPill(flavourProfile) } onClick={ () => dispatch(getActiveCask(id)) }>
                <Column>
                  <Subheader textAlign='left'>{ caskNumber ? `Cask No. ${ caskNumber }` : 'Untitled Cask' }</Subheader>
                  <Body>{ name }</Body>
                </Column>
              </CaskListItemButton>
              <ButtonManager props={ createModalButton('X', deleteCaskModal(activeCask, props.cask, activeOutturn.id)) } />
            </Row>
          </Row>
        </CaskListItemDiv>
  )
}