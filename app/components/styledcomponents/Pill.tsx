import styled, { css } from 'styled-components'

interface FlavourPillPropTypes {
  flavourProfile?: string;
}

interface OnlineIconPropTypes {
  variant?: string;
}

interface ChipPropTypes {
  color: string;
}

export const Chip = styled.div<ChipPropTypes>`
height: 32px;
padding: 4px 12px;
margin: 1rem 0 0;
background ${ ({ color, theme }) => theme.colors.flavourProfiles[color] }
color: white;
`;

export const PillStyles = css<FlavourPillPropTypes>`
  background ${ ({ flavourProfile, theme: { colors } }) => colors.flavourProfiles[flavourProfile] || colors.flavourProfiles.other }
`;

export const LargePill = styled.div`
  ${ PillStyles };
  padding: 0.5rem 0rem;
  color: white;
  margin: 1rem 0 0;
  width: 100%;
`

export const SmallPill = styled.div`
  ${ PillStyles };
  color: white;
  text-align: center;
  padding: 0.5rem 1rem;
  max-width: 200px;
  border-radius: 100px;
  margin: 0.5rem 0;
`


export const OnlineIcon = styled.div<OnlineIconPropTypes>`
  background-color: ${ ({ variant, theme: { colors } }) => colors[variant] };
  width: 12px;
  height: 12px;
  border-radius: 100%;
`;
