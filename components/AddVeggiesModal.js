import React, {Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';

export class AddVeggiesModal extends Component {
    constructor(props) {
        super(props);
        this.state = {snackbaropen: false, snackbarmsg: ''};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    snackbarClose = (event) => {
        this.setState({snackbaropen: false});
    }

    handleSubmit(event) {
         event.preventDefault();
         fetch('https://localhost:44328/api/Veggies', {
             method: 'POST',
             headers : {
                 'Accept': 'application/json',
                 'Content-Type' : 'application/json'
             },
             body: JSON.stringify({
                 VeggiesID: null,
                 VeggiesName: event.target.VeggiesName.value,
                 DIS: event.target.DIS.value,
                 VeggiesCountry: event.target.VeggiesCountry.value,
                 VeggiesPrice: event.target.VeggiesPrice.value
             })          
         })
         .then(res => res.json())
         .then((result) => {
            this.setState({snackbaropen:true, snackbarmsg: result});
         },
         (error) => {
            this.setState({snackbaropen:true, snackbarmsg: 'failed'});
         })
    }

    render () {
        return (
            <div className = "container"> 
            <Snackbar 
            anchorOrigin = {{vertical:'center', horizontal:'center'}}
            open = {this.state.snackbaropen}
            autoHideDuration = {3000}
            onClose = {this.snackbarClose}
            message = {<span id="message-id">{this.state.snackbarmsg}</span>}
            action = {[
            <IconButton key ="close"
            arial-label ="Close"
            color="inherit"
            onClick = {this.snackbarClose}>
                x
            </IconButton>
            ]}
            />

            <Modal
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Add Veggies
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                    <Row>
                        <Col sm = {6}>
                            <Form onSubmit = {this.handleSubmit}>
                                <Form.Group controlId = "VeggiesName">
                                    <Form.Label>Veggie Name</Form.Label>
                                    <Form.Control
                                    size = "lg"
                                    type = "text"
                                    name = "VeggiesName"
                                    required
                                    placeholder = "Veggies"
                                    />
                                </Form.Group>

                                <Form.Group  controlId = "DIS">
                                    <Form.Label>DIS</Form.Label>
                                    <Form.Control
                                        type = "text"
                                        name = "DIS"
                                        required
                                        placeholder = "mm-dd-yyyy"
                                    />
                                </Form.Group>
                                    

                                <Form.Group controlId = "VeggiesCountry">
                                    <Form.Label> VeggiesCountry</Form.Label>
                                    <Form.Control
                                        type = "text"
                                        name = "VeggiesCountry"
                                        required
                                        placeholder = "Country"
                                    />
                                </Form.Group>
                                    

                                <Form.Group controlId = "VeggiesPrice">
                                    <Form.Label> VeggiesPrice</Form.Label>
                                    <Form.Control
                                        type = "text"
                                        name = "VeggiesPrice"
                                        required
                                        placeholder = "Price"
                                    />
                                </Form.Group>

                                <Form.Group>
                                    <Button variant = 'primary' type = "submit"> 
                                        Add veggies
                                    </Button>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row> 
        
            </Modal.Body>
            <Modal.Footer>
                <Button variant  = "danger" onClick={this.props.onHide}>Close</Button>
            </Modal.Footer>
            </Modal>
        </div>
                

        )
    }
}