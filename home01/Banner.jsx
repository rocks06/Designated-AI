import React, { Component } from "react";
import { HashLink } from "react-router-hash-link";

class Banner extends Component {
  render() {
    return (
      <section className="banner pb-80" id="home">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-12 col-lg-6">
              <div className="banner-content">
                <span className="subheading">
                <strong>Coming 2026</strong>
                </span>

                <h1>
                  The No-Hype Guide to <span>AI</span> for Business Leaders
                </h1>

                <p>
                  Practical strategies to automate, scale, and win with AI.
                  Written by operators, for operators. No code required.
                </p>

                <div className="d-flex flex-wrap gap-2 mt-4">
                  <HashLink to="#waitlist" className="btn btn-main">
                    Download sample
                  </HashLink>

                  <HashLink to="#about" className="btn btn-main-tp">
                    Learn more
                  </HashLink>
                </div>

                <p className="mt-3 mb-0">
                  Written by operators who've built, scaled, and led real businesses.
                </p>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="banner-img">
                <img
                  src="assets/images/banner/book.png"
                  alt="Designated AI book cover"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Banner;