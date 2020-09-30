import useSWR from "swr";
const url = '/api/v1/portfolio';

const fetcher = async(...args) => await fetch(...args).then(res => res.json())

export const getPortfolio = () => {
    const {data,error,...rest} = useSWR(url,fetcher);
    return {data,error,...rest}
}
