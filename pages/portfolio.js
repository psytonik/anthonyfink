import React, {useEffect, useState} from 'react';
import BaseLayout from "../components/Layout/baseLayout";
import BasePage from "../components/BasePage";
import {Card,CardText,CardTitle,CardBody,CardHeader,Col,Row} from "reactstrap";
import {getPortfolio} from "../services/action";

const Portfolio = ({data}) => {
        let [portfolio,setPortfolio] = useState( []);
        useEffect(()=>{
            setPortfolio(data)
        },[data]);
    return (
        <BaseLayout>
            <BasePage
                title="My Portfolio"
                className="portfolio-page"
            >
                <Row>
                    {portfolio && portfolio.map((p,i)=>{
                        return(
                            <Col md="4" key={i} >
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
// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await getPortfolio()
    const data = await res;

    // Pass data to the page via props
    return {props:{data}}
}
export default Portfolio;
