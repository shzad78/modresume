// ########## Import Dependencies Here ##########
import React, { Fragment, Component } from "react";
// import { } from 'prop-types';
import Slider from "react-slick";

// ########## Import Components Here ##########

const Testimonials = props => {
  const { testimonials } = props;

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  function renderTestimonials() {
    const { testimonials } = props;
    return testimonials.sectionData.map(item => (
      <div key={item.id}>
        <h4 className="testimonial-text">{item.testimonialText}</h4>
        <h5 className="testimonial-detail">
          {item.testimonialPersonName} / {item.testimonialIndustry}
        </h5>
      </div>
    ));
  }

  return (
    <Fragment>
      <div id="testimonials">
        <div className="image">
          <div className="overlay">
            <div className="wrapper">
              <h3 className="testimonials-heading">
                {testimonials.sectionHeading}
              </h3>
              <div className="testimonials-container">
                <Slider {...settings}>{renderTestimonials()}</Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Testimonials;
