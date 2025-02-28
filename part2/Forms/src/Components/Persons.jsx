const Persons = ({ persons, handleDeletePerson}) => { 
    
    return (
      <div className="text-center mt-4">
        <h2 className="text-2xl font-bold">Numbers</h2>
        <ul className="flex flex-col items-center space-y-2 mt-4 ml-8">
          {persons.map((person) => (
            <li key={person.id} className="flex list-disc">
              {person.name} {person.number}
              <button
                onClick={() => handleDeletePerson(person.id)}
                className="ml-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded border border-blue-700"
              >
                delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
}

export default Persons;