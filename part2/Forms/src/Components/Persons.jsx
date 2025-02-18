const Persons = ({ persons, handleDeletePerson}) => { 
    
    return (
      <div>
        <h2>Numbers</h2>
        <ul>
          {persons.map((person) => (
            <li key={person.id}>
              {person.name} {person.number}
              <button onClick={() => handleDeletePerson(person.id)}>
                delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
}

export default Persons;