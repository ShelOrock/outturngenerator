export interface LocalReducerActionTypes {
  name?: string;
  type?: string;
  value: any;
}

export type LocalReducerFunctionType<State> = (state: State, action: LocalReducerActionTypes) => State