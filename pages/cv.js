import React from 'react';
import BaseLayout from "../components/Layout/baseLayout";
import BasePage from "../components/BasePage";
import {Row,Col} from "reactstrap";

const CvPage = () => {
    return (
        <BaseLayout>
            <BasePage title="Preview of my Cv" className="cv-page">
                <Row>
                    <Col md={{size:8,offset:2}}>
                        <div className="cv-title">
                            <a
                                download="cv-anthony-fink.pdf"
                                className="btn btn-success"
                                href="/cv-anthony-fink.pdf">Download</a>
                        </div>
                        <iframe
                            style={{width:'100%', height:'800px'}}
                            src="/cv-anthony-fink.pdf"
                            frameBorder="0"/>
                    </Col>
                </Row>
            </BasePage>
        </BaseLayout>
    );
};

export default CvPage;
