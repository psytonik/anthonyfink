import React, {useEffect, useState} from 'react';
import BaseLayout from "../components/Layout/baseLayout";
import BasePage from "../components/BasePage";
import {Card,CardText,CardTitle,CardBody,CardHeader,Col,Row} from "reactstrap";
import axios from "axios";

const PortfolioPage = () => {
        let [portfolio,setPortfolio] = useState( []);
        const ac = new AbortController()
        const loadData = async () => {
            const url = '/api/v1/portfolio';
            const res =  axios.get(url);
            setPortfolio((await res).data)
        }
        useEffect(()=>{
            loadData()
            return () => ac.abort()
        },[loadData]);
    return (
        <BaseLayout>
            <BasePage
                title="My Portfolio"
                className="portfolio-page"
            >
                <Row>
                    {portfolio.map((p,id)=>{
                        return(
                            <Col md="4" key={id} >
                                <React.Fragment >
                        <span>
                            <Card className="portfolio-card">
                            <CardHeader className="portfolio-card-header">{p.position}</CardHeader>
                            <CardBody>
                                <p className="portfolio-card-city"> {p.location} </p>
                                <CardTitle className="portfolio-card-title">{p.company}</CardTitle>
                                <CardText className="portfolio-card-text">{p.description}</CardText>
                                <div className="readMore"> </div>
                            </CardBody>
                            </Card>
                        </span>
                                </React.Fragment>
                            </Col>
                        )}
                        )}
                </Row>
            </BasePage>
        </BaseLayout>
    );
};

export default PortfolioPage;
