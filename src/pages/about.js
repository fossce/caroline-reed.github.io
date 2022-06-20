import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import resPDF from "./reedcResume.pdf";
// import ReactCountryFlag from "react-country-flag";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fab, fas);


class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helloCount: 0,
    }
    this.openRes = this.openRes.bind(this);
    this.closeRes = this.closeRes.bind(this);
  }


  openRes = () => {
    var fullRes = document.getElementsByClassName("fullRes");
    document.getElementById("openFullRes").style.display = "none";
    document.getElementById("closeFullRes").style.display = "block";

    for (var i = 0; i < fullRes.length; i++) {
      fullRes[i].style.opacity = '100%';
      fullRes[i].style.transition = 'all 1s';
    }
  }


  closeRes = () => {
    var fullRes = document.getElementsByClassName("fullRes");
    document.getElementById("openFullRes").style.display = "block";
    document.getElementById("closeFullRes").style.display = "none";

    for (var i = 0; i < fullRes.length; i++) {
      fullRes[i].style.opacity = '0%';
      fullRes[i].style.transition = 'all 1s';
    }
  }


  toggleSkills = () => {
    console.log("Toggle Skills Button pressed!");
    if (this.skillOpac1 === "0%") {
      this.setState({
        skillOpac1: "100%",
        skillOpac2: "0%"
      })
    } else if (this.skillOpac2 === "0%") {
        this.setState({
          skillOpac1: "0%",
          skillOpac2: "100%"
        })
    }
  }

  componentDidMount = () => {
    var aboutIntro = document.getElementById("aboutIntro");
    var aboutItem = document.getElementsByClassName("aboutTitleItem");
    var myRes = document.getElementById("myResume");
  }

  render() {
    return (
      <div className="main">
        <section id="aboutMe"  >
          <h1>About Me</h1>
          <section id="myResume"  >
            <section id="bio" className=" resSection">
              <h3>Summary</h3>

              <p id="bioHeading">Innovation{' '}
                <FontAwesomeIcon icon={['fas', 'caret-right']} size='xs' />
                {' '}Accessibility{' '}
                <FontAwesomeIcon icon={['fas', 'caret-right']} size='xs' />
                {' '}Community
              </p>

              <p>I'm a teacher-turned-developer driven to empower
                individuals and groups to share ideas and aspire toward
                growth.
              </p>

              <p>It's my mission to create audience-conscious, on-brand
                tech solutions that engage and inspire positive action.
              </p>
            </section>

            <section id="contact" className=" resSection">
              <h3>Contact</h3>

              <div id="workWithMe">
                <h4>Work with Me!</h4>
                <div id="aboutSocial">
                  <a href="mailto:reedce9@gmail.com?subject=Greetings">
                    <FontAwesomeIcon icon={["fas", "envelope"]} /></a>
                  <a href="https://github.com/caroline-reed">
                    <FontAwesomeIcon icon={["fab", "github-alt"]} /></a>
                  <a href="https://www.linkedin.com/in/carolinereedc/">
                    <FontAwesomeIcon icon={["fab", "linkedin"]} /></a>
                </div>
              </div>

              <div id="downloadRes">
                <h4>CV /<br />R&eacute;sum&eacute;</h4>
                <Link id="resLink" to={resPDF}>
                  <FontAwesomeIcon icon={['fas', 'download']} size='2x' />
                </Link>
              </div>
            </section>

            <section id="techSkills" className="resSection">
              <h4>TECHNICAL SKILLS</h4>
              <ul id="techSkillsGrid" className=" grid">
                <li><FontAwesomeIcon icon={['fab', 'html5']} size='4x' /></li>
                <li><FontAwesomeIcon icon={['fab', 'css3-alt']} size='4x' /></li>
                <li><FontAwesomeIcon icon={['fab', 'js']} size='4x' /></li>
                <li><FontAwesomeIcon icon={['fab', 'react']} size='4x' /></li>
                <li><FontAwesomeIcon icon={['fab', 'python']} size='4x' /></li>
                <li><FontAwesomeIcon icon={['fab', 'php']} size='4x' /></li>
                <li><FontAwesomeIcon icon={['fab', 'node']} size='4x' /></li>
                <li><FontAwesomeIcon icon={['fas', 'database']} size='4x' /><br />MySQL</li>
                <li><FontAwesomeIcon icon={['fab', 'git']} size='4x' /></li>
                <li><FontAwesomeIcon icon={['fab', 'windows']} size='4x' /></li>
                <li><FontAwesomeIcon icon={['fab', 'apple']} size='4x' /></li>
                <li><FontAwesomeIcon icon={['fab', 'linux']} size='4x' /></li>
              </ul>
            </section>

            <section id="softSkills" className="resSection">
              <div id="peopleSkills">
                <h4>PROFESSIONAL SKILLS</h4>
                <ul>
                  <li>Technical Writing</li>
                  <li>Data Analysis</li>
                  <li>Excel</li>
                  <li>Instructional Design</li>
                  <li>eLearning</li>
                  <li>LMS</li>
                  <li>Editing</li>
                  <li>Marketing</li>
                  <li>SEO</li>
                  <li>Social Media Management</li>
                </ul>
              </div>
            </section>


          </section>
        </section>
      </div>
     );
   }
}

export default About;
