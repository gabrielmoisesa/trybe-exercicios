import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { Dispatch, ReduxState } from './types'
import { fetchCharacter } from './redux/actions';

function App() {
  const rootState = useSelector((state: ReduxState) => state);
  const dispatch: Dispatch = useDispatch();

  if (rootState.isFetching) return <p>Carregando...</p>;

  return (
    <>
    <input type="text" />
    <button onClick={() => {
      dispatch(fetchCharacter())
    }}>Search</button>
    </>
  )
}

export default App
