import styled from 'styled-components';

export const Modal = styled.div`
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
`;//DELETE

export const Main = styled.div`
  position: fixed;
  width: 480px;
  background: ${ ({ theme }) => theme.colors.body };
  border-radius: 8px;
  box-shadow: 0px 4px 4px #666;
  padding: 16px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  z-index: 2;
  transition: all 0.3s ease-out;
`;

export const Background = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease-out;
`;

export const InputModules = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Buttons = styled.div`
  display: flex;
`;