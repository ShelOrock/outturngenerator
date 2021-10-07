import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../utils';

import CasksTemplate from '../Templates/Casks';
import List from '../Organisms/List';
import GridCard from '../Organisms/GridCard';
import { ActiveCask } from '../Organisms';
import { Chip } from '../Atoms';

import { GenericComponentProps } from '../../types';
import PageHeader from '../Organisms/PageHeader';
import { modalActions } from '../../redux/actions';
import { activeCaskThunks, allCasksThunks } from '../../redux/thunks';
import { Button } from '../Atoms';

interface ComponentProps extends GenericComponentProps {};

const CasksPage: React.FC<ComponentProps> = () => {

  const dispatch = useDispatch();

  const {
    allCasks,
    activeCask,
    activeUser
  } = useTypedSelector(state => state);

  const [ showMore, setShowMore ] = useState(12);

  return (
    <CasksTemplate
      header={ 
        <PageHeader
          to={ '/' }
          label={ '< Back' }
          title={ 'All Casks' }
          primaryAction={{
            dispatch,
            onClick: modalActions.setModal(),
            text: '+ Create Cask'
          }}

        />
      }
      sidebar={ <List
        listData={ allCasks }
        renderData={ cask => (
          <GridCard
            key={ cask.id }
            color={ cask.flavourProfile }
            cardAction={{
              dispatch,
              onClick: activeCaskThunks.getActiveCask(cask.id),
            }}
            heading={ cask.caskNumber }
            subheading={ cask.name }
            body={ cask.description }
            chips={ <Chip.Chip
              color={ cask.flavourProfile }
              text={ cask.flavourProfile }
            /> }
            primaryAction={{
              dispatch,
              onClick: () => {}, //TODO
              text: 'Edit'  
            }}
            secondaryAction={{
              dispatch,
              onClick: () => {}, //TODO
              text: 'Delete'
            }}
          />
        ) }
      /> }
      action={ showMore < allCasks.length && (
        <Button.Button
          onClick={ () => setShowMore(showMore + 6) }
          variant={ 'secondary' }
        >
          Show More
        </Button.Button>
      ) }
      activeContent={ <ActiveCask
        cask={ activeCask }
        userType={ activeUser.userType }
        deleteCask={ () => dispatch(allCasksThunks.deleteCask(activeCask.id)) }
      /> }
    />
  );
};

export default CasksPage;