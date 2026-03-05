import React, { Component } from "react";

class Features extends Component {
  render() {
    const perks = [
  {
    id: 1,
    icon: "fa fa-file-alt",
    title: "Early Chapter Previews",
    desc: "Read select chapters before official launch.",
  },
  {
    id: 2,
    icon: "fa fa-clone",
    title: "AI Readiness Toolkit",
    desc: "Templates and assessments to evaluate your business.",
  },
  {
  id: 3,
  icon: "fa fa-tag",
  title: "Launch Day Discount",
  desc: "Exclusive pricing for early supporters",
  },
  {
  id: 4,
  icon: "fa fa-user-friends",
  title: "Private Community",
  desc: "Connect with fellow operators adopting AI",
  },
  ];

    return (
      <section className="feature-section section-padding bg-white" id="early-access">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-heading center-heading text-center mb-60">
                <h3 className="heading-title">Join early and get exclusive access</h3>
                <p>Be first in line for launch updates and practical tools.</p>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            {perks.map((p) => (
              <div className="col-lg-3 col-md-6 d-flex" key={p.id}>
                <div className="feature-style-2 mb-4 h-60">
                  <i className={p.icon}></i>
                  <h4>{p.title}</h4>
                  <p>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Features;