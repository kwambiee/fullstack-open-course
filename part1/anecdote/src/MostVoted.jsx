const MostVoted = ({ content, vote }) => { 

    // const mostVoted = anecdotes.reduce((max, anecdote) => 
    //     anecdote.vote > max.vote ? anecdote : max, anecdotes[0]
    // );
    
    return (
      <div className="m-4 p-4 w-full">
        <h1 className="text-3xl font-bold ">Anecdote with most votes</h1>
        {content && vote  ? (
          <>
            <p className=" font-light italic px-4 mt-6">
              "{content}"
            </p>
            <p className=" pl-32 font-medium italic">
              Has {vote} votes
            </p>
          </>
        ) : (
          <p>No votes yet!</p>
        )}
      </div>
    );
    
    
}

export default MostVoted