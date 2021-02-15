import React, {Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';

export class EditVeggiesModal extends Component {

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
            method: 'PUT',
            headers : {
                'Accept': 'application/json',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                VeggiesID: event.target.VeggiesID.value,
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
            Edit veggies
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
                <Row>
                    <Col sm = {6}>
                        <Form onSubmit = {this.handleSubmit}>

                        <Form.Group controlId = "VeggiesID">
                                <Form.Label>VeggiesID</Form.Label>
                                <Form.Control
                                size = "lg"
                                type = "text"
                                name = "VeggiesID"
                                required
                                disabled
                                defaultValue = {this.props.vgid}
                                placeholder = "ID"
                                />
                            </Form.Group>

                            <Form.Group controlId = "VeggiesName">
                                <Form.Label>Veggie Name</Form.Label>
                                <Form.Control
                                size = "lg"
                                type = "text"
                                name = "VeggiesName"
                                required
                                defaultValue = {this.props.vgname}
                                placeholder = "Type"
                                />
                            </Form.Group>

                            <Form.Group  controlId = "DIS">
                                <Form.Label>DIS</Form.Label>
                                <Form.Control
                                    type = "text"
                                    name = "DIS"
                                    required
                                    defaultValue = {this.props.vgdis}
                                    placeholder = "mm/dd/yyyy"
                                />
                            </Form.Group>
                                

                            <Form.Group controlId = "VeggiesCountry">
                                <Form.Label> VeggiesCountry</Form.Label>
                                <Form.Control
                                    type = "text"
                                    name = "VeggiesCountry"
                                    required
                                    defaultValue = {this.props.vgcountry}
                                    placeholder = "VeggiesCountry ..."
                                />
                            </Form.Group>
                                

                            <Form.Group controlId = "VeggiesPrice">
                                <Form.Label> VeggiesPrice</Form.Label>
                                <Form.Control
                                    type = "text"
                                    name = "VeggiesPrice"
                                    required
                                    defaultValue = {this.props.vgprice}
                                    placeholder = "VeggiesPrice ..."
                                />
                            </Form.Group>

                            <Form.Group>
                                <Button variant = 'primary' type = "submit"> 
                                    Save
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

