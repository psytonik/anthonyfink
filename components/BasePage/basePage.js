import React from 'react';
import {Container} from "reactstrap";
import propTypes from 'prop-types'
const BasePage = (props) => {
    const {className,title} = props;

    return (
            <div className={`base-page ${className}`}>
                <Container>
                    {title && <div className="page-head"><h1 className="page-header-title">{title}</h1></div>}
                    {props.children}
                </Container>
            </div>
    );
};
BasePage.defaultProps = {
    className:''
}
BasePage.propTypes = {
    className: propTypes.any.isRequired
}
export default BasePage;
