import React from 'react';

import { ActiveCaskContainers } from '../../Containers';
import { ActiveCaskMolecules } from '../../Molecules';

import { GenericComponentProps, Cask } from '../../../types';

interface ComponentProps extends GenericComponentProps {
  cask: Cask
};

const ActiveCaskBody: React.FC<ComponentProps> = ({
  cask
}) => (
  <ActiveCaskContainers.Body>
    <ActiveCaskContainers.BodyModuleGroup>
      <ActiveCaskMolecules.BodyModule
        title={ 'Age' }
        body={ cask.age }
      />
      <ActiveCaskMolecules.BodyModule
        title={ 'Date distilled' }
        body={ cask.date }
      />
    </ActiveCaskContainers.BodyModuleGroup>
    <ActiveCaskMolecules.BodyModule
      title={ 'Region' }
      body={ cask.region }
    />
    <ActiveCaskMolecules.BodyModule
      title={ 'Cask type' }
      body={ cask.caskType }
    />
    <ActiveCaskContainers.BodyModuleGroup>
      <ActiveCaskMolecules.BodyModule
        title={ 'Outturn' }
        body={ cask.bottleOutturn }
      />
      <ActiveCaskMolecules.BodyModule
        title={ 'Allocation' }
        body={ cask.allocation }
      />
    </ActiveCaskContainers.BodyModuleGroup>
    <ActiveCaskMolecules.BodyModule
      title={ 'Tasting Note' }
      body={ cask.description }
    />
  </ActiveCaskContainers.Body>
);

export default ActiveCaskBody;
