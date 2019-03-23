import axios from 'axios';
import React, { Component } from 'react';
import MeteoCard from './MeteoCard';
import MeteoPrevision from './MeteoPrevision'

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
                tab.push(<div class="col-md-2 "></div>)
                tab.push(
                    <MeteoPrevision
                        location = {response.data.location.name}
                        region   = {response.data.location.region}
                        country  = {response.data.location.country}
                        nextDay  = {response.data.forecast.forecastday[0].date}
                        maxTemp  = {response.data.forecast.forecastday[0].day.maxtemp_c}
                        minTemp  = {response.data.forecast.forecastday[0].day.mintemp_c}
                        avgTemp  = {response.data.forecast.forecastday[0].day.avgtemp_c}
                        maxvent  = {response.data.forecast.forecastday[0].day.maxwind_kph}
                        avghumifity = {response.data.forecast.forecastday[0].day.avghumidity}
                        img      = {response.data.forecast.forecastday[0].day.condition.icon}
                        type     = {response.data.forecast.forecastday[0].day.condition.text}
                    ></MeteoPrevision>
                )
                this.setState({
                    tab: tab,
                });     
            });
    }
    render(){
        return(
            <div>
                <br></br>
                <div class="row">
                    <div class="col-md-1 "></div>
                    {this.state.tab}
                    <div class="col-md-1 "></div>
                </div>
            </div>
        );
    }
}

export default Meteo;