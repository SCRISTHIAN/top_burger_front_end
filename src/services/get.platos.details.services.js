import { baseUrl } from "./services";


export const getPlato = async (id = "") => {
    //const apiURL='https://flask-production-fc0d.up.railway.app/menudeldia/1';
    const apiURL = `${baseUrl}/menudeldia/${id}`;    
    console.log(apiURL);
    const response = await fetch(apiURL);
    const data = await response.json();
    return data;
}; 