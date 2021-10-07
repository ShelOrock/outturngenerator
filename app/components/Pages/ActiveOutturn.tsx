import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import useReorderCasks from '../../hooks';
import { truncateText, useTypedSelector } from '../../utils';
import { DragDropContext } from 'react-beautiful-dnd';

import CasksTemplate from '../Templates/Casks';
import { CaskListMolecules } from '../Molecules';
import { ActiveCask } from '../Organisms';
import GridCard from '../Organisms/GridCard';
import { markCaskActions, modalActions } from '../../redux/actions';
import { activeCaskThunks, activeOutturnThunks, allCasksThunks } from '../../redux/thunks';

import {
  GenericComponentProps,
  InputOnChangeType,
  ButtonOnClickType,
  ParamTypes,
} from '../../types';
import List from '../Organisms/List';

import { DragAndDrop } from '../Atoms';
import PageHeader from '../Organisms/PageHeader';

interface ComponentProps extends GenericComponentProps {};

const ActiveOutturnPage: React.FC<ComponentProps> = (props) => {

  const dispatch = useDispatch();
  const { outturnId } = useParams<ParamTypes>();

  const {
    allCasks,
    activeCask,
    markedCasks,
    activeOutturn,
    activeUser,
  } = useTypedSelector(state => state);

  const {
    currentCaskOrder,
    isEdited,
    onDragEnd
} = useReorderCasks(allCasks);

  useEffect(() => {
    dispatch(markCaskActions.resetMarkedCasks());
    dispatch(activeOutturnThunks.getActiveOutturn(outturnId))
  }, []);

  const handleMarkCask: InputOnChangeType = e => {
    if(markedCasks.includes(e.target.name)) {
      dispatch(markCaskActions.unmarkCask(e.target.name));
      return;
    };
    dispatch(markCaskActions.markCask(e.target.name));
  };

  const handleMarkAllCasks: InputOnChangeType = () => {
    if(markedCasks.length === allCasks.length) {
      dispatch(markCaskActions.unmarkAllCasks());
      return;
    };
    dispatch(markCaskActions.markAllCasks(allCasks.map(cask => cask.id)));
  };

  const generateOutturn: ButtonOnClickType = () => {};

  return (
    <CasksTemplate
      header={
        <PageHeader
          to={ '/' }
          label={ '< Back' }
          title={ `${ activeOutturn.name }`}
          primaryAction={{
            onClick: () => dispatch(modalActions.setModal({
              heading: 'Creating New Cask',
              state: {
                heading: '',
                subheading: '',
                description: '',
              },
              primaryAction: {
                text: 'Create Cask',
                onClick: () => dispatch(allCasksThunks.addNewCask({
                  activeOutturnId: activeOutturn.id,
                  casks: activeOutturn.casks,
                  caskPosition: activeOutturn.casks.length
                }))
              },
              secondaryAction: {
                text: 'Cancel',
                onClick: () => dispatch(modalActions.resetModal());
              }
            })),
            text: '+ Create Cask',
          }}
        />
      }
        // <CaskListMolecules.Toolbar
        //   casks={ allCasks }
        //   markedCasks={ markedCasks }
        //   outturnId={ activeOutturn.id }
        //   isEdited={ isEdited }
        //   userType={ activeUser.userType }
        //   handleMarkAllCasks={ handleMarkAllCasks }
        //   handleSaveCasks={ allCasksThunks.editManyCasks }
        //   dispatch={ dispatch }
        // />
      sidebar={
        <DragDropContext onDragEnd={ onDragEnd }>
          <DragAndDrop.Drop>
            <List
              listData={ currentCaskOrder }
              renderData={ (cask, index) => (
                <DragAndDrop.Drag
                  key={ cask.id }
                  id={ cask.id }
                  index={ index }
                >
                  <GridCard
                    color={ cask.flavourProfile }
                    cardAction={ () => dispatch(activeCaskThunks.getActiveCask(cask.id)) }                    
                    heading={ `Cask no. ${ cask.caskNumber }` }
                    subheading={ truncateText(cask.name, 20) }
                    primaryAction={{
                      onClick: () => {}, //TODO
                      text: 'Edit'  
                    }}
                    secondaryAction={{
                      onClick: () => {}, //TODO
                      text: 'Delete'
                    }}
                  />
                </DragAndDrop.Drag>
                ) }
              />
            </DragAndDrop.Drop>
          </DragDropContext>
      }
      action={ <CaskListMolecules.Actions
        onClick={ () => generateOutturn() }
      /> }
      activeContent={ <ActiveCask
        cask={ activeCask }
        userType={ activeUser.userType }
        deleteCask={ () => dispatch(allCasksThunks.deleteCask(activeCask.id)) }
      /> }
    />
  );
};

export default ActiveOutturnPage;
