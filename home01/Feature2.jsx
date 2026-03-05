import React, { Component } from "react";

class Feature2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      features: [
        {
          id: 1,
          icon: "fa fa-check",
          title: "SMB owners and founders",
          text: "Who know AI matters but don't know where to start",
        },
        {
          id: 2,
          icon: "fa fa-check",
          title: "Operations and functional leaders",
          text: "Responsible for making AI actually work",
        },
        {
          id: 3,
          icon: "fa fa-check",
          title: "Non-technical executives",
          text: "Tired of hype and ready for honest guidance",
        },
        {
          id: 4,
          icon: "fa fa-check",
          title: "Business advisors and consultants",
          text: "Who need a practical framework for clients",
        },
      ],
    };
  }

  render() {
    return (
      <section className="feature-2 section-padding bg-white" id="who">
        <div className="container">
          <div className="row align-items-start">
            {/* LEFT */}
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="section-heading mb-4">
                <span className="subheading">Who This Is For</span>
                <h3 className="heading-title">Built for leaders who build companies</h3>
              </div>

              <ul className="list-unstyled mb-0">
                {this.state.features.map((data) => (
                  <li key={data.id} className="d-flex mb-3">
                    <i
                      className={data.icon}
                      style={{ marginTop: 6, marginRight: 12 }}
                      aria-hidden="true"
                    />
                    <div className="feature-text">
                      <h4 style={{ marginBottom: 4 }}>{data.title}</h4>
                      <p style={{ marginBottom: 0 }}>{data.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT */}
              <div className="col-lg-6" style={{ marginTop: 170 }}>
              <div
                style={{
                  borderRadius: 14,
                  background: "#fff",
                  border: "1px solid rgba(0,0,0,0.06)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
                  padding: "32px",
                }}
              >
                <h4 style={{ marginBottom: 12 }}>Not for Technologists</h4>
                <p style={{ marginBottom: 0 }}>
                  Not for technologists. If you want code tutorials or model architectures, this
                  isn’t your book. This is for leaders who want to deploy AI, not build it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Feature2;