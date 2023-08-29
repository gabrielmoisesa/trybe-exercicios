import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { Dispatch, ReduxState } from './types'
import { fetchCharacter } from './redux/actions';
import React, { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('')

  const rootState = useSelector((state: ReduxState) => state);
  const dispatch: Dispatch = useDispatch();
  
  const characterName = rootState.character.name;
  const characterBorn = rootState.character.born;
  const characterTitles = rootState.character.titles;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  return (
    <>
      <h1>Game of Thunks</h1>
      {rootState.isFound && characterName && (
        <div>
          <h2>{characterName}</h2>
          <p>{characterBorn}</p>
          <div>
            <h3>Titles:</h3>
            <ul>{characterTitles.map((title) => (
              <li>{title}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
      {rootState.isFound === false && <p>Character not found.</p>}
      {rootState.isFetching && <p>Loading...</p>}
      <input type="text" onChange={handleChange} />
      <button onClick={() => {
      dispatch(fetchCharacter(inputValue))
      }}>Search</button>
    </>
  )
}

export default App
