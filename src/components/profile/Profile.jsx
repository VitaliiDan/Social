import react, {Component} from 'react';
import classes from './Profile.module.css';
import space from './img/space.jpg';
import avabee from './img/avabee.webp';
import Post from "./post/post";

const Profile = () => {
    return (
        <div className={classes.content}>
            <img src={space} alt=""/>
            <div className={classes.userInfo}>
                <img className={classes.ava} src={avabee} alt=""/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consequatur dolorem enim eveniet
                    illo labore, nihil officia pariatur possimus rerum?</p>
            </div>
            <div className={classes.newMessage}>
                <p><input type="text"/></p>
                <button>add message</button>
            </div>
                <div className={classes.postWrapper}>
                    <Post message='Lorem ipsum dolor sit amet, consectetur adipisicing' />
                    <Post message='nihil officia pariatur possimus rerum?' />
                    <Post message='officia pariatur possimus rerum?' />
                </div>
        </div>
    );
}

export default Profile;