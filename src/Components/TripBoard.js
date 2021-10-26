import React, { Component } from 'react'
import { Container,Row } from 'react-bootstrap'
import TripItem from './TripItem'

export default class TripBoard extends Component {

    constructor(props) {
        super(props);
    
       
    }
    
    

    render() {
        let output = <div>please wait data to load</div>;

            if(this.props.trips.length > 0) {
                output = this.props.trips.map((trip)=> {return <TripItem type={this.props.board} id={trip.detailsId} trip={trip}></TripItem>});
            }

        return (
            <Container>
                <Row>
                    {output}
                </Row>
            </Container>
        )
    }
}
