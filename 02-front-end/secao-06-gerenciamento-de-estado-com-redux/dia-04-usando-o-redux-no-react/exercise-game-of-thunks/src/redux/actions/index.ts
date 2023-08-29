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

export function fetchCharacter(characterName: string) {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(requestStarted());
      const response = await fetch(`https://anapioficeandfire.com/api/characters?name=${characterName}`);
      const data = await response.json();
      const characterData: CharacterType = {
        name: data[0].name,
        born: data[0].born,
        titles: data[0].titles,
      }
      dispatch(requestSuccessful(characterData))
    } catch (error) {
      dispatch(requestFailed(error));
    }
  }
}
