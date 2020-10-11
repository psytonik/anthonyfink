import moment from 'moment'
import React  from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const PortfolioModal = ({modal,toggle,portfolio}) => {

    return (
        <div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>{portfolio.title}</ModalHeader>
                <ModalBody>
                    <p><b>Description: </b>{portfolio.description}</p>
                    <p><b>Company: </b>{portfolio.company}</p>
                    <p><b>Position: </b>{portfolio.position}</p>
                    <p><b>Location: </b>{portfolio.location}</p>
                    <p><b>Start Date: </b>{moment(portfolio.startDate).format('MMMM YYYY')}</p>
                    <p><b>End Date: </b>{portfolio ? moment(portfolio.endDate).format('MMMM YYYY'): 'Still Working here'}</p>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggle}>Close</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default PortfolioModal;
