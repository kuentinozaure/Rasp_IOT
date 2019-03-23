import axios from 'axios';
import React, { Component } from 'react';

class MeteoCard extends Component{

    constructor(props) {
        super(props);
      }

    render(){
        return(
            <div className="col-md-4 ">
                <div className="card text-center">
                    {this.props.location} {this.props.region} {this.props.country}
                    <img className="card-img-top" src={this.props.image} width="200" height="200"/>
                    <div className="card-body" id="card">
                        Il fait     : {this.props.type}<br></br>
                        Temperature : {this.props.temp}°C<br></br>
                        Humidité    : {this.props.humidity}<br></br>
                        Le vent est a   : {this.props.vent}km/h<br></br>
                    </div>
                    <div className="card-footer">
                        {this.props.time}
                    </div>
                </div>
            </div>
        );
    }
}

export default MeteoCard;