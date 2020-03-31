import axios from "axios";
const address = "http://localhost:3001/persons";

const getAll = () => {
    return axios.get(address)
}

const addPerson = (personObject) => {
    return axios.post(address, personObject)
}

const removePerson = (id) => {
    return axios.delete(`http://localhost:3001/persons/${id}`)
}

export default {
    getAll,
    addPerson,
    removePerson
}