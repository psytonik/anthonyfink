import React from 'react';
import BaseLayout from "../../components/Layout/baseLayout";
import BasePage from "../../components/BasePage";
import PortfolioForm from "../../components/portfolio/portfolioForm";
import {Row} from "reactstrap";

const PortfolioNew = () => {
    return (
        <BaseLayout>
            <BasePage
                title="My Portfolio"
                className="portfolio-create-page"
            >
                <Row>
                    <PortfolioForm/>
                </Row>
            </BasePage>
        </BaseLayout>
    );
};

export default PortfolioNew;
