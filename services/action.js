import axios from "axios";
import useSWR from "swr";
const Host = 'https://anthonyfink-cv.herokuapp.com'
const url = '/api/v1/portfolio';
import {fetcher} from "./index";

export const getPortfolio = async () => {
    return await axios.get(`${Host}${url}`)
        .then(res=>res.data)
}
export const postPortfolio = async data => {
        return await axios.post(`${Host}${url}`, data,{method:"POST"})
            .then(res=> {return res.data});
}

// export const useGetPortfolio = (id) => {
//     const { data, error, ...rest} = useSWR(id ? `/api/v1/portfolios/${id}` : null, fetcher);
//     return { data, error, loading: !data && !error, ...rest};
// }
// const createPortfolio = (data) => axios.post('/api/v1/portfolios', data);
