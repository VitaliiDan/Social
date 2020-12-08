import react, {Component} from 'react';
import classes from './post.module.css';
import avabee from './img/avabee.webp';

const Post = (props) => {
    return (
        <div className={classes.post}>
            <img src={avabee} alt=""/>
            <p>{props.message}</p>
        </div>
    )
}

export default Post;