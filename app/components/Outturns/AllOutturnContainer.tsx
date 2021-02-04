import * as React from 'react';
const { useState, useEffect } = React;
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../utils';

import OutturnCard from './OutturnCard';
import * as StyledComponents from '../styledcomponents/index';
const {
  StyledOutturn: { AllOutturnsContainer, OutturnCardContainer },
  StyledButton: {
    ButtonContainer,
    Button,
    SmallButton,
    ButtonDiv,
  }
} = StyledComponents;

import * as actions from '../../redux/actions';
const { 
  activeCaskActions: { resetActiveCask },
  markOutturnActions: { resetMarkedOutturns },
  modalActions: { setModal }
} = actions;

import { deleteManyOutturnsModalProps, createOutturnModalProps } from '../../modalProps';

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
      <SmallButton variant='secondary' disabled={ !!isLoading || !markedOutturns.length } onClick={ () => dispatch(setModal(deleteManyOutturnsModalProps(markedOutturns))) }>X</SmallButton>
      <AllOutturnsContainer>
        <OutturnCardContainer onClick={ () => dispatch(setModal(createOutturnModalProps())) }>
          <ButtonDiv>+</ButtonDiv>
        </OutturnCardContainer>
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