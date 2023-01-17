import React from 'react';

import {
  Hamburger,
  Magnify,
  NotifyActive,
  Saved,
  Profile,
  Exit,
} from '../images';

import './nav.scss';

export default function nav() {
  return (
    <nav className="nav">
      <input type="checkbox" className="nav__toggle" id="hamburger" hidden />
      <ul className="nav__lblock">
        <li className="nav__hamburger">
          <label htmlFor="hamburger">
            <img src={Hamburger} alt="" />
          </label>
        </li>
        <li className="nav__logo">
          <a href="index.html">JOBPLUS</a>
        </li>
      </ul>

      <ul className="nav__icons">
        <li>
          <a href="listings.html">
            <img src={Magnify} alt="" />
          </a>
        </li>
        <li>
          <a href="notification.html">
            <img src={NotifyActive} alt="" />
          </a>
        </li>
        <li>
          <a href="saved_jobs.html">
            <img src={Saved} alt="" />
            <span className="nav__savedcount">1</span>
          </a>
        </li>
        <li>
          <a href="profile.html">
            <img src={Profile} alt="" />
          </a>
        </li>
        <li>
          <a href="login.html">
            <img src={Exit} alt="" />
          </a>
        </li>
      </ul>

      <ul className="nav__dropl">
        <a href="index.html">
          <li>Home</li>
        </a>
        <a href="listings.html">
          <li>Job listing</li>
        </a>
        <a href="applications.html">
          <li>Job applications</li>
        </a>
      </ul>
    </nav>
  );
}
