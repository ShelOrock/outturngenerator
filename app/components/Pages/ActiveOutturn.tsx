import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { DragDropContext } from 'react-beautiful-dnd';
import {
  useForm,
  useModal,
  useCheckbox,
  useReorderList
} from '../../hooks';
import { truncateText, useTypedSelector } from '../../utils';

import CasksTemplate from '../Templates/Casks';
import { CaskListMolecules } from '../Molecules';
import { ActiveCask } from '../Organisms';
import GridCard from '../Organisms/GridCard';
import { modalActions } from '../../redux/actions';
import { activeCaskThunks, activeOutturnThunks, allCasksThunks } from '../../redux/thunks';

import {
  GenericComponentProps,
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
    activeOutturn,
    activeUser,
    modal
  } = useTypedSelector(state => state);

//   const {
//     formValues,
//     formErrors,
//     containsErrors,
//     handleOnChange
//   } = useForm(initialFormState);

  const {
    currentCaskOrder,
    isEdited,
    onDragEnd
  } = useReorderList(allCasks);

  const {
    marked,
    handleMarkCask,
    handleMarkAllCasks
  } = useCheckbox(allCasks);

  useEffect(() => {
    dispatch(activeOutturnThunks.getActiveOutturn(outturnId))
  }, []);

  const generateOutturn: ButtonOnClickType = () => {};

  return (
    <CasksTemplate
      header={
        <PageHeader
          to={ '/' }
          label={ '< Back' }
          title={ activeOutturn.name }
          primaryAction={{
            text: '+ Create Cask',
            onClick: () => {}
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
                    name={ cask.id }
                    checked={ marked.includes(cask.id) }
                    onChange={ handleMarkCask }
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
