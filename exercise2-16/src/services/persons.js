import axios from "axios";
const address = "http://localhost:3001/persons";

const getAll = () => {
    return axios.get(address)
}

const addPerson = (personObject) => {
    return axios.post(address, personObject)
}

export default {
    getAll,
    addPerson
}