import React from 'react';

import { GenericComponentProps } from '../../../types';

import { StyledImage } from '../../styledcomponents';

interface ComponentProps extends GenericComponentProps {
  src: string;
};

const Icon: React.FC<ComponentProps> = ({ src = '' }) => <StyledImage.Icon src={ src } />;

export default Icon;
