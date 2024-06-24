import React, { Component } from "react";
// import { Redirect } from "react-router-dom";

export default function requireAuth(ComposedComponent) {
  class RequireAuth extends Component {
    constructor(props) {
      super(props);

      this.state = {
        isAuthenticated: !!localStorage.getItem("token"), // Check if token exists in localStorage
      };
    }

    render() {
      if (!this.state.isAuthenticated) {
        console.log("Authenticated:", this.state.isAuthenticated);
        // Redirect to login if not authenticated
        navigate("/loginguru");
      } else {
        console.log("Authenticated:", this.state.isAuthenticated);
        // Render the composed component if authenticated
        // return <ComposedComponent {...this.props} />;
      }
    }
  }

  return RequireAuth;
}
