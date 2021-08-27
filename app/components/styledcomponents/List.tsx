import styled from 'styled-components';

export const List = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  margin: 1rem 0.5rem 1rem 0;
  padding: 0;
`;

export const ListItem = styled.li`
  margin: 0.5rem 0;
`;

export const LineList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  margin: 1rem 0.5rem 1rem 0;
  padding: 0;
`;

export const CardList = styled.div`
  width: calc(100% - 3rem);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
