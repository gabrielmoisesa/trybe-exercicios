import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { Dispatch, ReduxState } from './types'
import { fetchCharacter } from './redux/actions';

function App() {
  const rootState = useSelector((state: ReduxState) => state);
  const dispatch: Dispatch = useDispatch();
  const characterName = rootState.character.name;
  const characterBorn = rootState.character.born;
  const characterTitles = rootState.character.titles;

  if (rootState.isFetching) return <p>Carregando...</p>;

  return (
    <>
      <input type="text" />
      <button onClick={() => {
      dispatch(fetchCharacter('Jon Snow'))
      }}>Search</button>
      {characterName && (
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
    </>
  )
}

export default App
