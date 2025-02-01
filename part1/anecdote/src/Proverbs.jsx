const Proverbs = ({ anecdote, handleVote, showNextAnecdote }) => {
  return (
    <div className="w-full my-6">
      <h1 className="text-3xl font-extrabold ">Anecdote of the day</h1>
      <p className=" font-light italic px-4 mt-6">"{anecdote.content}"</p>
      <p className=" pl-32 font-medium italic">Has {anecdote.vote} votes</p>
      <div className="flex  items-center">
        <button
          type="button"
          onClick={() => handleVote(anecdote.id)}
          className=" p-2 m-2 bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Vote
        </button>
        <button
          type="button"
          onClick={showNextAnecdote}
          className=" p-2 m-2 bg-gray-400 hovesr:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Next Anecdote
        </button>
      </div>
    </div>
  );
};

export default Proverbs;
