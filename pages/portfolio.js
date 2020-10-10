import React, {Fragment, useEffect, useState} from 'react';
import BaseLayout from "../components/Layout/baseLayout";
import BasePage from "../components/BasePage";
import {Card, CardBody, CardHeader, CardText, CardTitle, Col, Row, Button} from "reactstrap";
import {getPortfolio,deletePortfolio} from "../services/action";
import {Router} from '../routes'
const Portfolio = ({data}) => {

    let [portfolio, setPortfolio] = useState([]);
    useEffect(() => {
        setPortfolio(data);
    }, [data]);
    const displayWarning = (portfolioId) => {
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
                                        <span>
                                            <Card className="portfolio-card">
                                            <CardHeader className="portfolio-card-header">{p.position}</CardHeader>
                                            <CardBody>
                                                <p className="portfolio-card-city"> {p.location} </p>
                                                <CardTitle className="portfolio-card-title">{p.company}</CardTitle>
                                                <CardText className="portfolio-card-text">{p.description}</CardText>
                                                <div className="readMore">{
                                                    <Fragment>
                                                        <Button onClick={()=>displayWarning(p._id)} color="danger">Delete</Button>
                                                    </Fragment>
                                                }</div>
                                            </CardBody>
                                            </Card>
                                        </span>
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
