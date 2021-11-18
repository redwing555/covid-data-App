import React from 'react';
import { AiFillTwitterSquare, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import '../styles/footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <div className="copyright-names">
        <div className="creators">
          <p>Made by Houssam Hichami</p>
          <div className="icons">
            <Link to={{ pathname: 'https://github.com/redwing555' }} target="_blank" rel="noopener noreferrer"><AiFillTwitterSquare className="git fab fa-github-square" /></Link>
            <Link to={{ pathname: 'https://twitter.com/' }} target="_blank" rel="noopener noreferrer"><AiFillGithub className="twitter fab fa-twitter-square" /></Link>
            <Link to={{ pathname: 'https://www.linkedin.com/in/houssam-hichami/' }} target="_blank" rel="noopener noreferrer"><AiFillLinkedin className="linkedin fab fa-linkedin" /></Link>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <small>&#169; Copyright 2021: Houssam. Hichami </small>
  </footer>
);

export default Footer;
