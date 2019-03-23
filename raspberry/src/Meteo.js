import axios from 'axios';
import React, { Component } from 'react';
import MeteoCard from './MeteoCard';

class Meteo extends Component{

    constructor(props) {
        super(props);
        this.state = {
           tab : []
          }
      }

    componentDidMount(){
        const url = "http://api.apixu.com/v1/forecast.json?key=10868311f3654f5d9c105024192402&q=Toulouse";
        axios.get(url)
            .then(response=>{
                let tab = [];
                tab.push(
                    <MeteoCard 
                        location = {response.data.location.name}
                        region   = {response.data.location.region}
                        country  = {response.data.location.country}
                        time     = {response.data.location.localtime}
                        temp     = {response.data.current.temp_c}
                        type     = {response.data.current.condition.text}
                        vent     = {response.data.current.wind_kph}
                        image    = {response.data.current.condition.icon}
                        humidity = {response.data.current.humidity}
                    ></MeteoCard>
                )
                this.setState({
                    tab: tab,
                });     
            });
    }
    render(){
        return(
            <div>
                {this.state.tab}
            </div>
        );
    }
}

export default Meteo;