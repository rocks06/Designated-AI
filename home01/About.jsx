import React, { Component } from "react";
import { HashLink } from "react-router-hash-link";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      points: [
        {
          id: 1,
          title: "Clarity over complexity",
          desc: "No technical jargon. No tool worship. Just clear frameworks you can apply Monday morning, regardless of your tech stack.",
        },
        {
          id: 2,
          title: "Trust before scale",
          desc: "Learn how to run small, safe experiments that build confidence. Your first AI win should take weeks, not quarters.",
        },
        {
          id: 3,
          title: "People first, always",
          desc: "AI should free your team, not replace them. This book shows you how to automate friction so humans can focus on what matters.",
        },
      ],
    };
  }

  render() {
    return (
      <section className="about-section section-padding bg-grey" id="about">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            {/* LEFT: image */}
            <div className="col-lg-5 col-md-12">
              <div className="about-img">
                <img
                  src="assets/images/banner/book.png"
                  alt="Designated AI book mockup"
                  className="img-fluid"
                />
              </div>
            </div>

            {/* RIGHT: copy */}
            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <span className="subheading">Why this book</span>

                <h2>AI is moving fast. Most SMBs are standing still.</h2>

                <p>
                  Not because they lack ambition. Because no one has shown them how to start without the hype, the jargon, or the risk.
                </p>

                <ul className="list-unstyled mt-4">
                  {this.state.points.map((item) => (
                    <li key={item.id} className="d-flex mb-3">
                      <i
                        className="fa fa-check mt-1 me-3"
                        style={{ color: "#e74c3c" }}
                        aria-hidden="true"
                      />
                      <div>
                        <h5 className="mb-1">{item.title}</h5>
                        <p className="mb-0">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-4">
                  <HashLink to="#waitlist" className="btn btn-main">
                    Download sample
                  </HashLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;