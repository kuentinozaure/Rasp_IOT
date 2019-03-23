import axios from 'axios';
import React, { Component } from 'react';

class MeteoCard extends Component{

    constructor(props) {
        super(props);
      }

    render(){
        return(
        <div>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-4 mt-5">
                        <div class="card text-center">
                        {this.props.location} {this.props.region} {this.props.country}
                        <img class="card-img-top" src={this.props.image} width="200" height="200"/>
                            <div class="card-body" id="card">
                                Il fait     : {this.props.type}<br></br>
                                Temperature : {this.props.temp}°C<br></br>
                                Humidité    : {this.props.humidity}<br></br>
                                Le vent est a   : {this.props.vent}km/h<br></br>
                            </div>
                            <div class="card-footer">
                                {this.props.time}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default MeteoCard;