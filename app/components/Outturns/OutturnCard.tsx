import * as React from 'react';
import { useDispatch } from 'react-redux';
import { truncateText, useTypedSelector } from '../../utils';

import ButtonManager from '../Button/ButtonManager';
import * as StyledComponents from '../styledcomponents/index';
const {
  StyledType: { Header, Body },
  StyledCard: {
    Card,
    CardImage,
  },
  StyledDiv: { Row },
  StyledLink: { LinkDiv },
  StyledForm: { Checkbox }
} = StyledComponents;

import * as actions from '../../redux/actions';
const { markOutturnActions: { markOutturn, unmarkOutturn } } = actions;

import { deleteOutturnModalProps } from '../../modalProps';
import { createModalButton } from '../../buttonProps';

import { OutturnCard, InputOnChangeType } from '../../types/index';

export default ({ outturn, sortMethod }: OutturnCard) => {

  const dispatch = useDispatch();
  const { markedOutturns, activeOutturn } = useTypedSelector(state => state);
  const { id, name, description } = outturn

  const handleOnCheck: InputOnChangeType = e => {
    if(markedOutturns.includes(e.target.name)) dispatch(unmarkOutturn(e.target.name))
    else dispatch(markOutturn(e.target.name));
  }

  const checkOutturnCheckboxProps = {
    type: 'checkbox',
    name: id,
    checked: markedOutturns.includes(id),
    onChange: handleOnCheck
  }

  const deleteOutturnButtonProps = {
    size: 'small',
    variant: 'tertiary',
    onClickFunctionProps: createModalButton(
      'X', deleteOutturnModalProps(
        outturn,
        activeOutturn.id,
        sortMethod
      )
    )
  }

  return (
    <Card>
        <Row justifyContent='space-between' alignItems='center'>
          <Checkbox { ...checkOutturnCheckboxProps }/>
          <ButtonManager { ...deleteOutturnButtonProps } />
        </Row>
        <LinkDiv to={ `/outturn/${ id }`}>
          <Header>{ name }</Header>
          <Body>{ description ? truncateText(description) : null }</Body>
          <CardImage>
            Insert image here.
          </CardImage>
        </LinkDiv>
    </Card>
  )
};