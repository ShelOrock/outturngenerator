import styled, { css } from 'styled-components';

interface DivProps {
  alignItems?: string;
  justifyContent?: string;
  flexWrap?: string;
  width?: string;
}

export const MainDiv = styled.div`
  box-shadow: 0px 8px 15px #D5D5D5;
  background: white;
`;

const RowsAndColumns = css<DivProps>`
  display: flex;
  justify-content: ${ ({ justifyContent }) => justifyContent };
  align-items: ${ ({ alignItems }) => alignItems };
  flex-wrap: ${ ({ flexWrap }) => flexWrap || 'nowrap' };
`;

export const Row = styled.div`
  ${ RowsAndColumns }
  width: ${ ({ width }) => width || 'auto' };
`;

export const Column = styled.div`
  ${ RowsAndColumns }
  flex-direction: column;
`;