import styled from "styled-components";

interface ElementProps {
  $transformX: number;
  $transformY: number;
  $transition: any;
};

const StyledDraggable = styled.tr<ElementProps>`
  transform: ${ ({ $transformX, $transformY }) => `translate3d(${ $transformX }px, ${ $transformY }px, 0)` };
  transition: ${ ({ $transition }) => $transition };
`;

export default StyledDraggable;
