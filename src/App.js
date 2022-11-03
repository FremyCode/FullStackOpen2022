import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(7).fill(0))
  const copy_votes = [...votes]
  const mostVotes = Math.max(...votes)
  const mostIndex = votes.indexOf(mostVotes)
  
  

  //Generates random anecdote from anecdotes as the next one

  function Next(max) {
    setSelected(Math.floor(Math.random() * max))
  }

  function Vote() {
    copy_votes[selected] += 1
    setVotes(copy_votes)
    return mostVotes;
  }

  return (
    <div>
      <div>
        {anecdotes[selected]}
        <p>has {votes[selected]} votes</p>
      </div>
      <div>
        <button onClick={() => Next(7)}>Next anecdote</button>
        <button onClick={() => Vote()}>Vote</button>
      </div>

      <div>
        <h1>Anecdote with most votes</h1>
        <p>{anecdotes[mostIndex]}</p>
        <p>has {mostVotes} votes</p>
      </div>
    </div>
  )
}

export default App