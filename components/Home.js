import React, {Component} from 'react';
import veggies from './veggies.jpeg';

export class Home extends Component {

    render () {

        return (
            <div>
                <div className = "mt-5 d-flex justify-content-center">
                    <h2> Welcome to the store!</h2>
                </div>

                <div>
                    <img className = "img-fluid mt-3" src = {veggies} alt = "Logo"/>
                </div>
            </div>
        )

    }


}