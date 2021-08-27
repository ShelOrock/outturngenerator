import * as React from 'react';
import { useTypedSelector } from '../../../../utils';

import ButtonManager from '../../../Button/ButtonManager';

export default ({ showMore, setShowMore }) => {

  const { allCasks } = useTypedSelector(state => state);

  interface ShowMoreOnClickPropTypes {
    onClickFunction: React.Dispatch<React.SetStateAction<number>>;
    arguments: any[];
    text: string;
  };

  interface ShowMoreButtonPropTypes {
    dispatchToStore: boolean;
    size: string;
    variant: string;
    onClick: ShowMoreOnClickPropTypes;
  };

  const showMoreOnClickProps: ShowMoreOnClickPropTypes = {
    onClickFunction: setShowMore,
    arguments: [ showMore + 6 ],
    text: 'Show More',
  };

  const showMoreButtonProps: ShowMoreButtonPropTypes = {
    dispatchToStore: false,
    onClick: showMoreOnClickProps,
    size: "default",
    variant: "secondary",
  };

  return showMore < allCasks.length && <ButtonManager { ...showMoreButtonProps }/>
}