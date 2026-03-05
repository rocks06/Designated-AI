import React, { Component } from "react";

class Cta extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      isSubmitting: false,
      message: "",
      messageType: "" // 'success' or 'error'
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    
    const { email } = this.state;
    
    if (!email) {
      this.setState({
        message: "Please enter your email address",
        messageType: "error"
      });
      return;
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      this.setState({
        message: "Please enter a valid email address",
        messageType: "error"
      });
      return;
    }

    this.setState({ isSubmitting: true, message: "" });

    try {
      // Replace this URL with your Google Apps Script Web App URL
      const scriptURL = 'https://script.google.com/macros/s/AKfycbzTX3T-AmUMMRV1ek43UhIDkScOFUX5yFimdiRZUoxIVj16STNmykp2kGnbVzC2JEow/exec';
      
      const formData = new FormData();
      formData.append('email', email);
      formData.append('timestamp', new Date().toISOString());

      const response = await fetch(scriptURL, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        this.setState({
          email: "",
          message: "Success! Check your inbox for the sample chapter.",
          messageType: "success",
          isSubmitting: false
        });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
      this.setState({
        message: "Something went wrong. Please try again.",
        messageType: "error",
        isSubmitting: false
      });
    }
  };

  handleChange = (e) => {
    this.setState({ email: e.target.value });
  };

  render() {
    const { email, isSubmitting, message, messageType } = this.state;

    return (
      <section className="cta pb-100" id="waitlist">
        <div className="container">
          <div className="row justify-content-center cta-inner">
            <div className="col-lg-8">
              <div className="cta-content text-center">
                <span className="subheading2">Early access</span>

                <h2 className="heading-title">
                  Start building AI leverage — before everyone else does
                </h2>

                <p style={{ marginBottom: "25px" }}>
                  Get a free sample chapter and join the waitlist for launch updates and practical tools.
                </p>

                <form className="subsribe" onSubmit={this.handleSubmit}>
                  {message && (
                    <div 
                      className={`alert ${messageType === 'success' ? 'alert-success' : 'alert-danger'} mb-3`}
                      role="alert"
                    >
                      {message}
                    </div>
                  )}

                  <div className="form-group mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email address"
                      value={email}
                      onChange={this.handleChange}
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <button 
                    className="btn btn-main w-100" 
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Download sample"}
                  </button>

                  <p style={{ marginTop: "15px", opacity: 0.8 }}>
                    No spam. Unsubscribe anytime.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Cta;