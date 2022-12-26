// Write your code here
import {Component} from 'react'
import './index.css'
import Message from '../Message'

class Login extends Component {
  state = {isLoggedIn: true}

  loggedIn = () => {
    this.setState(prevState => ({
      isLoggedIn: !prevState.isLoggedIn,
    }))
    return <Message mess="Welcome User" />
  }

  render() {
    const {isLoggedIn} = this.state
    const loginButtonElement = (
      <button type="button" onClick={this.loggedIn} className="button1">
        Login
      </button>
    )

    const result = isLoggedIn ? loginButtonElement : null
    return result
  }
}

export default Login
