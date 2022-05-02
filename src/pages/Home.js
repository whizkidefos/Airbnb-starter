import React, { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import banner from '../images/banner.jpg';
import logo from '../images/airbnb.png';
import { ConnectButton, DatePicker, Icon, Input, Select } from "web3uikit";

const Home = () => {
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());
  const [destination, setDestination] = useState('New York');
  const [guests, setGuests] = useState(2);

  return (
    <>
      <div className="container" style={{ backgroundImage: `url(${banner})` }}>
        <div className="containerGradient"></div>
      </div>
      <div className="topBanner">
        <figure>
          <img className="logo" src={logo} alt='logo' />
        </figure>
        <div className="tabs">
          <div className="selected">Places to stay</div>
          <div>Experiences</div>
          <div>Online Experiences</div>
        </div>
        <div className="lrContainers">
          <ConnectButton />
        </div>
      </div>
      
      <div className="tabContent">
        <div className="searchFields">

          <div className="inputs">
            Location
            <Select
              defaultOptionIndex={0}
              onChange={(data) =>  setDestination(data.label) }
              options={[
                {
                  id: 'ny',
                  label: 'New York'
                },
                {
                  id: 'ln',
                  label: 'London'
                },
                {
                  id: 'mc',
                  label: 'Manchester'
                },
                {
                  id: 'ld',
                  label: 'Leeds'
                },
              ]}
            />
          </div>
          <div className="vl" />

          <div className="inputs">
            Check in
            <DatePicker
              id = 'CheckIn'
              onChange={(event => setCheckIn(event.date))}
            />
          </div>
          <div className="vl" />

          <div className="inputs">
            Checkout out
            <DatePicker
              id = 'CheckOut'
              onChange={(event => setCheckOut(event.date))}
            />
          </div>
          <div className="vl" />

          <div className="inputs">
            Guest
            <Input
              value={2}
              name='AddGuests'
              type='number'
              onChange={(event) => setGuests(Number(event.target.value))}
            />
          </div>

          <div className="searchButton">
            <Icon fill="#ffffff" size={24} svg='search' />
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Home;
