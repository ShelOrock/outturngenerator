import * as React from 'react';
import { useDispatch } from 'react-redux';
import { truncateText, useTypedSelector } from '../../utils';

import ButtonManager from '../Button/ButtonManager';
import * as StyledComponents from '../styledcomponents/index';
const {
  StyledType: { Header, Body },
  StyledOutturn: {
    OutturnCardContainer,
    OutturnCardImage,
    OutturnCardText
  },
  StyledDiv: { Row },
  StyledLink: { LinkDiv }
} = StyledComponents;

import * as actions from '../../redux/actions';
const { markOutturnActions: { markOutturn, unmarkOutturn } } = actions;

import { deleteOutturnModalProps } from '../../modalProps';
import { createModalButton } from '../../buttonProps';

import { OutturnCard, InputOnChangeType } from '../../types/index';

export default ({ outturn }: OutturnCard) => {

  const dispatch = useDispatch();
  const { markedOutturns, activeOutturn } = useTypedSelector(state => state);
  const { id, name, description } = outturn

  const handleOnCheck: InputOnChangeType = e => {
    if(markedOutturns.includes(e.target.name)) dispatch(unmarkOutturn(e.target.name))
    else dispatch(markOutturn(e.target.name));
  }

  return (
    <OutturnCardContainer>
      <Row>
        <input
          type='checkbox'
          name={ id }
          checked={ markedOutturns.includes(id) }
          onChange={ handleOnCheck }
        />
        <ButtonManager props={ createModalButton('X', deleteOutturnModalProps(outturn, activeOutturn.id)) } />
      </Row>
      <LinkDiv to={ `/outturn/${ id }`}>
      <OutturnCardImage>
        Insert image here.
      </OutturnCardImage>
      <OutturnCardText>
        <Header textAlign='left' color='white'>{ name }</Header>
        <Body>{ description ? truncateText(description) : null }</Body>
      </OutturnCardText>
      </LinkDiv>
    </OutturnCardContainer>
  )
};