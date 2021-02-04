import { LocalReducerActionType } from "../Interfaces/form";

export interface LocalReducerActionTyps {
  name: string;
  value: string;
}
      
export type LocalReducerFunctionType<State> = (state: State, action: LocalReducerActionType) => State