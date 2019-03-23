import React, { Component } from 'react';
import Meteo from './Meteo'

class App extends Component {
  constructor(props) {
    super(props);

    this.showWeather = this.showWeather.bind(this);
    this.showAccueil = this.showAccueil.bind(this);

    this.state = {
      weather : false,
      accueil : true,
    }
  }

  showWeather(){
    this.setState({
      weather : true,
      accueil : false,
    });
  }

  showAccueil(){
    this.setState({
      accueil : true,
      weather : false,
    });
  }

  renderTab(){
    if(this.state.accueil == true){
      return(<div>dfdfd</div>);
    }else if(this.state.weather == true){
      return(<Meteo></Meteo>);
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <nav className="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <a className="nav-link" onClick={this.showAccueil}>
                  <i className="fa fa-home"></i>
                  Accueil
                  <span className="sr-only">(current)</span>
                  </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" onClick={this.showWeather}>
                  <i className="fa fa-home"></i>
                  METEO
                  <span className="sr-only">(current)</span>
                  </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  <i className="fa fa-home"></i>
                  ////
                  <span className="sr-only">(current)</span>
                  </a>
              </li>
            </ul>
          </div>
        </nav>
        </header>
        {this.renderTab()}
      </div>
    );
  }
}

export default App;
