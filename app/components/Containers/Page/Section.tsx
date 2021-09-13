import React from 'react';

import { StyledPage } from '../../styledcomponents';

import { GenericComponentProps } from '../../../types';

interface ComponentProps extends GenericComponentProps {};

const Section: React.FC<ComponentProps> = ({ children }) => <StyledPage.Section>{ children }</StyledPage.Section>;

export default Section;