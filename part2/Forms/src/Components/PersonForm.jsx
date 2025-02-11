
const PersonForm = ({ addPerson, handleUserDetails, user }) => {
  return (
    <div>
      <form onSubmit={addPerson}>
        <div>
          <div>
            name:{" "}
            <input name="name" value={user.name} onChange={handleUserDetails} />
          </div>
          <div>
            number:{" "}
            <input
              name="number"
              value={user.number}
              onChange={handleUserDetails}
            />
          </div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};

export default PersonForm;