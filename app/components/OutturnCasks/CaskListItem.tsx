import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../utils';

import { InputOnChangeType } from '../../types/index';

import ButtonManager from '../Button/ButtonManager';
import * as StyledComponents from '../styledcomponents/index';
const {
  StyledType: { Subheader, Body },
  StyledDiv: { Row, Column },
  StyledNavigation: { LinkButton },
  StyledForm: { Checkbox },
  StyledCask: { ListItem, CaskListItemButton, FlavourPill }
} = StyledComponents;

import * as actions from "../../redux/actions";
const {
  markCaskActions: { markCask, unmarkCask },
} = actions;

import * as thunks from "../../redux/thunks";
const {
  activeCaskThunks: { getActiveCask },
} = thunks;

import { createModalButton } from "../../buttonProps";
import { deleteCaskModal } from "../../modalProps";

export default ({ cask, sortMethod }: any) => {

  const dispatch = useDispatch();  

  const { markedCasks, activeOutturn, activeCask } = useTypedSelector((state) => state);

  const handleOnCheck: InputOnChangeType = (e) => {
    if (markedCasks.includes(e.target.name)) dispatch(unmarkCask(e.target.name));
    else dispatch(markCask(e.target.name));
  };

  return (
    <ListItem flavourProfile={ cask.flavourProfile }>
      <Column>
        <Row alignItems="center" justifyContent="space-between">
          <Checkbox
            type="checkbox"
            name={cask.id}
            checked={ markedCasks.includes(cask.id) }
            onChange={ handleOnCheck }
          />
          <Column alignItems='flex-end'>
          <LinkButton to={ `/edit/${ cask.id }/step1` }>Edit</LinkButton>
          <ButtonManager
            size="small"
            variant="tertiary"
            onClickFunctionProps={createModalButton(
              "X Delete",
              deleteCaskModal(
                activeCask,
                cask,
                activeOutturn.id,
                sortMethod
              )
            )}
          />
          </Column>
        </Row>
        <Row>
          <FlavourPill flavourProfile={ cask.flavourProfile }/>
          <CaskListItemButton onClick={() => dispatch(getActiveCask(cask.id)) }>
            <Column>
              <Subheader> {cask.caskNumber ? `Cask No. ${cask.caskNumber}` : "Untitled Cask"}</Subheader>
              <Body>{cask.name}</Body>
            </Column>
          </CaskListItemButton>
        </Row>
      </Column>
    </ListItem>
  )
}