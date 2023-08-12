import axios from 'axios';

const url = "https://jsonplaceholder.typicode.com/users";


export const getRecipes = async(query) => {
    return await axios.get(url);
     
};