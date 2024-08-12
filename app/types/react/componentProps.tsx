export type SpacingPropTypes = (
  | "none"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "default"
  | ""
);

export interface PropsWithSpacing {
  margin?: SpacingPropTypes;
  mt?: SpacingPropTypes;
  mr?: SpacingPropTypes;
  mb?: SpacingPropTypes;
  ml?: SpacingPropTypes;
  padding?: SpacingPropTypes;
  pt?: SpacingPropTypes;
  pr?: SpacingPropTypes;
  pb?: SpacingPropTypes;
  pl?: SpacingPropTypes;
};
