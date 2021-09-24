import React from 'react';

import { GenericComponentProps } from '../../../types';

import { StyledList } from '../../styledcomponents';

interface ComponentProps extends GenericComponentProps {};

const CardList: React.FC<ComponentProps> = ({ children }) => <StyledList.CardList>{ children }</StyledList.CardList>;

export default CardList;
