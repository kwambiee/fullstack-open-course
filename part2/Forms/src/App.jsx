import { useState } from "react";
import Header from "./Components/Header";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: "Arto Hellas",
      number: "040-123456",
    }
  ]);

  const [newUser, setNewUser] = useState({
    name: "",
    number: "",
  });

  const [filter, setFilter] = useState("");

  const filterByName = (name) => {
    setFilter(name);
  };

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleUserDetails = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const addPerson = (e) => { 
    e.preventDefault();
    const personObject = {
      name: newUser.name,
      number: newUser.number,
    };
    setPersons(persons.concat(personObject));
    setNewUser({
      name: "",
      number: "",
    });
  }

  return (
    <div>
      <Header />
      <Filter handleFilter={filterByName} />
      <PersonForm
        addPerson={addPerson}
        handleUserDetails={handleUserDetails}
        user={newUser}
      />
      <Persons persons={filter ? filteredPersons : persons} />
    </div>
  );
};

export default App;
