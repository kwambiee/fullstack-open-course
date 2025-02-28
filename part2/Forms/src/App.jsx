import { useState, useEffect } from "react";
import Header from "./Components/Header";
import Filter from "./Components/Filter";
import PersonForm from "./Components/PersonForm";
import Persons from "./Components/Persons";
import Notification from "./Components/Notification";
import { createPerson, getAll, deletePerson, updatePerson } from "./fetch";
import "./App.css";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newUser, setNewUser] = useState({ name: "", number: "" });
  const [filter, setFilter] = useState("");
  const [notification, setNotification] = useState(null);

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
      id: String(Math.floor(Math.random() * 1000)),
    };

    if (persons.some((person) => person.name === newUser.name)) {
      if (
        window.confirm(
          `${newUser.name} is already added to the phonebook, replace the old number with a new one?`
        )
      ) {
        const person = persons.find((person) => person.name === newUser.name);
        const updatedPerson = { ...person, number: newUser.number };
        updatePerson(person.id, updatedPerson)
          .then((response) => {
            setPersons(
              persons.map((person) =>
                person.id !== updatedPerson.id ? person : response
              )
            );
            setNewUser({ name: "", number: "" });
            setNotification(
              `${newUser.name}'s number was updated successfully`
            );
            setTimeout(() => {
              setNotification(null);
            }, 3000);
          })
          .catch((error) => {
            if (error.response && error.response.status === 404) {
              setNotification(
                `Error: ${newUser.name} has already been deleted from the server`
              );
              setPersons(persons.filter((p) => p.id !== person.id));
            } else {
              console.error("Error updating person:", error);
            }
            setTimeout(() => {
              setNotification(null);
            }, 3000);
          });
      }
      return;
    }

    createPerson(personObject)
      .then((response) => {
        setPersons(persons.concat(response));
        setNotification(`${newUser.name} was added successfully`);
        setTimeout(() => {
          setNotification(null);
        }, 3000);
        setNewUser({ name: "", number: "" });
      })
      .catch((error) => {
        console.error("Error creating person:", error);
      });
  };

  const handleDeletePerson = (id) => {
    if (window.confirm("Do you want to delete this person?")) {
      // if ok is clicked, delete the person
      deletePerson(id)
        .then((response) => {
          setPersons(persons.filter((person) => person.id !== id));
          // notification this user.name was deleted
          const person = persons.find((person) => person.id === id);
          setNotification(`${person.name} was deleted successfully`);
          setTimeout(() => {
            setNotification(null);
          }, 3000);
        })
        .catch((error) => {
          console.error("Error deleting person:", error);
        });
    }
  };

  return (
    <div>
      <Notification message={notification} />
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
