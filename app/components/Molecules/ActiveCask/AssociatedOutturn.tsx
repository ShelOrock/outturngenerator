import React from 'react';

import { ActiveCaskContainers, AssociatedOutturnContainers } from '../../Containers';
import { Type, Link } from '../../Atoms';

import { GenericComponentProps, Outturn } from '../../../types';

interface ComponentProps extends GenericComponentProps {
  outturnId: string;
  outturnName: string;
};

const AssociatedOutturn: React.FC<ComponentProps> = ({
   outturnId,
   outturnName,
}) => (
  <AssociatedOutturnContainers.Main>
    <AssociatedOutturnContainers.Content>
      <Type.Body>
        { outturnId
          ? `This cask is assigned to ${ outturnName }.`
          : `This cask is not assigned to an outturn.`
        }
      </Type.Body>
      { outturnId && <Link.LinkButton to={ `/outturn/${ outturnId }` }>Go to Outturn {'>'}</Link.LinkButton> }
    </AssociatedOutturnContainers.Content>
  </AssociatedOutturnContainers.Main>
);

export default AssociatedOutturn;
