import * as React from 'react';
import { useDispatch } from 'react-redux';
import {
  useTypedSelector,
  truncateText,
  createButton
} from '../../utils';

import ButtonManager from '../Button/ButtonManager';
import * as StyledComponents from '../styledcomponents/index';
const {
  StyledType: { Header, Body },
  StyledCard: { Card },
  StyledCask: { FlavourPill },
  StyledDiv: { PaddedDiv, Row },
  StyledLink: { LinkDiv },
  StyledForm: { Checkbox }
} = StyledComponents;

import * as actions from '../../redux/actions';
const {
  markOutturnActions: { markOutturn, unmarkOutturn },
  modalActions: { setModal }
} = actions;

import * as thunks from '../../redux/thunks';
const { outturnsThunks: { deleteOutturn } } = thunks;

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

  const deleteOutturnModalProps = {
    modalHeader: `Are you sure you want to delete ${ outturn.name }`,
    confirmButton: {
      type: 'DELETE',
      text: 'Delete',
      arguments: [ outturn.id, activeOutturn.id, sortMethod ],
      onClickFunction: deleteOutturn,
    },
  };

  const deleteOutturnButtonProps = {
    size: 'small',
    variant: 'tertiary',
    onClickFunctionProps: createButton(
      setModal,
      'X Delete',
      deleteOutturnModalProps
    )
  }

  const renderFlavourPills = () => (
    outturn
      .casks
      .slice(0, 3)
      .map((cask, idx) => (
        <FlavourPill width='300px' key={ idx } flavourProfile={ cask.flavourProfile }>{ cask.caskNumber } { cask.name }</FlavourPill>
      ))  
  )

  return (
    <Card>
      <Row justifyContent='space-between' alignItems='center'>
        <Checkbox { ...checkOutturnCheckboxProps }/>
        <ButtonManager { ...deleteOutturnButtonProps } />
      </Row>
      <LinkDiv to={ `/outturn/${ id }`}>
            <Header>{ name }</Header>
            <Body>{ description && truncateText(description) }</Body>
          { !!outturn.casks.length &&
            <PaddedDiv paddingTop='1rem' paddingRight='1rem' paddingLeft='1rem' paddingBottom='1rem'>
              { renderFlavourPills() }
              { outturn.casks.length > 3 && <Body>+ { outturn.casks.length - 3 } More</Body> }
            </PaddedDiv>
          }
      </LinkDiv>
    </Card>
  )
};