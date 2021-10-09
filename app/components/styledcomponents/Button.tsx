import styled, { css } from 'styled-components';

interface ButtonProps {
  size?: string;
  variant?: string;
  disabled?: boolean;
};

export const AllButtonStyles = css<ButtonProps>`
  text-align: center;
  cursor: pointer;
  background: ${ ({ variant, theme: { buttons } }) =>  buttons.colors[variant].background} };
  color: ${ ({ variant, theme: { buttons } }) => buttons.colors[variant].text };
  border: ${ ({ variant, theme: { buttons } }) => buttons.colors[variant].border};
  border-radius: 24px;
  font-weight: bold;
  padding: 12px 16px;
  margin: 0 8px 0 0;

  &:focus {
    outline: none;
  };
`;

export const Button = styled.button`
  ${ AllButtonStyles }
`;