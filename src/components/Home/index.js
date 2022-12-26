// Write your code here

import {Component} from 'react'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'
import './index.css'

class Home extends Component {
  state = {isLoggedIn: true}

  render() {
    const {mess} = this.props
    const {isLoggedIn} = this.state

    return (
      <div className="container">
        <div className="inner-container">
          <Message mess={mess} />
          <Login />
          <Logout />
        </div>
      </div>
    )
  }
}

Home.defaultProps = {
  mess: 'Please Login',
}

export default Home
