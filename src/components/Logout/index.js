// Write your code here
import {Component} from 'react'
import './index.css'
import Message from '../Message'

class Logout extends Component {
  state = {isLoggedOut: true}

  loggedOut = () => {
    this.setState(prevState => ({
      isLoggedOut: !prevState.isLoggedOut,
    }))
  }

  render() {
    const {isLoggedOut} = this.state
    const logoutButtonElement = (
      <button type="button" onClick={this.loggedOut} className="button1">
        Log out
      </button>
    )
    const result = isLoggedOut ? logoutButtonElement : null

    return result
  }
}
export default Logout
