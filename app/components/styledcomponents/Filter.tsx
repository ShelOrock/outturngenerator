import styled from 'styled-components';

interface FlavourPillPropTypes {
  flavourProfile?: string;
}

export const FilterContainer = styled.div`
  position: absolute;
  width: 45vw;
  z-index: 10;
  right: 1rem;
  margin-top: 6rem;
  background-color: ${ ({ theme: { colors } }) => colors.white };
  box-shadow: 0px 8px 15px #D5D5D5;
`;

export const FilterList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0.5rem 0;
  margin: 0 0.5rem;
`

export const FilterListItem = styled.li<FlavourPillPropTypes>`
  list-style-type: none;
  background-color: ${ ({ flavourProfile, theme: { colors }}) => colors.flavourProfiles[flavourProfile] || colors.flavourProfiles.default};
  margin: 0.5rem;
  border-radius: 3px;
`

export const FilterListItemLabel = styled.label`
  color: ${ ({ theme: { colors }}) => colors.white };
  margin: 0.5rem 1rem 0.5rem 0;
`