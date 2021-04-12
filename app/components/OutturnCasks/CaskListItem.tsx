import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector, createButton } from '../../utils';

import { InputOnChangeType } from '../../types/index';

import ButtonManager from '../Button/ButtonManager';
import * as StyledComponents from '../styledcomponents/index';
const {
  StyledType: { Subheader, Body },
  StyledDiv: { PaddedDiv, Row, Column },
  StyledNavigation: { LinkButton },
  StyledForm: { Checkbox },
  StyledCask: { ListItem, CaskListItemButton, FlavourPill }
} = StyledComponents;

import * as actions from "../../redux/actions";
const {
  markCaskActions: { markCask, unmarkCask },
  modalActions: { setModal },
} = actions;

import * as thunks from "../../redux/thunks";
const {
  activeCaskThunks: { getActiveCask, },
  casksThunks: { deleteCask }
} = thunks;

export default ({ cask, sortMethod }: any) => {

  const dispatch = useDispatch();  

  const { markedCasks, activeOutturn, activeCask } = useTypedSelector((state) => state);

  const handleOnCheck: InputOnChangeType = (e) => {
    if (markedCasks.includes(e.target.name)) dispatch(unmarkCask(e.target.name));
    else dispatch(markCask(e.target.name));
  };

  const checkCaskCheckboxProps = {
    type: 'checkbox',
    name: cask.id,
    checked: markedCasks.includes(cask.id),
    onChange: handleOnCheck
  }

  const deleteCaskModal = {
    modalHeader: `Are you sure you want to delete ${ cask.caskNumber } ${ cask.name }`,
    confirmButton: {
      type: 'DELETE',
      text: `Delete Cask no. ${ cask.caskNumber }`,
      arguments: [ activeCask.id, cask.id, activeOutturn.id, sortMethod ],
      onClickFunction: deleteCask
    },
  }

  const deleteCaskButtonProps = {
    size: 'small',
    variant: 'tertiary',
    onClickFunctionProps: createButton(
      setModal,
      "X Delete",
      deleteCaskModal
    )
  }

  return (
    <ListItem flavourProfile={ cask.flavourProfile }>
      <Column>
        <Row alignItems="center" justifyContent="space-between">
          <Checkbox { ...checkCaskCheckboxProps }/>
          <Row alignItems='center' justifyContent='flex-end'>
            <LinkButton to={ `/edit/${ cask.id }` }>Edit</LinkButton>
            <ButtonManager { ...deleteCaskButtonProps } />
          </Row>
        </Row>
        <CaskListItemButton onClick={() => dispatch(getActiveCask(cask.id)) }>
          <Column>
            <Subheader> {cask.caskNumber ? `Cask No. ${cask.caskNumber}` : "Untitled Cask"}</Subheader>
            <Body>{cask.name}</Body>
            <PaddedDiv paddingTop='1rem' paddingRight='1rem' paddingBottom='1rem' paddingLeft='1rem'>
              <FlavourPill flavourProfile={ cask.flavourProfile }>{ cask.flavourProfile || 'Other' }</FlavourPill>
            </PaddedDiv>
          </Column>
        </CaskListItemButton>
      </Column>
    </ListItem>
  )
}