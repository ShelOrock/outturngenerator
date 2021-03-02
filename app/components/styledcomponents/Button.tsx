import styled, { css } from 'styled-components';

interface ButtonProps {
  size?: string;
  variant?: string;
  disabled?: boolean;
};

export const AllButtonStyles = css<ButtonProps>`
  text-align: center;
  cursor: pointer;
  background: ${ ({ variant, theme: { buttons } }) => buttons.colors[variant].background };
  color: ${ ({ variant, theme: { buttons } }) => buttons.colors[variant].text };
  border: ${ ({ variant, theme: { buttons } }) => buttons.colors[variant].border};
  border-radius: 3px;
  padding: ${ ({ size, theme: { buttons } }) => buttons.size[size].padding };
  margin: ${ ({ size, theme: { buttons } }) => buttons.size[size].margin };

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