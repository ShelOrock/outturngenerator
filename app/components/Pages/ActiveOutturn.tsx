import React from 'react';
const { useState } = React;
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../utils';

import ActiveOutturnTemplate from '../Templates/ActiveOutturn';

import { GenericComponentProps } from '../../types';

interface ComponentProps extends GenericComponentProps {};

const ActiveOutturn: React.FC<ComponentProps> = () => {

  const dispatch = useDispatch();

  const {
    allCasks,
    activeCask,
    markedCasks,
    activeOutturn,
    activeUser,
  } = useTypedSelector(state => state);

  const [ localCaskOrder, setLocalCaskOrder ] = useState(allCasks);
  const [ isEdited, setIsEdited ] = useState(false);

  return (
    <ActiveOutturnTemplate
      casks={ allCasks }
      cask={ activeCask }
      localCaskOrder={ localCaskOrder }
      markedCasks={ markedCasks }
      outturnId={ activeOutturn.id }
      isEdited={ isEdited }
      user={ activeUser }
      onCheck={ () => {} }
      onDragEnd={ () => {} }
      onClick={ () => {} }
      dispatch={ dispatch }
    />
  );
};

export default ActiveOutturn;
