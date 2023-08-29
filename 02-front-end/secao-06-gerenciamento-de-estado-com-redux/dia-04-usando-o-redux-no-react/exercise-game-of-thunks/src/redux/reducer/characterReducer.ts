import { CharacterType, ReduxState } from "../../types";
import { REQUEST_FAILED, REQUEST_STARTED, REQUEST_SUCCESSFUL } from "../actions";

const initialState: ReduxState = {
  isFetching: false,
  character: {
    name: '',
    born: '',
    titles: [],
  }
};

type ActionType = {
  payload: CharacterType;
  type: string;
};

function characterReducer(state = initialState, action: ActionType) {
  switch (action.type) {
    case REQUEST_STARTED:
      return {
        ...state,
        isFetching: true,
        isFound: false,
        character: {
          name: '',
          born: '',
          titles: [],
        }
      };
    
    case REQUEST_SUCCESSFUL:
      return {
        ...state,
        isFetching: false,
        isFound: true,
        character: action.payload
      };

    case REQUEST_FAILED:
      return {
        ...state,
        isFetching: false,
        isFound: false,
        character: {
          name: '',
          born: '',
          titles: [],
        }
      }

    default:
      return state;
  }
}

export default characterReducer;