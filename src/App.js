import React, { Component, Fragment } from 'react'
import Header from './Components/Header'
import TripBoard from './Components/TripBoard'
import TripSearch from './Components/TripSearch'
import { Container,Col, Row,Button } from 'react-bootstrap'

export default class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      board:"arrivals",trips:[],loaded:false,
       location:{id:1,name:""}
    }
    this.handleLocationSubmit=this.handleLocationSubmit.bind(this);
    this.switchBoard=this.switchBoard.bind(this);
  }
  

  handleLocationSubmit(location) {
    this.setState({location:location});
    this.getData();
  }

  switchBoard(board) {
    this.setState({board:board});
    this.getData();
  }

  getData() {
    const yourDate = new Date()
    var request = 'https://api.deutschebahn.com/freeplan/v1/arrivalBoard/'
    +this.state.location.id+'?date='+yourDate.toLocaleDateString();

    if(this.state.board === "departures") {
        request = 'https://api.deutschebahn.com/freeplan/v1/departureBoard/'
        +this.state.location.id+'?date='+yourDate.toLocaleDateString();
    }
    
    console.log(request);
    fetch(request)
    .then((response)=>response.json())
    .then((data)=>this.setState({trips:data,loaded:true}));

    
  }


  render() {

    var heading;
    if(this.state.location.name) {
      heading =  <h2>{this.state.location.name}</h2>
    }
   
    return (
      <Fragment>
      <Header></Header>
      <TripSearch handleLocationSubmit={this.handleLocationSubmit}></TripSearch>
      <Container>
        <Row className="boardSelector">
          <Col md="6">
            <Button className="full-width-button" onClick={()=>this.switchBoard("arrivals")}>Arrivals</Button>
          </Col>
          <Col md="6">
           <Button className="full-width-button" onClick={()=>this.switchBoard("departures")}>Departures</Button>
           </Col>
        </Row>
        <Row>
          <TripBoard trips={this.state.trips} board={this.state.board} location={this.state.location}></TripBoard>
        </Row>
      </Container>
                   
    </Fragment>
    )
  }
}
