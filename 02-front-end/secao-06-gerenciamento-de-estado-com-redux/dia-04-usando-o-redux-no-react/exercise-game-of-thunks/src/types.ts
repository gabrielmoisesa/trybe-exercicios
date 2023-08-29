import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

export type CharacterType = {
  name: string;
  born: string;
  titles: Array<string>;
}

export type ReduxState = {
  isFetching: boolean;
  Character: CharacterType;
}

export type Dispatch = ThunkDispatch<ReduxState, void, AnyAction>;