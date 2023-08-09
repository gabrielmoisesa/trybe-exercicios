import { useState, useEffect } from 'react';
import fetchJoke from './utils/fetchJoke';
import './App.css';

function App() {
  const [joke, setJoke] = useState('');

  useEffect(() => {
    async function getJoke() {
      const jokes = await fetchJoke()
      setJoke(jokes.joke)
    }
    getJoke();
  }, []);

  const handleClick = async () => {
    const jokes = await fetchJoke();
    setJoke(jokes.joke);
  }

  return (
    <div className="App">
      <h1>Random Joke</h1>
      <p>{joke}</p>
      <button onClick={ handleClick }>New joke</button>
    </div>
  );
}

export default App;
