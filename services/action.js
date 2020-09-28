import axios from 'axios';

export const getPortfolio = async () => {
    try{
        const url = '/api/v1/portfolio';
        return await axios.get(url);
    }catch (e) {
        console.log(e,'error')
    }
}
