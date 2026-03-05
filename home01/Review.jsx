import React, { Component } from "react";
import Slider from "react-slick";

class Review extends Component {
  constructor(props) {
    super(props);
    this.sliderRef = React.createRef();
  }

  handlePrev = () => {
    if (this.sliderRef.current) {
      this.sliderRef.current.slickPrev();
    }
  };

  handleNext = () => {
    if (this.sliderRef.current) {
      this.sliderRef.current.slickNext();
    }
  };

  render() {
    const testimonials = [
      {
        id: 1,
        stars: 5,
        text: "As a consultant, I needed a framework I could teach clients in one session. The Build vs. Buy vs. Delegate model is now part of every engagement I run.",
        name: "Amanda Kowalski",
        title: "Managing Partner, Operations Advisory Firm",
        initials: "AK",
      },
      {
        id: 2,
        stars: 5,
        text: "I've pitched AI to our board three times and failed. This book gave me the language and the framework to make a case they could actually understand and approve.",
        name: "Sandra Chen",
        title: "VP of Operations, Regional Healthcare Services",
        initials: "SC",
      },
      {
        id: 3,
        stars: 5,
        text: "The First-Win Strategy chapter alone saved us from a $200K platform purchase we weren't ready for. This should be required reading before any AI investment.",
        name: "Robert DaSilva",
        title: "Founder & CEO, E-commerce Brand ($15M revenue)",
        initials: "RD",
      },
      {
        id: 4,
        stars: 5,
        text: "We spent 18 months talking about AI. After reading this, we deployed our first automation in 3 weeks. The 4A Framework finally gave us a structure that made sense.",
        name: "Michael Lawson",
        title: "COO, Industrial Distribution Co. (280 employees)",
        initials: "ML",
      },
    ];

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: false,
      pauseOnHover: true,
      dotsClass: "slick-dots custom-dots",
    };

    return (
      <section className="testimonial section-padding bg-grey" id="testimonial">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9">
              <div className="section-heading center-heading text-center mb-60">
                <span className="subheading">EARLY READERS</span>
                <h3 className="heading-title">What Leaders Are Saying</h3>
                <p>Real feedback from operators and leaders reading early chapters.</p>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-10">
              <Slider ref={this.sliderRef} {...settings}>
                {testimonials.map((item) => (
                  <div key={item.id}>
                    <div className="testimonial-content">
                      <div className="stars mb-3">
                        {[...Array(item.stars)].map((_, i) => (
                          <i key={i} className="fa fa-star"></i>
                        ))}
                      </div>
                      
                      <p className="testimonial-quote">"{item.text}"</p>
                      
                      <div className="testimonial-author">
                        <div className="author-avatar">
                          {item.initials}
                        </div>
                        <div className="author-info">
                          <h5>{item.name}</h5>
                          <p>{item.title}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>

              <div className="slider-controls">
                <button
                  type="button"
                  className="slider-btn prev-btn"
                  onClick={this.handlePrev}
                  aria-label="Previous"
                >
                  <i className="fa fa-arrow-left"></i>
                </button>
                <button
                  type="button"
                  className="slider-btn next-btn"
                  onClick={this.handleNext}
                  aria-label="Next"
                >
                  <i className="fa fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Review;