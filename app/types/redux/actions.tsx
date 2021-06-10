export interface ActionTypes<PayloadType = {}> {
  type: symbol;
  payload?: PayloadType;
}

export type ActionFunctionType<PayloadType = {}> = (payload?: PayloadType) => ActionTypes<PayloadType>

export type State<StateTypes> = StateTypes

export type ReducerFunctionType<StateTypes, PayloadType = {}> = (state: State<StateTypes>, action: ActionTypes<PayloadType>) => State<StateTypes>
