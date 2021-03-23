import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export const busca = async (url:string, setDados:(data:any)=>void) =>{
    const resp = await api.get(url);
    setDados(resp.data);
}