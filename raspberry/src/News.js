import axios from 'axios';
import React, { Component } from 'react';
import NewsCard from './NewsCard'

class News extends Component{

    constructor(props) {
        super(props);
        this.state = {
           news : [],
          }
      }

    componentDidMount(){
        const url = "https://newsapi.org/v2/top-headlines?country=fr&apiKey=b0a74e04a2fe424fb6ad3ade544b6a02";
        axios.get(url)
            .then(response=>{
                this.setState({
                    news: response.data.articles,
                })
            });
    }


    renderNews = () => {
        let listNews = [];
        let content = this.state.news.map((news, index) => {
            listNews.push(
                <NewsCard
                    auteur = {news.source.name}
                    titre  = {news.title}
                    url    = {news.url}
                    img    = {news.urlToImage}
                    contenu= {news.content}
                    description = {news.description}
                    date   = {news.publishedAt}
                ></NewsCard>
            );
        });
        content = listNews;
        return content;
      }

    render(){
        return(
            <div>
                <br></br>
                {this.renderNews()}

                powered by <a href = "https://newsapi.org/" >newsapi.org</a>
            </div>
        );
    }
}

export default News;