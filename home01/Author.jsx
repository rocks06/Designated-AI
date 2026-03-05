import React, { Component } from "react";

class Author extends Component {
  render() {
    return (
      <section className="authors-dark section-padding" id="author">
        <div className="container">
          <div className="row align-items-start">
            <div className="col-lg-5">
              <div className="authors-dark__left">
                <div className="authors-dark__imgWrap">
                  <img
                    src="assets/images/authors.png"
                    alt="Marcin, Tarik, and Jens"
                    className="img-fluid"
                  />
                </div>

                <div className="authors-dark__caption">
                  <strong>Marcin, Tarik, and Jens</strong>
                </div>

                <div className="authors-dark__line" />
              </div>
            </div>

            <div className="col-lg-7">
              <div className="authors-dark__right">
                <div className="authors-dark__kicker">MEET THE AUTHORS</div>

                <h2 className="authors-dark__title">Practitioners, not pundits</h2>

                <div className="authors-dark__names">
                  Marcin Ladowski, Tarik Safouan, and Jens Müller
                </div>

                <div className="authors-dark__bio">
                  <p>
                    <strong>Marcin</strong> built and ran his own business, then led and scaled
                    companies as a C-level executive. He has advised SMEs internationally on how
                    to grow, professionalize, and compete using technology that actually delivers
                    results.
                  </p>

                  <p>
                    <strong>Tarik</strong> leads the AI Center at Barry University and has applied
                    AI in high-performance environments from Formula 1 to professional sports.
                    He bridges cutting-edge research with real-world execution.
                  </p>

                  <p>
                    <strong>Jens</strong> brings deep engineering expertise from the automotive
                    industry, holding multiple patents and years of experience building scalable,
                    mission-critical systems.
                  </p>
                </div>

                <div className="authors-dark__callout">
                  Together, they cut through AI hype and focus on what matters: how businesses
                  really adopt, scale, and win with AI.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Author;