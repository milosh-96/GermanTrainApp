import React, { Component } from 'react'

export default class Journey extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             data:[]
        }

        this.getData = this.getData.bind(this);
    }
    

    getData() {
        fetch('https://api.deutschebahn.com/freeplan/v1/journeyDetails/'+this.props.id)
        .then(response=>{return response.json()})
        .then((data)=>{this.setState({data:data})});
    }

    componentDidMount() {
        this.getData();
    }

    render() {

        var output = this.state.data.map((item)=>{return <div>{item.stopName}</div>});

        return (
            <div>
                {output}
            </div>
        )
    }
}
