import React from 'react';
import BaseLayout from "../components/Layout/baseLayout";
import BasePage from "../components/BasePage";
import {Container,Row,Col} from "reactstrap";
import moment from "moment";
import Link from "next/link";

const BlogPage = () => {
    return (
        <BaseLayout headerType={'landing'} className="blog-listing-page">
            <div className="masthead" style={{"backgroundImage":"url('/images/1.3 home-bg.jpg')"}}>
                <div className="overlay"/>
                <Container>
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <div className="site-heading">
                                <h1>Fresh Blogs</h1>
                                <span className="subheading">My Programming experience.</span>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>

            <BasePage className="blog-body">
                <Row>
                    <Col md="10" lg="8" className="mx-auto">
                        {
                            <React.Fragment>
                                <div  className="post-preview">
                                    <Link href={'/blog'}>
                                        <a>
                                            <h2 className="post-title">
                                                Very Nice Blog Post
                                            </h2>
                                            <h3 className="post-subtitle">
                                                How I Start Programming...
                                            </h3>
                                        </a>
                                    </Link>
                                    <p className="post-meta">Posted by
                                        <a href="#"> Anthony Fink </a>
                                        {moment().format('LLLL')}</p>
                                </div>
                                <hr/>
                            </React.Fragment>
                        }
                        <div className="clearfix">
                            <a className="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
                        </div>
                    </Col>
                </Row>


                <footer>
                    <Container>
                        <Row>
                            <div className="col-lg-8 col-md-10 mx-auto">
                                <ul className="list-inline text-center">
                                    <li className="list-inline-item">
                                        <a href="#">
                                            <span className="fa-stack fa-lg">
                                                <i className="fas fa-circle fa-stack-2x"/>
                                                <i className="fab fa-twitter fa-stack-1x fa-inverse"/>
                                            </span>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#">
                                            <span className="fa-stack fa-lg">
                                                <i className="fas fa-circle fa-stack-2x"/>
                                                <i className="fab fa-facebook-f fa-stack-1x fa-inverse"/>
                                            </span>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#">
                                            <span className="fa-stack fa-lg">
                                                <i className="fas fa-circle fa-stack-2x"/>
                                                <i className="fab fa-github fa-stack-1x fa-inverse"/>
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                                <p className="copyright text-muted">Copyright &copy; Anthony Fink 2020</p>
                            </div>
                        </Row>
                    </Container>
                </footer>

            </BasePage>

        </BaseLayout>
    );
};

export default BlogPage;
