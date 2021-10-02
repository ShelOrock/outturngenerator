import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useReorderCasks from '../../hooks';
import { truncateText, useTypedSelector } from '../../utils';
import {
  DragDropContext,
  Droppable,
  DroppableProvided,
  Draggable,
  DraggableProvided
} from 'react-beautiful-dnd';

import CasksTemplate from '../Templates/Casks';
import { CaskListMolecules } from '../Molecules';
import { ActiveCask } from '../Organisms';
import GridCard from '../Organisms/GridCard';
import { markCaskActions, modalActions } from '../../redux/actions';
import { activeCaskThunks, allCasksThunks } from '../../redux/thunks';

import {
  GenericComponentProps,
  InputOnChangeType,
  ButtonOnClickType,
} from '../../types';
import List from '../Organisms/List';

import { Chip } from '../Atoms';
import PageHeader from '../Organisms/PageHeader';

interface ComponentProps extends GenericComponentProps {};

const ActiveOutturnPage: React.FC<ComponentProps> = (props) => {

  const dispatch = useDispatch();

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
    dispatch(markCaskActions.resetMarkedCasks())
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
            dispatch,
            onClick: modalActions.setModal(),
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
          <Droppable droppableId='droppable'>
            { (provided: DroppableProvided) => (
                <div
                ref={provided.innerRef}
                { ...provided.droppableProps}
                >
              <List
                listData={ currentCaskOrder }
                renderData={ (cask, index) => (
                  <Draggable
                    key={ cask.id }
                    draggableId={ cask.id }
                    index={ index }
                  >
                    { (provided: DraggableProvided) => (

                      <GridCard
                      {...provided.draggableProps} {...provided.dragHandleProps}
                      ref={ provided.innerRef }

                        color={ cask.flavourProfile }
                        cardAction={{
                          dispatch,
                          onClick: activeCaskThunks.getActiveCask(cask.id),
                        }}
                        heading={ `Cask no. ${ cask.caskNumber }` }
                        subheading={ cask.name }
                        body={ truncateText(cask.description, 64) }
                        chips={
                          <Chip.Chip
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
                  </Draggable>
                ) }
              />
           </div> ) }
            </Droppable>
          </DragDropContext>
      }
      action={ <CaskListMolecules.Actions
        onClick={ () => generateOutturn() }
      /> }
      activeContent={ <ActiveCask
        cask={ activeCask }
        userType={ activeUser.userType }
        dispatch={ dispatch }
        deleteCask={ () => allCasksThunks.deleteCask(activeCask.id) }
      /> }
    />
  );
};

export default ActiveOutturnPage;
