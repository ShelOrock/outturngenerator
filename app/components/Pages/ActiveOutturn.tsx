import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useReorderCasks from '../../hooks';
import { useTypedSelector } from '../../utils';

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

import { DragAndDrop } from '../Atoms';
import { Chip } from '../Atoms';
import PageHeader from '../Organisms/PageHeader';

interface ComponentProps extends GenericComponentProps {};

const ActiveOutturnPage: React.FC<ComponentProps> = () => {

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
        <DragAndDrop.DragAndDrop onDragEnd={ onDragEnd }>
          <DragAndDrop.Drop>
          <List
            listData={ currentCaskOrder }
            renderData={ (cask, index) => (
              <DragAndDrop.Drag
                id={ cask.id }
                index={ index }
              >
                {
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
                    chips={ <Chip.Chip color={ cask.flavourProfile }>{ cask.flavourProfile }</Chip.Chip> }
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
                }
              </DragAndDrop.Drag>
            ) }
          />
          </DragAndDrop.Drop>
        </DragAndDrop.DragAndDrop>

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
