import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import image from "../image.jpeg";

function Home() {
  return (
    <div className="home">
        <img src= {image} style= {{width:1000,height:1000}}/>
      <div className="about">
        <h2>Helping the Planet Using AI</h2>
        <div className="prompt" style= {{padding: 100}}>
          <EmailIcon src= ""/>
          <GithubIcon src = ""/>
        </div>
      </div>
      <div className="skills">
        <h1></h1>
        <ol className="list">
          <li className="item">
            <h2>Vision Statement</h2>
            <span>
            Detecting trash metrics with nerual networks. It helps finding trash hotspots easier, to lower the climate impact caused by waste.
            </span>
          </li>
          <li className="item">
            <h2>Our Research
            </h2>
            <span>
            Texas litter survey. This survey is done around every 6 years and we believe we can leverage Google Streetview in order to give preliminary analysis.
            </span>
          </li>
          <li className="item">
            <h2>Milestones we Want to reach</h2>
            <span>
              We want to leverage the tools we have to extend the process of scanning and decting waste to possibly extract resources out of it, by recycling and properly dispose.
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;