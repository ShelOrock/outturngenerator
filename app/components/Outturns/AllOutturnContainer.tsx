import * as React from 'react';
const { useState, useEffect } = React;
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../utils';

import PageHeader from '../PageHeader/PageHeader';
import SubNavigation from '../Navigation/SubNavigation';
import OutturnCard from './OutturnCard';
import * as StyledComponents from '../styledcomponents/index';
const {
  StyledOutturn: { AllOutturnsContainer },
  StyledButton: {
    ButtonContainer,
    Button,
  },
  StyledDiv: { Column },
} = StyledComponents;

import * as actions from '../../redux/actions';
const { 
  activeCaskActions: { resetActiveCask },
  markOutturnActions: { resetMarkedOutturns },
  modalActions: { setModal }
} = actions;

import { deleteManyOutturnsModalProps, createOutturnModalProps } from '../../modalProps';
import { createModalButton } from '../../buttonProps';

export default () => {

  const dispatch = useDispatch();
  const [ showMore, setShowMore ] = useState(6);
  const { allOutturns, markedOutturns, isLoading } = useTypedSelector(state => state);

  useEffect(() => {
    dispatch(resetActiveCask());
    dispatch(setModal({}))
    dispatch(resetMarkedOutturns());
  }, []);

  return (
    <div>
      <Column>
        <SubNavigation link={'/'} destination=''/>
          <PageHeader
            pageTitle='All Projects'
            addButtonProps={ { onClickProps: createModalButton('+ New Project', createOutturnModalProps()) } }
            deleteButtonProps={ {
              variant: 'tertiary',
              disabled: !markedOutturns.length,
              onClickProps: createModalButton('X Delete Marked Outturns', deleteManyOutturnsModalProps(markedOutturns))
            } }
          />
      </Column>
      <AllOutturnsContainer>
        {
          allOutturns.length
          ? (allOutturns.slice(0, showMore)).map(outturn => <OutturnCard key={ outturn.id } outturn= { outturn } />)
          : null
        }
      </AllOutturnsContainer>
      <ButtonContainer>
        {
          showMore < allOutturns.length
          ? <Button size='default' variant='secondary' disabled={ !!isLoading } onClick={ () => setShowMore(showMore + 6) }>Show More</Button>
          : null
        }
      </ButtonContainer>
    </div>
  );
};