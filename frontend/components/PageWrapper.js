import React from "react";
import { Config } from "../config.js";
import ParticleContainer from "./ParticleContainer";

const PageWrapper = Comp =>
  class extends React.Component {
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
