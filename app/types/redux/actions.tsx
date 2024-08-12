export interface ActionTypes<PayloadType = {}> {
  type: string | symbol;
  payload?: PayloadType;
}

export type ActionFunctionType<PayloadType = {}> = (payload?: PayloadType) => ActionTypes<PayloadType>

export type StateType<InitialStateType> = InitialStateType;

export type ReducerFunctionType<InitialStateType, ReturnType, PayloadType = {}> = (state: StateType<InitialStateType>, action: ActionTypes<PayloadType>) => ReturnType;
