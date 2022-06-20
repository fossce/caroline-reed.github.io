import React from "react";
import { Header, Burger, BurgerBar, Nav, NavMenu, NavLink } from "./NavbarElements";
import "../../pages/index.css";

// import arrowPic from '../../pages/images/arrow.png';
// import arrowPicR from '../../pages/images/arrowR.png';
// import arrowPicW from '../../pages/images/arrowWhite.png';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


var bars;
var links;

var navMenu;
var bMenu;
var bar1;
var bar2;
var bar3;


class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }

    this.toggleNav = this.toggleNav.bind(this);
    this.openNav = this.openNav.bind(this);
    this.closeNav = this.closeNav.bind(this);
  }

  componentDidMount() {
    // home = document.getElementById('homeLink');
    // work = document.getElementById('workLink');
    // about = document.getElementById('aboutLink');
    links = document.getElementsByClassName("navLink");
    bars = document.getElementsByClassName("burgerBar");
    navMenu = document.getElementById("navMenu");
    bMenu = document.getElementById("burgerMenu");
    bar1 = document.getElementById("burger1");
    bar2 = document.getElementById("burger2");
    bar3 = document.getElementById("burger3");

    for (var n = 0; n < links.length; n++) {
      links[n].addEventListener("click", function() {
        if (document.getElementsByClassName("active")[0]) {
          var current = document.getElementsByClassName("active");
          current[0].className = current[0].className.replace("active", "");
        }
        this.className += " active";
        console.log("ACTIVE!")
      });
    }
  }

  // animateBullet(c) {
  //   if (!links[c].classList.contains('active')) {
  //     bars[c].style.backgroundImage = `url(${arrowPic})`;
  //     bars[c].style.filter = 'drop-shadow(0.1rem 0rem 0rem darkgray)';
  //   }
  //   bars[c].style.backgroundSize = 'contain';
  //   bars[c].style.backgroundPosition = 'center';
  //   bars[c].style.backgroundRepeat = 'no-repeat';
  //   bars[c].style.animation = "bounceBar 0.5s alternate infinite";
  // }
  //
  // stopBullet(c) {
  //   if (links[c].classList.contains('active')) {
  //     bars[c].style.animation = '';
  //   } else {
  //     bars[c].style.backgroundImage = '';
  //     bars[c].style.backgroundSize = '';
  //     bars[c].style.backgroundPosition = '';
  //     bars[c].style.backgroundRepeat = '';
  //     bars[c].style.animation = '';
  //   }
  // }

  closeNav() {
    var barlist = [navMenu, bMenu, bar1, bar2, bar3];
    navMenu.style.transform = 'translateX(26rem)';
    bMenu.style.filter = 'none';
    bar1.style.width = '100%';
    bar1.style.transform = 'translate(0rem, 0rem) rotate(0deg)';
    // bar1.style.borderRadius = '0.5rem';
    bar3.style.opacity = "100%";
    bar2.style.width = '100%';
    bar2.style.transform = 'translate(0rem, 0rem)';
    bar3.style.width = '100%';
    bar3.style.transform = 'translate(0rem, 0rem) rotate(0deg)';
    // bar1.style.backgroundColor = 'dodgerblue';
    // bar2.style.backgroundColor = 'dodgerblue';
    // bar3.style.backgroundColor = 'yellow';
    for ( var b = 0; b < bars.length; b++ ) {
      bars[b].style.height = '0.35rem';
    }
    for ( var bb = 0; bb < barlist.length; bb++ ) {
      barlist[bb].style.transition = 'all 1s';
    }
  }

  openNav() {
    var barlist = [navMenu, bMenu, bar1, bar2, bar3];
    navMenu.style.transform = 'translateX(0rem)';
    bar3.style.opacity = "0%";
    bar1.style.transform = 'translate(.75rem, 0.85rem) rotate(-45deg)';
    bar2.style.transform = 'translate(.75rem, 0rem) rotate(45deg)';
    // bar3.style.transform = 'translate(1.5rem, -0.35rem) rotate(-45deg)';
    bar1.style.width = '50%';
    bar2.style.width = '50%';
    // bar3.style.width = '50%';
    for ( var b = 0; b < bars.length; b++ ) {
      bars[b].style.height = '0.4rem';
      bars[b].style.backgroundColor = 'white';
    }
    for ( var bl = 0; bl < barlist.length; bl++ ) {
      barlist[bl].style.transition = 'all 1s';
    }
  }


  toggleNav() {
    if (navMenu.style.transform === 'translateX(0rem)') {
      this.closeNav();
    } else {
      this.openNav()
    }
  }


  render() {
    return (
      <>
        <Header>
          <div id="headerTitle">
            <h2>Caroline Reed</h2>
            <h3>Web Developer | Writer</h3>
          </div>

          <Nav id="navTop">
            <Burger id="burgerMenu" onClick={this.toggleNav}>
              <BurgerBar className="burgerBar" id="burger1"></BurgerBar>
              <BurgerBar className="burgerBar" id="burger2"></BurgerBar>
              <BurgerBar className="burgerBar" id="burger3"></BurgerBar>
            </Burger>
            <NavMenu id="navMenu">
              <NavLink
                id="homeLink" className="navLink" to="/"
                onClick={this.toggleNav}>
                <span className="navText">Home</span>
              </NavLink>
              <NavLink
                id="workLink" className="navLink" to="/work"
                onClick={this.toggleNav}>
                <span className="navText">Work</span>
              </NavLink>
              <a href="https://hubpages.com/@lizlilith"
                id="blogNavLink" className="navLink"
                alt="my blog"><span className="navText">Blog</span>
              </a>
              <NavLink
                id="aboutLink" className="navLink" to="/about"
                onClick={this.toggleNav}>
                <span className="navText">About</span>
              </NavLink>
            </NavMenu>
          </Nav>
        </Header>
      </>
    );
  }
};

export default Navbar;
