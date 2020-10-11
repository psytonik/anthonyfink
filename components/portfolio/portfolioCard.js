import React, {Fragment, useState} from 'react';
import {Card, CardBody, CardHeader, CardText, CardTitle} from "reactstrap";
import PortfolioModal from "./portfolioModal";

const PortfolioCard = ({portfolio,children}) => {
    const [openModal, setOpenModal] = useState(false);
    const handleToggle = () => setOpenModal(!openModal);

    return (
        <Fragment>
            <span onClick={handleToggle}>
                <PortfolioModal toggle={handleToggle} portfolio={portfolio} modal={openModal}/>
                <Card className="portfolio-card">
                    <CardHeader className="portfolio-card-header">{portfolio.position}</CardHeader>
                    <CardBody>
                        <p className="portfolio-card-city"> {portfolio.location} </p>
                        <CardTitle className="portfolio-card-title">{portfolio.company}</CardTitle>
                        <CardText className="portfolio-card-text">{portfolio.description}</CardText>
                        <div className="readMore">
                            {children}
                        </div>
                    </CardBody>
                </Card>
            </span>
        </Fragment>
    );
};

export default PortfolioCard;
