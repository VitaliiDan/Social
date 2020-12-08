import react, {Component} from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Footer from "./components/footer/Footer";
import Dialogs from "./components/dialogs/Dialogs";
import News from "./components/news/News";
import Video from "./components/video/Video";

const App = () => {
    return (
        <BrowserRouter>
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path='/profile' component={Profile}/>
                <Route path='/dialogs' component={Dialogs}/>
                <Route path='/news' component={News}/>
                <Route path='/video' component={Video}/>
            </div>
            <Footer/>
        </div>
        </BrowserRouter>
    );
}

export default App;
