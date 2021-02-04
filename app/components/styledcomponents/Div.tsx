import styled from 'styled-components';

interface DivProps {
  alignItems?: string;
  justifyContent?: string;
  width?: string;
}

export const BodyDiv = styled.div`
  display: flex;
`

export const MainDiv = styled.div`
  display: block;
  box-shadow: 0px 8px 15px #D5D5D5;
  background: white;
  margin: 4rem 0 0;
`;

export const Row = styled.div<DivProps>`
  display: flex;
  justify-content: ${ props => props.justifyContent };
  align-items: ${ props => props.alignItems };
  width: ${ props => props.width || 'auto' };
`;

export const Column = styled.div<DivProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${ props => props.justifyContent };
  align-items: ${ props => props.alignItems }
`;