import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <section className="footer pt-120">
        <div className="container">
          <div className="row align-items-start">
            <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
              <div className="widget footer-widget">
                <h5 className="widget-title">designated.ai</h5>
                <p className="mt-3 mb-0">
                  Practical AI strategies for business growth — without the hype.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 text-lg-end">
              <div className="footer-widget">
                <h5 className="widget-title">Get Access</h5>
                <p className="mt-3 mb-0">
                  Join the waitlist for early chapters, tools, and launch updates.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-btm">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="copyright">
                  <p className="mb-0">© 2026 designated.ai. All rights reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="fixed-btm-top">
          <a href="#top-header" className="js-scroll-trigger scroll-to-top">
            <i className="fa fa-angle-up"></i>
          </a>
        </div>
      </section>
    );
  }
}

export default Footer;