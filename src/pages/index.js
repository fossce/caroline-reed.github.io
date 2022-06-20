import React from "react";
import "./index.css";

import { Link } from "react-router-dom";

// import ReactCountryFlag from "react-country-flag";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
// import { far } from '@fortawesome/free-regular-svg-icons';


library.add(fab, fas);

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helloCount: 0,
    }
    // toggleWorkLang(lang) = this.toggleWorkLang(lang).bind(this);
  }

  componentDidMount() {
    var hello = document.getElementById("helloWorld");
    var myWork = document.getElementById("aboutLinksAll");

    const intervalIdInner = setInterval(() => {
      var l = this.state.helloCount;

      if (l === 0) {
        hello.style.opacity = '100%';
        hello.style.transition = 'all 1s';
      } else if (l === 2) {
        hello.style.opacity = '0%';
        hello.style.transition = 'all 1s';
      } else if (l === 3) {
        myWork.style.opacity = '100%';
        myWork.style.transition = 'all 1s';
      }

      if (this.state.helloCount < 3) {
        this.setState(prevState => {
          return {
            helloCount: prevState.helloCount + 1,
          }
        });
      }
  }, 1000);
}


toggleWorkLang(e, lang) {
  this.setState(prevState => {
    return {
      helloCount: prevState.helloCount + 1,
    }
  });

  console.log(lang);

  var langLinks = document.getElementsByClassName("aboutLinkLang");
  var allLangNames = document.getElementsByClassName("allLangs");

  for (var t = 0; t < langLinks.length; t++) {
    langLinks[t].style.opacity = "0%";
    langLinks[t].style.display = "none";
    allLangNames[t].style.filter = "none";
  }

  if (lang === 'en') {
    document.getElementById("enAbout").style.display = 'block';
    document.getElementById("enAbout").style.opacity = "100%";
    document.getElementById("enAbout").style.transition = "all 0.75s";
    document.getElementById("enAll").style.filter = "drop-shadow(0rem 0rem 0.35rem silver)";
  } else if (lang === 'es') {
    document.getElementById("esAbout").style.display = 'block';
    document.getElementById("esAbout").style.opacity = "100%";
    document.getElementById("esAbout").style.transition = "all 0.75s";
    document.getElementById("esAll").style.filter = "drop-shadow(0rem 0rem 0.35rem silver)";
  } else if (lang === 'fr') {
    document.getElementById("frAbout").style.display = 'block';
    document.getElementById("frAbout").style.opacity = "100%";
    document.getElementById("frAbout").style.transition = "all 0.75s";
    document.getElementById("frAll").style.filter = "drop-shadow(0rem 0rem 0.35rem silver)";
  } else if (lang === 'ua') {
    document.getElementById("uaAbout").style.display = 'block';
    document.getElementById("uaAbout").style.opacity = "100%";
    document.getElementById("uaAbout").style.transition = "all 0.75s";
    document.getElementById("uaAll").style.filter = "drop-shadow(0rem 0rem 0.35rem silver)";
  } else {
    document.getElementById("enAbout").style.display = 'block';
    document.getElementById("enAbout").style.opacity = "100%";
    document.getElementById("enAbout").style.transition = "all 0.75s";
    document.getElementById("enAll").style.filter = "drop-shadow(0rem 0rem 0.35rem silver)";
  }
  // switch(lang) {
  //   case "en":
  //     return "Projects"
  //   case "es":
  //     return "Proyectos"
  //   case "fr":
  //     return "Projets"
  //   case "cn":
  //     return "项目"
  //   case "uk":
  //     return "Проекти"
  //   default:
  //     return "Projects"
  // }
  console.log("toggle!");

}


  render() {
    return (
      <div className="main">
        <section id="homeBody"  >
          <h1>Home Page</h1>

          <section id="helloWorld"  >
            <h2>Greetings</h2>
            <div className="helloLang">Hello</div>
          </section>

          <section id="aboutLinksAll"  >
            <h2>See my work</h2>
            <div id="enAbout" className="aboutLinkLang">
              <Link id="enWrk" className="aboutLinkItem workLinkLang" to="/work">
                My Work{' '}
                <span className="playIcon">
                  <FontAwesomeIcon icon={["fas", "caret-right"]} size='sm' />
                </span>
              </Link>
              <Link id="enRes" className="aboutLinkItem resLinkLang" to="/about">
                R&eacute;sum&eacute;{' '}
                <span className="playIcon">
                  <FontAwesomeIcon icon={["fas", "caret-right"]} size='sm' />
                </span>
              </Link>
            </div>
          </section>
        </section>
      </div>
    );
  }
}

export default Home;
