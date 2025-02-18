import axios from "axios";

const baseUrl = "http://localhost:3001/persons";


 export const getAll = () => { 
     const data = axios.get(baseUrl).then((response) => response.data);
    return data;
 };

export const createPerson = (newPerson) => { 
    const data = axios.post(baseUrl, newPerson).then((response) => response.data);
    return data;
};

export const getPerson = (id) => { 
    const data = axios.get(`${baseUrl}/${id}`).then((response) => response.data);
    return data;
};

export const updatePerson = (id, newPerson) => { 
    const data = axios.put(`${baseUrl}/${id}`, newPerson).then((response) => response.data);
    return data;
}

export const deletePerson = (id) => {
    const data = axios.get(`${baseUrl}/${id}`).then((response) => response.data);
    return data;
 };
 

