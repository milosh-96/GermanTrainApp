
import React, { Component } from 'react'
import { Container,Row,Col, NavLink} from 'react-bootstrap';
import {FormControl,InputGroup } from 'react-bootstrap';
import {Button} from 'react-bootstrap';

import { Nav } from 'react-bootstrap';

export default class TripSearch extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            input:"",
            locations:[]
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }
    
    handleInputChange(e) {
        this.setState({input:e.target.value});

        if(e.target.value.length > 2) {
            //alert("search");
            this.getLocationsFromApi(e.target.value);
        }
    }

    getLocationsFromApi(input) {
        fetch('https://api.deutschebahn.com/freeplan/v1/location/'+input)
        .then((response)=>response.json()).then((data)=>this.setState({locations:data}));
    }

    submitLocation(location) {
        this.setState({input:location.name,locations:[]});
        this.props.handleLocationSubmit(location);
    }

    render() {
        var suggestions = <div></div>;
        if(this.state.locations.length > 0){
            suggestions = this.state.locations.map((location)=>{
            return <NavLink id={location.id} onClick={()=>this.submitLocation(location)}>{location.name}</NavLink>
        });
    }
        return (
            <div>
                <Container>
                    <Row>
                        <Col md="8">
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1">Station/Stop</InputGroup.Text>
                                    <FormControl
                                    placeholder="Hamburg Hbf"
                                    aria-label="Station/Stop"
                                    aria-describedby="basic-addon1"
                                    onChange={this.handleInputChange}
                                    value={this.state.input}
                                    />
                            </InputGroup>

                            <Nav className="flex-column">
                               {suggestions}
                            </Nav>
                        </Col>
                        <Col md="4">
                            <Button>Search</Button>
                        </Col>
                    </Row>
                </Container>  
            </div>
        )
    }
}
