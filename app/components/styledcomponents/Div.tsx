import styled, { css } from 'styled-components';

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
  margin: 4rem 6rem 0;
`;

const RowsAndColumns = css<DivProps>`
  display: flex;
  justify-content: ${ ({ justifyContent }) => justifyContent };
  align-items: ${ ({ alignItems }) => alignItems };
`;

export const Row = styled.div`
  ${ RowsAndColumns }
  width: ${ props => props.width || 'auto' };
`;

export const Column = styled.div`
  ${ RowsAndColumns }
  flex-direction: column;
`;