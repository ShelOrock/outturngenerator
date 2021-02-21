import styled, { css } from 'styled-components';

interface ButtonProps {
  size?: string;
  variant?: string;
  disabled?: boolean;
};

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const AllButtonStyles = css<ButtonProps>`
  text-align: center;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  padding: ${ ({ size, theme: { buttons } }) => buttons.size[size].padding };
  margin: ${ ({ size, theme: { buttons } }) => buttons.size[size].margin };
  background: ${ ({ variant, theme: { buttons } }) => buttons.colors[variant].background };
  color: ${ ({ variant, theme: { buttons } }) => buttons.colors[variant].text };

  &:focus {
    outline: none;
  };
`;

export const Button = styled.button`
  ${ AllButtonStyles }
`;

export const SmallButton = styled.button`
  ${ AllButtonStyles }
`;

export const ButtonDiv = styled.div`
  color: inherit;
  background: inherit;
`;