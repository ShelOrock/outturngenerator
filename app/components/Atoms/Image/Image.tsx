import React from 'react';

import { GenericComponentProps } from '../../../types';

import { StyledImage } from '../../styledcomponents';

interface ComponentProps extends GenericComponentProps {
  src: string;
};

const Image: React.FC<ComponentProps> = ({ src = '' }) => <StyledImage.Image src={ src } />;

export default Image;
