import { useState } from 'react'
import Statistics from './Statistics'
import './App.css';


const App = () => {

  const [status, setStatus] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  })

  const handleClick = (type) => { 
    setStatus(prevStatus => ({
        ...prevStatus, 
        [type]: prevStatus[type] + 1  // increment the value of the key
    }));
  }



  return (
    <div className='container flex flex-col items-center h-screen mx-auto max-w-2xl'>
      <Statistics status={status} handleClick={handleClick} />
    </div>
  )
}

export default App