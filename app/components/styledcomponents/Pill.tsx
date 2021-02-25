import styled, { css } from 'styled-components'

interface FlavourPillPropTypes {
  flavourProfile?: string;
}

export const FlavourPillStyles = css<FlavourPillPropTypes>`
  background ${ ({ flavourProfile, theme: { colors } }) => colors[flavourProfile]}
`;

export const FlavourPill = styled.div<FlavourPillPropTypes>`
  ${ FlavourPillStyles }
  color: white;
  width: 20px;
  padding: 35px 0;
`

export const SmallFlavourPill = styled.div`
  ${ FlavourPillStyles }
`;
