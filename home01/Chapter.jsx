import React, { Component } from 'react';
import { ContainerLeft, ContainerMid, ContainerRight } from './chapters/index';

class Chapter extends Component {
  render() {
    return (
      <section className="chapter-section section-padding bg-white" id="inside">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-8">
              <div className="center-heading mb-60">
                <h3 className="heading-title">What’s inside the book</h3>
                <p>
                Strategy frameworks that work Monday morning
                </p>
                </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-12">
                <ContainerLeft />
            </div>

            <div className="col-lg-6 col-md-12">
                <ContainerMid />
            </div>
            </div>
        </div>
      </section>
    );
  }
}

export default Chapter;