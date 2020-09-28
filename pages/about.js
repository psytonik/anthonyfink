import React from 'react';
import BaseLayout from "../components/Layout/baseLayout";
import BasePage from "../components/BasePage";
import {Badge,Row,Col} from "reactstrap";
import {skills} from "../components/skills";

const AboutPage = () => {
    const {FrontEndSkills,BackEndSkills,Tools} = skills;
    return (
        <BaseLayout>
            <BasePage
                className="about-page"
                canonicalPath="/about">
                <Row className="mt-5">
                    <Col md="6">
                        <div className="left-side">
                            <h1 className={`title fadein`}>Hello, Welcome</h1>
                            <h4 className={`subtitle fadein`}>To About Page</h4>
                            <p className={`subsubTitle fadein`}>Feel free to read short description about me.</p>
                        </div>
                    </Col>
                    <Col md="6">
                        <div className="fadein">
                            <p>My name is Anthony Fink and I am an Junior Full Stack Web developer from Israel. </p>
                            <p>
                                I have a Full Stack Web Developer degree in John Bryce College and several years of experience working
                                on a wide range of technologies and projects with Javascript development for
                                modern mobile and web applications in React.
                            </p>
                            <p>
                                Passionate candidate, excellent interpersonal skills, High level of troubleshooting and capability
                            </p>
                            <React.Fragment>
                                <h4>Front End Skills:</h4>
                                {FrontEndSkills.map((skill,i)=> <Badge
                                    className="m-1"
                                    color="success"
                                    pill
                                    key={i}>{skill}</Badge>)}
                                <hr/>
                                <h4>Back End Skills:</h4>
                                {BackEndSkills.map((skill,i)=><Badge
                                    className="m-1"
                                    color="warning"
                                    key={i}
                                    pill>{skill}</Badge>)}
                                <hr/>
                                <h4>Tools:</h4>
                                {Tools.map((skill,i)=><Badge
                                    className="m-1"
                                    key={i}
                                    color="info"
                                    pill>{skill}</Badge>)}
                                <hr/>
                            </React.Fragment>
                        </div>
                    </Col>
                </Row>
            </BasePage>
        </BaseLayout>
    );
};

export default AboutPage;
