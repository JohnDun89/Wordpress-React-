import React, { Component } from "react";
import Link from "next/link";
import Head from "next/head";
import Menu from "./Menu.js";
import { Config } from "../config.js";
import stylesheet from "../src/styles/style.scss";
import ParticleContainer from "./ParticleContainer.js";
import Particles from "react-particles-js";

class Header extends Component {
  constructor() {
    super();
  }

  render() {
    return <ParticleContainer />;
  }
}

export default Header;
