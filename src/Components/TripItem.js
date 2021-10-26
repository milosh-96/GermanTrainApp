import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'

export default class TripItem extends Component {
   
   
    
    render() {
        let trip = this.props.trip;

        let output;
        let date = new Date(trip.dateTime);
        let dateOutput = date.toLocaleString("de-DE");
        if(this.props.type === "arrivals") {
            output = <div>
                <strong>From: {trip.origin}</strong>
                <p>Should Arrive At: {dateOutput}</p>
            </div>
        }
        if(this.props.type === "departures") {
           output = <div>
            <strong>To: {trip.origin}</strong>
            <p>Departure At: {dateOutput}</p>
        </div>
        }
        return (
            <Row>
               
                <Col md="12">
                  {output}
                
                </Col>
            </Row>
        )
    }
}
