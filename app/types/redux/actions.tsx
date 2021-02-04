export interface ActionTypes<PayloadType = {}> {
  type: Symbol;
  payload?: PayloadType;
}

export type ActionFunctionType<PayloadType = {}> = (payload?: PayloadType) => ActionTypes<PayloadType>

export type State<StateTypes = false> = StateTypes

export type ReducerFunctionType<StateTypes, PayloadType = {}> = (state: State<StateTypes>, action: ActionTypes<PayloadType>) => State<StateTypes>
