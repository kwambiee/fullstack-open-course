const MostVoted = ({ anecdotes }) => { 

    const mostVoted = anecdotes.reduce((max, anecdote) => 
        anecdote.vote > max.vote ? anecdote : max, anecdotes[0]
    );
    
    return (
      <div className="m-4 p-4 w-full">
        <h1 className="text-3xl font-bold ">Anecdote with most votes</h1>
        {mostVoted.vote > 0 ? (
          <>
            <p className=" font-light italic px-4 mt-6">
              "{mostVoted.content}"
            </p>
            <p className=" pl-32 font-medium italic">
              Has {mostVoted.vote} votes
            </p>
          </>
        ) : (
          <p>No votes yet!</p>
        )}
      </div>
    );
    
    
}

export default MostVoted