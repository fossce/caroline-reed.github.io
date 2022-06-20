import React from "react";
import "./index.css";

// import { NavLink as Link } from "react-router-dom";

import vocabpic from "./images/vocabapp.png";
import faroutpic from "./images/farout.png";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fab } from '@fortawesome/free-brands-svg-icons';
// import { fas } from '@fortawesome/free-solid-svg-icons';

// library.add(fab, fas);

class Work extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="main">
        <section id="myWork"  >
          <h2>My Work</h2>
          <section id="workGrid"  >
            <div className="myProject" id="vocabapp">
              <a href="https://caroline-reed.github.io/vocab-app"
                className="projectLink">
                <img src={vocabpic}
                width="1032" height="595" alt="Vocab Builder start page" />
                <br />Vocab Builder
              </a>
            </div>

            <div className="myProject" id="faroutapp">
              <a href="https://caroline-reed.github.io/far-out"
                className="projectLink">
                <img src={faroutpic}
                width="1067" height="596" alt="Far Out Start Menu" />
                <br />Far Out
              </a>
            </div>

            <div className="myProject" id="cafeapp">
              <a href="https://labelletasse.heroku-app.com"
                className="projectLink">
                <br />La Belle Tasse Caf&eacute;
              </a>
            </div>

            <div className="myProject" id="landscapeapp">
              <a href="https://caroline-reed.github.io/landscape-supply"
                className="projectLink">
                <br />Landscape Supply
              </a>
            </div>
          </section>
        </section>


      </div>
    );
  }
}

export default Work;
