import react, {Component} from 'react';
import classes from './Video.module.css';

const Video = (props) => {
    return (
        <div className={classes.video}>
            <iframe
                    src="https://www.youtube.com/embed/cnVPm1dGQJc"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
            </iframe>
        </div>
    )
}

export default Video;