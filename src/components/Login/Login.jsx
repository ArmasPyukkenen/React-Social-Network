import React from 'react';
import { connect } from 'react-redux';
import {logIn, logOut} from '../../redux/auth-reducer';
import { compose } from 'redux';
import Loader from '../common/Loader/Loader';

class Login extends React.Component {

  state = {
    email: '',
    password: '',
    rememberMe: false
  }

  handleLogin(email, password, rememberMe, captcha) {
    this.props.logIn(email, password, rememberMe, captcha);
  }

  render() {
    return <div>
      {
      this.props.isAuth ?
      <>
        <h1>You are successfuly logged in!</h1>
        <button onClick={this.props.logOut}>Log out</button>
      </>
      :
      <>
        <h1>{this.props.isAuth ? "You are successfully logged in!" : "Please Log In!"}</h1>
        {this.props.isAuth && <button onClick={this.props.logout}>Log out</button>}
        <form onSubmit={this.handleLogin}>
          <input 
            type="email" 
            name="email" 
            placeholder="email" 
            value={this.state.email} 
            onChange={e => this.setState({email: e.target.value})}
          >
          </input>
          <input 
            type="password" 
            name="password"
            value={this.state.password} 
            onChange={e => this.setState({password: e.target.value})}
          >
          </input>
          <label htmlFor="rememberMe">Remember Me</label>
          <input 
            type="checkbox" 
            name="rememberMe"
            value={this.state.rememberMe} 
            onChange={e => this.setState({rememberMe: e.target.value})}
          >
          </input>
          <input 
            type="button" 
            value="Log in"
            onClick={ e => {
              this.handleLogin(this.state.email, this.state.password, this.state.rememberMe)
            }}
          />
        </form>
      </>
      }
    </div>
  }
}

const mapStateToProps = (state) => ({isAuth: state.auth.isAuth})

export default compose(
  (Component) => (props) => {
    if(props.isAuth === null) return <Loader/>;
    return <Component {...props} />
  },
  connect(mapStateToProps, {logIn, logOut})
)(Login);