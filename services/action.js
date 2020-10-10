import axios from "axios";
const LOCALHOST = 'http://localhost:3000'
const url = '/api/v1/portfolio';

export const getPortfolio = async () => {
    return await axios.get(`${url}`)
        .then(res=>res.data)
}
export const postPortfolio = async data => {
        return await axios.post(`${url}`, data,{method:"POST"})
            .then(res=> {return res.data});
}
