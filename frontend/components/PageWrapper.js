import React from "react";
import { Config } from "../config.js";
import ParticleContainer from "./ParticleContainer";
import "particles.js/particles";
const particlesJS = window.particlesJS;

const PageWrapper = Comp =>
  class extends React.Component {
    componentDidMount() {
      //particles.js github page says to load package like so:
      particlesJS.load("particles-js", "assets/particles.json", function() {
        console.log("callback - particles.js config loaded");
      });
    }

    static async getInitialProps(args) {
      const headerMenuRes = await fetch(
        `${Config.apiUrl}/wp-json/menus/v1/menus/header-menu`
      );
      const headerMenu = await headerMenuRes.json();
      return {
        headerMenu,
        ...(Comp.getInitialProps ? await Comp.getInitialProps(args) : null)
      };
    }

    render() {
      return (
        <div>
          <ParticleContainer />

          <Comp {...this.props} />
        </div>
      );
    }
  };

export default PageWrapper;
