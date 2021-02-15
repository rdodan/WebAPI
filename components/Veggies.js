import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import {Button, ButtonToolbar} from 'react-bootstrap';
import {AddVeggiesModal} from './AddVeggiesModal';
import {EditVeggiesModal} from './EditVeggiesModal';

export class Veggies extends Component {

    constructor(props) {
        super(props);
        this.state = {vgs:[], editModalShow: false, addModalShow : false};
    }

    // calls the refreshList function to fill up the table with the initial values
    componentDidMount(){
        this.refreshList();
    }

    refreshList() {
        fetch('https://localhost:44328/api/Veggies')
        .then(response=> response.json())
        .then(data=> {
            this.setState({vgs:data});
        });
    }

    componentDidUpdate() {
        this.refreshList();
    }

    deleteVeggies(vgid) {
        if (window.confirm('Are you sure you want to delete this item?')) {
            fetch('https://localhost:44328/api/Veggies/' + vgid, {
                method: 'DELETE',
                headers: {
                    'Accept' : 'application/jason',
                    'Content-type' : 'application/jason'
                }
            })
        }
    }

    render () {
        const {vgs, vgid, vgname, vgdis, vgcountry, vgprice} = this.state;
        let addModalClose =() => this.setState({addModalShow:false});
        let editModalClose =() => this.setState({editModalShow:false});

        return (
            <div>

                <div className="mt-3 d-flex justify-content-md-center">
                    <h4>
                    Here you can add, edit, or delete your fruits from your cart!
                    </h4>
                    
                </div>
                
                <Table className = "mt-4" striped bordered hover size ="sm">
                    <thead>
                        <tr>
                            <th>Veggies ID</th>
                            <th>Veggies Name</th>
                            <th>DIS</th>
                            <th>Veggies Country</th>
                            <th>Veggies Price</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {vgs.map(vg=>
                        <tr key = {vg.VeggiesID}>
                            <td >{vg.VeggiesID}</td>
                            <td>{vg.VeggiesName}</td>
                            <td>{vg.DIS}</td>
                            <td>{vg.VeggiesCountry}</td>
                            <td>{vg.VeggiesPrice}</td>
                            <td>
                                <ButtonToolbar>
                                    <Button
                                    className ="mr-2" variant = "info"
                                    onClick = {() =>this.setState({editModalShow: true, vgid: vg.VeggiesID, vgname: vg.VeggiesName, vgdis: vg.VeggiesDIS, vgcountry: vg.VeggiesCountry, vgprice: vg.VeggiesPrice })}> 
                                    Edit
                                    </Button> 

                                    <Button className = "mr-2"
                                    onClick = {()=> this.deleteVeggies(vg.VeggiesID)} 
                                    variant = "danger"
                                    >
                                    Delete
                                    </Button>
                                    <EditVeggiesModal
                                    show = {this.state.editModalShow}
                                    onHide = {editModalClose}
                                    vgid = {vgid}
                                    vgname = {vgname}
                                    vgdis = {vgdis}
                                    vgcountry = {vgcountry}
                                    vgprice = {vgprice}
                                    />
                                </ButtonToolbar>
                            </td>
                        </tr>
                        )}
                    </tbody>

                </Table>

                <ButtonToolbar>
                    <Button variant = "primary" 
                    onClick = {()=> this.setState({addModalShow: true})}>
                        Add to the cart
                    </Button>
                    <AddVeggiesModal
                    show = {this.state.addModalShow}
                    onHide = {addModalClose}
                    />
                </ButtonToolbar>

            </div>
                

        )

    }


}