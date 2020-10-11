import React, {Fragment, useEffect, useState} from 'react';
import BaseLayout from "../components/Layout/baseLayout";
import BasePage from "../components/BasePage";
import {Button, Col, Row} from "reactstrap";
import {getPortfolio,deletePortfolio} from "../services/action";
import {Router} from '../routes'
import PortfolioCard from "../components/portfolio/portfolioCard";
const Portfolio = ({data}) => {

    let [portfolio, setPortfolio] = useState([]);
    useEffect(() => {
        setPortfolio(data);
    }, [data]);
    const displayWarning = (portfolioId,e) => {
        e.stopPropagation();
        const isConfirm = confirm('Are you sure want to delete it ?');
        if(isConfirm){
            removePortfolio(portfolioId)
        }
    }
    const removePortfolio = (portfolioId) => {
        deletePortfolio(portfolioId)
            .then(()=>{
                Router.pushRoute('/portfolio')
            })
            .catch(err=>console.error(err.message))
    }
    return (
        <BaseLayout>
            <BasePage
                title="My Portfolio"
                className="portfolio-page"
            >
                <Row>
                    {portfolio && portfolio.map((p, i) => {
                            return (
                                <Col md="4" key={i}>
                                    <Fragment>
                                        <PortfolioCard portfolio={p}>
                                            <Fragment>
                                                {/*<Button color="warning mr-2">Edit</Button>*/}
                                                <Button onClick={(e) => displayWarning(p._id,e)} color="danger">Delete</Button>
                                            </Fragment>
                                        </PortfolioCard>
                                    </Fragment>
                                </Col>
                            )
                        }
                    )}
                </Row>
            </BasePage>
        </BaseLayout>
    );
};

// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await getPortfolio()
    const data = await res;

    // Pass data to the page via props
    return {props: {data}}
}

export default Portfolio;
