import axios from 'axios';
import React, { Component } from 'react';

class MeteoPrevision extends Component{

    constructor(props) {
        super(props);
    }

    render(){
        return(
                <div className="col-md-4 ">
                    <div className="card text-center">
                        {this.props.location} {this.props.region} {this.props.country}
                        <img className="card-img-top" src={this.props.img} width="200" height="200"/>
                        <div className="card-body" id="card">
                                Il fera {this.props.type}<br></br>
                                Il fera au minimum    : {this.props.minTemp}°C<br></br>
                                Il fera au maximum  : {this.props.maxTemp}°C<br></br>
                                Il fera en moyenne    : {this.props.avgTemp}°C<br></br>
                                Humidité : {this.props.avghumifity}<br></br>
                                Le vent ira a  : {this.props.maxvent}km/h<br></br>
                        </div>
                            <div className="card-footer">
                               Prevision pour le {this.props.nextDay}
                        </div>
                    </div>
                </div>
        );
    }
}

export default MeteoPrevision;