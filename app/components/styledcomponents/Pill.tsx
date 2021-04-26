import styled, { css } from 'styled-components'

interface FlavourPillPropTypes {
  flavourProfile?: string;
}

interface OnlineIconPropTypes {
  variant?: string;
}

export const FlavourPillStyles = css<FlavourPillPropTypes>`
  background ${ ({ flavourProfile, theme: { colors } }) => colors.flavourProfiles[flavourProfile] || colors.flavourProfiles.other }
`;

export const FlavourPill = styled.div<FlavourPillPropTypes>`
  ${ FlavourPillStyles }
  color: white;
  width: 20px;
  padding: 35px 0;
`;

export const OnlineIcon = styled.div<OnlineIconPropTypes>`
  background-color: ${ ({ variant, theme: { colors } }) => colors[variant] };
  width: 12px;
  height: 12px;
  border-radius: 100%;
`;
