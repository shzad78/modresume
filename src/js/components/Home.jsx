// ########## Import Dependencies Here ##########
import React, { Fragment, Component } from "react";
// import { } from 'prop-types';
import { connect } from "react-redux";

// ########## Import Components Here ##########
import * as actions from "../actions";
import Hero from "./Hero";
import Features from "./Features";
import HowItWorks from "./HowItWorks";
import ResponsiveResume from "./ResponsiveResume";
import ReactifiedImpact from "./ReactifiedImpact";
import About from "./About";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Footer from "./Footer";
import Modal from "./Modal";

class Home extends Component {
  onScrollHandler = () => {
    const { stickyMenuActive, stickyMenuDeactive } = this.props;
    if (window.scrollY <= 100) {
      stickyMenuDeactive(window.scrollY);
    } else {
      stickyMenuActive(window.scrollY);
    }
  };

  componentWillMount() {
    const { loadApp } = this.props;
    loadApp();
  }

  componentDidMount() {
    window.addEventListener("scroll", this.onScrollHandler);
  }

  render() {
    const {
      hero,
      features,
      howItWorks,
      responsiveResume,
      reactifiedImpact,
      about,
      testimonials,
      contact,
      footer,
      isModalOpen,
      openModal,
      closeModal,
      stickyMenu,
      scrollY,
      sideMenu,
      sideMenuOpen,
      sideMenuClose
    } = this.props;
    return (
      <Fragment>
        <Hero
          hero={hero}
          openModal={openModal}
          closeModal={closeModal}
          stickyMenu={stickyMenu}
          sideMenu={sideMenu}
          sideMenuOpen={sideMenuOpen}
          sideMenuClose={sideMenuClose}
        />
        <Features features={features} />
        <HowItWorks howItWorks={howItWorks} />
        {isModalOpen && <Modal openModal={openModal} closeModal={closeModal} />}
        <ResponsiveResume responsiveResume={responsiveResume} />
        <ReactifiedImpact
          reactifiedImpact={reactifiedImpact}
          openModal={openModal}
          closeModal={closeModal}
        />
        <About about={about} />
        <Testimonials testimonials={testimonials} />
        <Contact contact={contact} />
        <Footer footer={footer} scrollY={scrollY} />
      </Fragment>
    );
  }
}

function mapStateToProps({
  loadAppReducer,
  showModalReducer,
  stickyMenuReducer,
  sideMenuReducer
}) {
  return {
    hero: loadAppReducer.data[0],
    features: loadAppReducer.data[1],
    howItWorks: loadAppReducer.data[2],
    responsiveResume: loadAppReducer.data[3],
    reactifiedImpact: loadAppReducer.data[4],
    about: loadAppReducer.data[5],
    testimonials: loadAppReducer.data[6],
    contact: loadAppReducer.data[7],
    footer: loadAppReducer.data[8],
    isModalOpen: showModalReducer.isModalOpen,
    stickyMenu: stickyMenuReducer.stickyMenu,
    scrollY: stickyMenuReducer.scrollY,
    sideMenu: sideMenuReducer.sideMenu
  };
}

export default connect(
  mapStateToProps,
  {
    loadApp: actions.loadApp,
    openModal: actions.openModal,
    closeModal: actions.closeModal,
    stickyMenuActive: actions.stickyMenuActive,
    stickyMenuDeactive: actions.stickyMenuDeactive,
    sideMenuOpen: actions.sideMenuOpen,
    sideMenuClose: actions.sideMenuClose
  }
)(Home);
