import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom';
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa6";



const Nav = () => {
  return (
    <>
      <div className="motherLay">
        <div className="container">
          <div className="menuRow">
            <div className="logo">
              <img src="images/Foodieland..png" alt="logo" />
            </div>
            <div className="menus">
              <ul>
                <li><Link to="">Home</Link></li>
                <li><Link to="">Recipes</Link></li>
                <li><Link to="">Blog</Link></li>
                <li><Link to="/LayoutTwo/Register">Contact</Link></li>
                <li><Link to="">About us</Link></li>
              </ul>
            </div>
            <div className="socials">
              <Link to=""><TiSocialFacebook /></Link>
              <Link to=""><TiSocialTwitter /></Link>
              <Link to=""><FaInstagram /></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}            

export default Nav