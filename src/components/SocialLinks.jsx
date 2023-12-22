import React from "react";
import linkedinIcon from "../assets/icon-social-linkedin.svg";
import instagramIcon from "../assets/icon-social-instagram.svg";
import twitterIcon from "../assets/icon-social-twitter.svg";
import youtubeIcon from "../assets/icon-social-youtube.svg";
import pinterestIcon from "../assets/icon-social-pinterest.svg";

const SocialLinks = () => {
  return (
    <div className="flex gap-x-1">
      <a href="#">
        <img src={linkedinIcon}></img>
      </a>
      <a href="#">
        <img src={instagramIcon}></img>
      </a>
      <a href="#">
        <img src={twitterIcon}></img>
      </a>
      <a href="#">
        <img src={youtubeIcon}></img>
      </a>
      <a href="#">
        <img src={pinterestIcon}></img>
      </a>
    </div>
  );
};

export default SocialLinks;
