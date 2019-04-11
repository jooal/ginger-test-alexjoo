import React from 'react';
import API from '../../utils/API';
import "../../styles/Articles.css";
import Titles from "./Titles";


class Articles extends React.Component {
    state = {
        articles: []
    }


    componentDidMount() {
        API().then(d => {
            d.json().then(({ articles }) => {
                console.log(articles)
                this.setState({ articles: articles})
                
            })
        })
    }




    render() {
        return (
            <div>
                <Titles />
                <div class="container-articles">
                    <div class="row">
                        <h3 className="header">Recent Articles</h3>
                    </div>
                    <div class="row learn-row-main">
                        <div className="col- latest_news_card">
                            {/* static code until API will display results, need to map through results to display on cards */}
                            {this.state.articles.map(({author, title, content, url }) => {
                                return (
                                <div>
                                <a href={url} target="_blank" rel="noopener noreferrer">{title}</a>
                                <p className = "author">{author}</p>
                                <p className = "content">{content}</p>
                                <hr></hr>
                                </div>
                                )
                            })}
                        </div>
                      
                    </div>

                </div>
            </div>
        )
    }
}

export default Articles