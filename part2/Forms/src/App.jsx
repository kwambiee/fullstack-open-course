import { useState, useEffect } from "react";
import Header from "./Components/Header";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import { createPerson, getAll, deletePerson } from "./fetch";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newUser, setNewUser] = useState({ name: "", number: "" });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    getAllPersons();
  }, []);

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

  const getAllPersons = () => {
   getAll().then((response) => setPersons(response));
  };

  const addPerson = (e) => {
    e.preventDefault();
    const personObject = {
      name: newUser.name,
      number: newUser.number,
      // unique number for each person
      id: Math.floor(Math.random() * 1000),
    };

    // if user exists in the phonebook issue an alert
    if (persons.some((person) => person.name === newUser.name)) {
      alert(`${newUser.name} is already added to the phonebook`);
      return;
    }
    createPerson(personObject).then((response) => { 
      setPersons(persons.concat(response));
    });
    
    setNewUser({
      name: "",
      number: "",
    });
  };

  const handleDeletePerson = (id) => {
    deletePerson(4).then((response) => {
      setPersons(persons.filter((person) => person.id !== id));
    });
    // window.confirm
    window.confirm("Delete this person?");

  };

  return (
    <div>
      <Header />
      <Filter handleFilter={filterByName} />
      <PersonForm
        addPerson={addPerson}
        handleUserDetails={handleUserDetails}
        user={newUser}
      />
      <Persons
        persons={filteredPersons}
        handleDeletePerson={handleDeletePerson}
      />
    </div>
  );
};

export default App;
