import React, { Component, createContext } from 'react';

export const AuthContext = createContext();

class AuthContextProvider extends Component {
  state = {
    isAuthenticated: false
  };

  toggleAuth = () => {
    this.setState({ isAuthenticated: !this.state.isAuthenticated });
  };

  render() {
    return (
      <AuthContext.Provider
        value={{ ...this.state, toggleAuth: this.toggleAuth }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
    // <button onClick={this.toggleAuth}>SignIn</button>;
  }
}

export default AuthContextProvider;
