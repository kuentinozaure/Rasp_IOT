import React, { Component } from 'react';

class HomePage extends Component{

    constructor(props) {
        super(props);
      }

    render(){
        return(
        <div>
            <br></br>
            <div class="jumbotron">
                <div class="container text-center">
                    <h1 class="page-header">Bienvenue</h1>
                    <p class="lead">Consulter les actualités ou la meteo</p>
                </div>
            </div>
        </div>
        );
    }
}
export default HomePage;
