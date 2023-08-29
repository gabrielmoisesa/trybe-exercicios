import { CharacterType, Dispatch } from "../../types";

export const REQUEST_STARTED = 'REQUEST_STARTED';
export const REQUEST_SUCCESSFUL = 'REQUEST_SUCCESSFUL';
export const REQUEST_FAILED = 'REQUEST_FAILED';

function requestStarted() {
  return { type: REQUEST_STARTED };
}

function requestSuccessful(character: CharacterType) {
  return {
    type: REQUEST_SUCCESSFUL,
    payload: character,
  };
}

function requestFailed(error: string | unknown) {
  return {
    type: REQUEST_FAILED,
    payload: error,
  };
}

export function fetchCharacter() {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(requestStarted());
      const response = await fetch('https://anapioficeandfire.com/api/characters?name=Tyrion%20Lannister');
      const data = await response.json();
      dispatch(requestSuccessful(data))
    } catch (error) {
      dispatch(requestFailed(error));
    }
  }
}