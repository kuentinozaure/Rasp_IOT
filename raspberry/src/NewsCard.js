import axios from 'axios';
import React, { Component } from 'react';

class NewsCard extends Component{

    constructor(props) {
        super(props);
      }

    render(){
        return(
            <div className="row">
                <div className="col-md-1 "></div>
                
                <div className="col-md-10 ">
                <br></br>
                <div className="card text-center">
                    {this.props.titre}
                    <img className="card-img-top" src={this.props.img} width="200" height="200"/>
                    
                    <li>{this.props.description}</li>
                    <div className="card-body" id="card">
                        <li>{this.props.contenu}<br></br><br></br></li>
                        
                    </div>
                    <div class="card-footer">
                        <a href={this.props.url}>lien vers l'article</a><br></br>
                        publié le {this.props.date}<br></br>
                        par {this.props.auteur}
                    </div>
                </div>
                <br></br>
            </div>
            
                <div class="col-md-1 "></div>
            </div>
        );
    }
}

export default NewsCard;