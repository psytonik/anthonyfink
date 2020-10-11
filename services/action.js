import axios from "axios";
const Host = 'https://anthonyfink-cv.herokuapp.com';
// const Host = 'http://localhost:3000';
const url = '/api/v1/portfolio';

const rejectPromise = (responseError) => {
    let error = {};
    if(responseError && responseError.response && responseError.response.data){
        error = responseError.response.data
    }else{
        error = responseError;
    }
    return Promise.reject(error);
};
export const getPortfolio = async () => {
    return await axios.get(`${Host}${url}`)
        .then(res=>res.data)
}
export const postPortfolio = async data => {
        return await axios.post(`${Host}${url}`, data,{method:"POST"})
            .then(res=> {return res.data})
            .catch(error=> rejectPromise(error))
}
export const deletePortfolio = (portfolioId) => {
    return axios.delete(`${Host}${url}/${portfolioId}`)
        .then(res=>res.data)
}
