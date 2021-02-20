import * as React from 'react';
const { useState, useEffect } = React;
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../utils';

import PageHeader from '../PageHeader/PageHeader';
import SubNavigation from '../Navigation/SubNavigation';
import OutturnCard from './OutturnCard';
import ButtonManager from '../Button/ButtonManager';
import * as StyledComponents from '../styledcomponents/index';
const {
  StyledOutturn: { AllOutturnsContainer },
  StyledButton: {
    ButtonContainer,
    Button,
  },
  StyledDiv: { Row, Column },
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
        <SubNavigation link={null} destination='x'/>
        <Row justifyContent='space-between'>
          <Row alignItems='center'>
            <PageHeader pageTitle='All Projects' />
            <ButtonManager
              variant='primary'
              props={ createModalButton('+ New Project', createOutturnModalProps()) }
            />
          </Row>
          <ButtonManager
            variant='secondary'
            disabled={ !markedOutturns.length }
            props={ createModalButton('X', deleteManyOutturnsModalProps(markedOutturns)) } />
        </Row>
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