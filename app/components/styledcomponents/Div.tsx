import styled, { css } from 'styled-components';

interface DivProps {
  alignItems?: string;
  justifyContent?: string;
  flexWrap?: string;
  flexGrow?: string;
  width?: string;
}

interface PaddedDivProps {
  paddingTop?: string;
  paddingRight?: string;
  paddingBottom?: string;
  paddingLeft?: string;
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
  flex-grow: ${ ({ flexGrow }) => flexGrow || '0' };  
  width: ${ ({ width }) => width || 'auto' };
`;

export const Row = styled.div`
  ${ RowsAndColumns }
`;

export const Column = styled.div`
  ${ RowsAndColumns }
  flex-direction: column;
`;

export const HorizontalRule = styled.hr`
  width: 100%;
  color: ${ ({ theme: { colors } }) => colors.lightgray }
`

export const PaddedDiv = styled.div<PaddedDivProps>`
  padding: ${ (props) => `${ props.paddingTop || 0 } ${ props.paddingRight || 0 } ${ props.paddingBottom || 0 } ${ props.paddingLeft || 0 }` }
`