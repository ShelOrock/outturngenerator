import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  width: 50%;
  z-index: 500;
  background: ${ ({ theme }) => theme.colors.body };
  border: 1px solid #ddd;
  box-shadow: 1px 1px 1px black;
  padding: 1rem;
  left: 25%;
  top: 30%;
  box-sizing: border-box;
  transtion: all 0.3s ease-out;
`;

export const ModalBackdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
`;