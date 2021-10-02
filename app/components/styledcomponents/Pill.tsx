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
  max-width: 266px;
  padding: 12px 16px;
  margin: 8px 0 0;
  background ${ ({ color, theme }) => theme.colors.flavourProfiles[color] };
  color: white;
  border-radius: 32px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 16px;
  text-align: left;
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
