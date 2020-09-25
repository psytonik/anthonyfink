import React, {useEffect} from 'react';
import BaseLayout from "../components/Layout/baseLayout";
import BasePage from "../components/BasePage";
import {Card,CardText,CardTitle,CardBody,CardHeader,Col,Row} from "reactstrap";

const PortfolioPage = () => {
        const works = ['WeWork', 'PsyStream','One Click Pharma','Get A Fast Loan 4 U']
    return (
        <BaseLayout>
            <BasePage
                title="My Portfolio"
                className="portfolio-page"
            >
                <Row>
                    {works.map((work,id)=>{
                        return(
                            <Col md="4" key={id}>
                                <React.Fragment >
                        <span>
                            <Card className="portfolio-card">
                            <CardHeader className="portfolio-card-header">Some Position at {work}</CardHeader>
                            <CardBody>
                                <p className="portfolio-card-city"> Some Location </p>
                                <CardTitle className="portfolio-card-title">Some Company</CardTitle>
                                <CardText className="portfolio-card-text">Some Description</CardText>
                                <div className="readMore"> </div>
                            </CardBody>
                            </Card>
                        </span>
                                </React.Fragment>
                            </Col>
                        )
                    })}
                </Row>
            </BasePage>
        </BaseLayout>
    );
};

export default PortfolioPage;
