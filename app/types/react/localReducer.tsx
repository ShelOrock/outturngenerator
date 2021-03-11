export interface LocalReducerActionTypes {
  name?: string;
  type?: string;
  value: string | string[];
}
      
export type LocalReducerFunctionType<State> = (state: State, action: LocalReducerActionTypes) => State