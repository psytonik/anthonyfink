import React, {useState} from 'react';
import {Form,Input,FormGroup,Button,Label,Col,CustomInput,Alert} from 'reactstrap';
import {postPortfolio} from "../../services/action";
import {Router} from "../../routes";

const PortfolioForm = () => {
    const [value,setValue] = useState({
        title:'',
        position:'',
        description:'',
        location:'',
        company:'',
        startDate:'',
        endDate:'',
        isHidden:false
    });
    const [error,setError] = useState(undefined);

    const handleSubmit = e => {
        e.preventDefault();
        postPortfolio({...value})
            .then(()=>{
                setError(undefined);
                Router.pushRoute('/portfolio')
            })
            .catch(error=>{
                const err = error.message || 'Server Error'
                setError(err)
            })
    }
    const handleChange = name => e => {
        setValue({...value, [name]:e.target.value})
    }
    return (
        <Col sm={6} md={6}>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="title">Title</Label>
                    <Input
                        type="text" onChange={handleChange('title')}
                        value={value.title}
                        id="title"
                        name="title"
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="description">Description</Label>
                    <Input
                        type="textarea"
                        name="description"
                        id="description"
                        onChange={handleChange('description')}
                        value={value.description}
                        required/>
                </FormGroup>
                <FormGroup>
                    <Label for="position">Position</Label>
                    <Input
                        type="text"
                        name="position"
                        id="position"
                        onChange={handleChange('position')}
                        value={value.position}
                        required/>
                </FormGroup>
                <FormGroup>
                    <Label for="company">Company</Label>
                    <Input
                        type="text"
                        name="company"
                        id="company"
                        onChange={handleChange('company')}
                        value={value.company}
                        required />
                </FormGroup>
                <FormGroup>
                    <Label for="location">Location</Label>
                    <Input
                        type="text"
                        name="location"
                        id="location"
                        onChange={handleChange('location')}
                        value={value.location}
                        required/>
                </FormGroup>
                <FormGroup>
                    <Label for="startDate">Start Date</Label>
                    <Input
                        type="date"
                        name="startDate"
                        id="startDate"
                        onChange={handleChange('startDate')}
                        value={value.startDate}
                        required/>
                </FormGroup>
                {!value.isHidden && (
                    <FormGroup>
                        <Label for="endDate">End Date</Label>
                        <Input
                            type="date"
                            name="endDate"
                            id="endDate"
                            onChange={handleChange('endDate')}
                            value={value.endDate}
                            required />
                    </FormGroup>
                )}
                <CustomInput type="switch" id="CustomSwitch" name="switch" label="Still work" />
                {error && (
                    <Alert className="alert-danger">
                        {error}
                    </Alert>
                )}
                <Button color="success" size="lg" type="submit" value="submit" >Submit</Button>
            </Form>
        </Col>
    );
};

export default PortfolioForm;
