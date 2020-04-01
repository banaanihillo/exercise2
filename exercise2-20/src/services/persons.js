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

const updateNumber = (personObject, personToReplace) => {
    return axios.put(`http://localhost:3001/persons/${personToReplace.id}`, personObject)
}

export default {
    getAll,
    addPerson,
    removePerson,
    updateNumber
}