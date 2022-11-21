import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import AppsIcon from '@mui/icons-material/Apps';
import {Avatar} from '@mui/material'
import Homelogo from '../assets/Google-Logo.svg'
import Search from "../components/Search";

function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__header--left">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="home__header--right">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <AppsIcon></AppsIcon>
          <Avatar></Avatar>
        </div>
      </div>
      <div className="home__body">
        <img src={Homelogo} alt="binge sake" />
        <div className="home__input--container">
          <Search></Search>
        </div>
      </div>
    </div>
  );
}

export default Home;
