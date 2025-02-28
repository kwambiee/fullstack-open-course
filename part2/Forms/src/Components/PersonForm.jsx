
const PersonForm = ({ addPerson, handleUserDetails, user }) => {
  return (
    <div className="text-center mt-4">
      <form onSubmit={addPerson}>
        <div className="flex flex-col items-center space-y-2">
          <div>
            name:{" "}
            <input
              name="name"
              value={user.name}
              onChange={handleUserDetails}
              className=" border rounded p-2"
            />
          </div>
          <div>
            number:{" "}
            <input
              name="number"
              value={user.number}
              onChange={handleUserDetails}
              className=" border rounded p-2"
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="m-4 bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded border-2"
          >
            add
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonForm;