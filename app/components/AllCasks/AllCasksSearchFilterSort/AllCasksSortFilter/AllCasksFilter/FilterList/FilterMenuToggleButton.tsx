import * as React from 'react';

// import ButtonManager from '../../../../../Button/ButtonManager';

export default ({ filterMenuIsOpen, setFilterMenuIsOpen}) => {

  interface SetIsOpenOnClickPropTypes {
    onClickFunction: React.Dispatch<React.SetStateAction<boolean>>,
    arguments: any[];
    text: string;
  };

  interface SetIsOpenButtonPropTypes {
    dispatchToStore: boolean;
    variant: string;
    size: string;
    onClick: SetIsOpenOnClickPropTypes;
  };

  const evaluateFilterMenuIsOpen: string = filterMenuIsOpen ? 'Collapse Filters' : 'Show Filters';

  const setIsOpenOnClickProps: SetIsOpenOnClickPropTypes = {
    onClickFunction: setFilterMenuIsOpen,
    arguments: [ !filterMenuIsOpen ],
    text: evaluateFilterMenuIsOpen
  }

  const setIsOpenButtonProps: SetIsOpenButtonPropTypes = {
    dispatchToStore: false,
    size: "default",
    variant: "default",
    onClick: setIsOpenOnClickProps,
  };

  return <></>//<ButtonManager { ...setIsOpenButtonProps } />;
};