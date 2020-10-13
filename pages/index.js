import React, {useEffect, useRef, useState} from "react";
import {Container,Row,Col} from "reactstrap";
import BaseLayout from "../components/Layout/baseLayout";
import Typed from 'react-typed';


export const IndexPage = () => {
    const [isFlipping, setIsFlipping] = useState(false);
    const flipInterval = useRef();

    useEffect(() => {
        startAnimation();
        return () => flipInterval.current && clearInterval(flipInterval.current)
    }, []);

    const startAnimation = () => {
        flipInterval.current = setInterval(() => {
            setIsFlipping(prevFlipping => !prevFlipping);
        }, 20000);
    }
    const roles = ['Web Developer', 'Tech Lover', 'Team Player', 'Creative', 'ReactJS','NextJs','NodeJS','Musician']
    return (
        <BaseLayout
            className={`cover ${isFlipping ? 'cover-orange' : 'cover-blue'}`}
            headerType="index">
            <div className="main-section">
                <div className="background-image">
                    <img rel="preload" src="/images/background-index.png" alt="background"/>
                </div>

                <Container>
                    <Row>
                        <Col md="6">
                            <div className="hero-section">
                                <div className={`flipper ${isFlipping ? 'isFlipping' : ''}`}>
                                    <div className="front">
                                        <div className="hero-section-content">
                                            <h2> Full Stack Web Developer </h2>
                                            <div className="hero-section-content-intro">
                                                Have a look at my portfolio and job history.
                                            </div>
                                        </div>
                                        <img rel="preload" className="image" src="/images/shoot.jpg" alt="section"/>
                                        <div className="shadow-custom">
                                            <div className="shadow-inner"> </div>
                                        </div>
                                    </div>
                                    <div className="back">
                                        <div className="hero-section-content">
                                            <h2> Get Your Projects Done </h2>
                                            <div className="hero-section-content-intro">
                                                Professional and top quality service in web development.
                                            </div>
                                        </div>
                                        <img rel="preload" className="image" src="/images/shoot2.jpg" alt="section"/>
                                        <div className="shadow-custom shadow-custom-orange">
                                            <div className="shadow-inner"> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md="6" className="hero-welcome-wrapper">
                            <div className="hero-welcome-text">
                                <h1>
                                    Welcome to the portfolio website of <span className="font-weight-bold">Anthony Fink.</span>
                                    Get informed, collaborate and discover projects I was working on through the year!
                                </h1>
                            </div>
                            <Typed
                                loop
                                strings={roles}
                                typeSpeed={70}
                                backSpeed={70}
                                backDelay={1000}
                                loopCount={0}
                                showCursor
                                className="self-typed"
                                cursorChar="|"
                            />
                            <div className="hero-welcome-bio">
                                <h1>
                                    Let's take a look on my work.
                                </h1>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <span className="service-link" >Site created by :{" "}<a href="https://anthonyfink.dev">Anthony Fink</a></span>
            </div>
        </BaseLayout>
    )
}
export default IndexPage;
