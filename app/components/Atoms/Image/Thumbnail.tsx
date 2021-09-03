import React from 'react';

import { GenericComponentProps } from '../../../types';

import { StyledImage } from '../../styledcomponents';

interface ComponentProps extends GenericComponentProps {
  src: string;
};

const Thumbnail: React.FC<ComponentProps> = ({ src = '' }) => <StyledImage.Thumbnail src={ src } />;

export default Thumbnail;
