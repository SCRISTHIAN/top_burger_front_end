




export const baseUrl="https://flask-production-fc0d.up.railway.app";



export const getJson = async (endpoint = "") => {
    const newEndPoint= endpoint;
    const apiURL = "https://flask-production-fc0d.up.railway.app";
    const apiTitle = `${apiURL}${newEndPoint}`;
    const response = await fetch(apiTitle);
    
    const data = await response.json();
    return data;
};
  