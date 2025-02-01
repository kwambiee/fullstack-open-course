import { useState } from 'react'
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
  }

  
  
  const showNextAnecdote = () => { 
    setAnecdote(getRandomAnecdote());
  }

  // Handle voting logic
  const handleVote = (id) => { 
    const updatedAnecdoteList = anecdoteList.map(item =>
      item.id === id ? { ...item, vote: item.vote + 1 } : item
    );

    setAnecdoteList(updatedAnecdoteList);

    const updatedAnecdote = updatedAnecdoteList.find(item => item.id === id);
    setAnecdote(updatedAnecdote);
 
  };


  return (
    <div className='container flex flex-col items-center h-screen mx-auto max-w-2xl'>
      <Proverbs anecdote={anecdote} handleVote={handleVote} showNextAnecdote={showNextAnecdote} />
      
      {/* Show most Voted Anecdote */}
      < MostVoted  anecdotes={anecdoteList} />
    </div>
  )
}

export default App