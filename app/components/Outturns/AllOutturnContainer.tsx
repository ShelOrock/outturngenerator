import * as React from 'react';
const { useState, useEffect } = React;
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../utils';

import OutturnCard from './OutturnCard';
import ButtonManager from '../Button/ButtonManager';
import * as StyledComponents from '../styledcomponents/index';
const {
  StyledOutturn: { AllOutturnsContainer },
  StyledButton: {
    ButtonContainer,
    Button,
  }
} = StyledComponents;

import * as actions from '../../redux/actions';
const { 
  activeCaskActions: { resetActiveCask },
  markOutturnActions: { resetMarkedOutturns },
  modalActions: { setModal }
} = actions;

import { deleteManyOutturnsModalProps, createOutturnModalProps } from '../../modalProps';
import { createModalButton } from '../../buttonProps';

import { Outturn } from '../..//types/index'

export default () => {

  const dispatch = useDispatch();
  const [ showMore, setShowMore ] = useState(5);
  const { allOutturns, markedOutturns, isLoading } = useTypedSelector(state => state);

  useEffect(() => {
    dispatch(resetActiveCask());
    dispatch(setModal({}))
    dispatch(resetMarkedOutturns());
  }, []);

  return (
    <div>
      <ButtonManager props={ createModalButton('X', deleteManyOutturnsModalProps(markedOutturns)) } />
      <AllOutturnsContainer>
        <ButtonManager props={ createModalButton('+', createOutturnModalProps()) } />
        {
          allOutturns.length
          ? (allOutturns.slice(0, showMore) as Outturn[]).map((outturn, idx) => <OutturnCard key={ idx } outturn= { outturn } />)
          : null
        }
      </AllOutturnsContainer>
      <ButtonContainer>
        {
          showMore < allOutturns.length
          ? <Button variant='secondary' disabled={ !!isLoading } onClick={ () => setShowMore(showMore + 6) }>Show More</Button>
          : null
        }
      </ButtonContainer>
    </div>
  );
};