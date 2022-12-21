import React from "react";


class Logout extends React.Component {
  
  constructor() {
    super();
    this.state = { isLoggedIn: true };
    this.handleClick = this.handleClick.bind(this);
  }

  

  handleClick() {
    this.setState((prevState) => {
      return { isLoggedIn: !prevState.isLoggedIn };
      // negate whatever isLoggedIn returns
    });
  }
  

  render() {
    let currentStatus = this.state.isLoggedIn ? "logged in" : "logged out";
    let buttonStatus = this.state.isLoggedIn ? "Log Out" : "Log In";



    return (
      <div>
        <h1> You're currently {currentStatus} </h1>
        <button className="log-in" onClick={this.handleClick}>
          {buttonStatus}
        </button>
      </div>
    );
  }
}

export default Logout
