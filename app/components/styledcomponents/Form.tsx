import styled from 'styled-components';

export const FormContainer = styled.div`
  padding: 1rem;
  background-color: white;
  box-shadow: 0 8px 15px #D5D5D5;
  border-radius: 2px;
  width: 40%;
  position:fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between
`

export const InputModule = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 80%;
  margin: 1rem;
`

export const InputLabel = styled.label`
  padding: 1rem, 0.5rem;
`

export const InputField = styled.input`
  padding: 0.5rem
  &focus: 1px solid #204468;
  height: 1.5rem;
`

export const TextArea = styled.textarea`
  padding: 0.5rem
  &focus: 1px solid #204468;
  height: 4rem;
  resize: none;
`

export const Checkbox = styled.input`
  margin: 1rem;
`

export const Select = styled.select`
  width: 125px;
  background-color: ${ ({ theme: { colors } }) => colors.lightgray };
  color: ${ ({ theme: { colors } }) => colors.primary };
  border: none;
  border-radius: 3px;
  padding: 1rem;
  margin: 0 2rem;
`;

export const Option = styled.option`
  background-color: ${ ({ theme: { colors } }) => colors.lightgray };
  color: ${ ({ theme: { colors } }) => colors.primary };
  padding: 1rem;
  border: 1px solid black;
`