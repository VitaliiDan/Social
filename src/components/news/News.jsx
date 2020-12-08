import react, {Component} from 'react';
import classes from './News.module.css';
import covidnews from './img/covid.jpg';

const News = (props) => {
    return (
        <div className={classes.news}>
            <img src={covidnews} alt="covid"/>
        </div>
    )
}

export default News;