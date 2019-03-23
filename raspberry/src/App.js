import React, { Component } from 'react';
import Meteo from './Meteo'
import HomePage from './HomePage'
import News  from './News'

class App extends Component {
  constructor(props) {
    super(props);

    this.showWeather = this.showWeather.bind(this);
    this.showAccueil = this.showAccueil.bind(this);
    this.showNews    = this.showNews.bind(this);

    this.state = {
      weather : false,
      accueil : true,
      news    : false,
    }
  }

  showWeather(){
    this.setState({
      weather : true,
      accueil : false,
      news    : false,
    });
  }

  showAccueil(){
    this.setState({
      accueil : true,
      weather : false,
      news    : false,
    });
  }

  showNews(){
    this.setState({
      accueil : false,
      weather : false,
      news    : true,
    });
  }

  renderTab(){
    if(this.state.accueil == true){
      return(<HomePage></HomePage>);
    }else if(this.state.weather == true){
      return(<Meteo></Meteo>);
    }else if(this.state.news == true){
      return(<News></News>)
    }
  }

  render() {
    return (
      <div >
      <nav className="navbar navbar-expand-white  navbar-dark bg-white">
        <a className="nav-link " onClick={this.showAccueil} >
          <i className="fa fa-home"></i>
          ACCEUIL
          <span className="sr-only">(current)</span>
        </a>
        <a className="nav-link" onClick={this.showWeather}>
          <i className="fa fa-home"></i>
          METEO
          <span className="sr-only">(current)</span>
        </a>
        <a className="nav-link" onClick={this.showNews}>
          <i className="fa fa-home"></i>
          NEWS
          <span className="sr-only">(current)</span>
        </a>
      </nav>
        {this.renderTab()}
      </div>
    );
  }
}

export default App;
