import React from 'react';

import { GenericComponentProps } from '../../../types';

import { StyledModal } from '../../styledcomponents';

interface ComponentProps extends GenericComponentProps {};

export default ({ children }: ComponentProps): JSX.Element => <StyledModal.Modal>{ children }</StyledModal.Modal>;
