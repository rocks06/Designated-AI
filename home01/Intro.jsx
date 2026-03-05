import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Intro extends Component {
  render() {
    return (
      <section className="pt-100 center-about bg-grey">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-heading text-center">
                <span>Early Access</span>
                <h2>Join early and get exclusive access</h2>
                <p className="mt-3">
                  Be first in line for launch updates and practical tools to start
                  applying AI in your business — without the hype.
                </p>

                <ul className="list-unstyled mt-4">
                  <li>Early chapter previews before launch</li>
                  <li>AI readiness toolkit and assessments</li>
                  <li>Exclusive launch-day discount</li>
                  <li>Private community of operators and advisors</li>
                </ul>

                <Link to="#signup" className="btn btn-main mt-4">
                  Join the Waitlist
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Intro;