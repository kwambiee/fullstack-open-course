import { useState, useCallback, useMemo } from 'react'
import { anecdotes } from './anecdote'
import Proverbs from './Proverbs';
import MostVoted from './MostVoted';
import './App.css';


const App = () => {
  const [anecdoteList, setAnecdoteList] = useState(anecdotes);
  const [anecdote, setAnecdote] = useState(anecdotes[0]);

  const getRandomAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    return anecdotes[randomIndex];
  };

  const showNextAnecdote = () => {
    setAnecdote(getRandomAnecdote());
  };

  // Handle voting logic
  const handleVote = useCallback(
    (id) => {
      const updatedAnecdoteList = anecdoteList.map((item) =>
        item.id === id ? { ...item, vote: item.vote + 1 } : item
      );

      setAnecdoteList(updatedAnecdoteList);

      const updatedAnecdote = updatedAnecdoteList.find(
        (item) => item.id === id
      );
      setAnecdote(updatedAnecdote);
    },
    [anecdoteList]
  );


  const mostVotedAnecdote = useMemo(() => {
    return anecdoteList.reduce((max, anecdote) =>
    anecdote.vote > max.vote ? anecdote : max, anecdoteList[0])
  }, [anecdoteList]);

  return (
    <div className="container flex flex-col items-center h-screen mx-auto max-w-2xl">
      <Proverbs
        anecdote={anecdote}
        handleVote={handleVote}
        showNextAnecdote={showNextAnecdote}
      />

      {/* Show most Voted Anecdote */}
      < MostVoted  content={mostVotedAnecdote.content} vote={mostVotedAnecdote.vote} />
    </div>
  );
}

export default App