import { Link } from "gatsby"
import React, { Component } from "react"
import "./Header.css"

// const menu = document.querySelector('#MobileMenu');
// const menuLinks = document.querySelector('HeagerGroup');

// menu.addEventListener('click', function() {
//   menu.classList.toggle('is-active');
//   menu.classList.toggle('active')
// })

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false
    };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({ menu: !this.state.menu })
  }

  render() {
    const show = (this.state.menu) ? "show" : "";

    const ScreenWidth = window.innerWidth

    // const menuOpen = document.querySelector("#MenuBurger")
    // const menuLinks = document.querySelector(".HeaderGroup")

    // if (menuLinks) {
    //   menuLinks.addEventListener("click", function () {
    //     menuLinks.toggle("active")
    //   })
    // }

    return (
      <div className={"Header" + show}>
        <div className="NavBar">
          <div className="Logo">
            <Link to="/">
              <img src={require("../images/logo-designcode.svg")} width="30" />
            </Link>
          </div>
          <div>
            {" "}
            {ScreenWidth < 768 ? (
              <button className="MenuToggle" id="MobileMenu" onClick={this.toggleMenu}></button>
            ) : (
              ""
            )}
          </div>
          {/* <div className="MenuToggle" id="MobileMenu" onClick={this.toggleMenu}>
        <span className="Bar"></span>
        <span className="Bar"></span>
        <span className="Bar"></span>
      </div> */}
          <div className="HeaderGroup">
            <Link to="/courses">Coursesss</Link>
            <Link to="/downloads">Downloads</Link>
            <Link to="/workshops">Workshops</Link>
            <Link to="/buy">
              <button>Buy</button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
