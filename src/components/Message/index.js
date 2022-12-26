// Write your code here
import {Component} from 'react'
import './index.css'

class Message extends Component {
  render() {
    const {mess} = this.props
    return <h1 className="login-message">{mess}</h1>
  }
}

export default Message
