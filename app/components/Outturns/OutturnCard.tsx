import * as React from 'react';
import { useDispatch } from 'react-redux';
import { truncateText, useTypedSelector } from '../../utils';

import * as StyledComponents from '../styledcomponents/index';
const {
  StyledType: { Header, Body },
  StyledButton: { SmallButton },
  StyledOutturn: {
    OutturnCardContainer,
    OutturnCardImage,
    OutturnCardText
  },
  StyledDiv: { Row },
  StyledLink: { LinkDiv }
} = StyledComponents;

import * as actions from '../../redux/actions';
const {
  markOutturnActions: { markOutturn, unmarkOutturn },
  modalActions: { setModal }
} = actions;

import { deleteOutturnModalProps } from '../../modalProps'

import { OutturnCard, InputOnChangeType } from '../../types/index';

export default ({ outturn }: OutturnCard) => {

  const dispatch = useDispatch();
  const { isLoading, markedOutturns, activeOutturn } = useTypedSelector(state => state);
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
        <SmallButton variant='secondary' disabled={ !!isLoading } onClick={ () => dispatch(setModal(deleteOutturnModalProps(outturn, activeOutturn.id))) }>X</SmallButton>
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