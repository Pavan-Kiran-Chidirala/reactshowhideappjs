// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {
    isFirstName: false,
    isLastName: false,
  }

  firstNameShow = () => {
    this.setState(prevState => {
      if (prevState.isFirstName === false) {
        return {isFirstName: true, isLastName: prevState.isLastName}
      }
      return {isFirstName: false, isLastName: prevState.isLastName}
    })
  }

  lastNameShow = () => {
    this.setState(prevState => {
      if (prevState.isLastName === false) {
        return {isFirstName: prevState.isFirstName, isLastName: true}
      }
      return {isFirstName: prevState.isFirstName, isLastName: false}
    })
  }

  render() {
    const {isFirstName, isLastName} = this.state
    return (
      <div className="container">
        <h1 className="main-heading">Show/Hide</h1>
        <div className="inner-container">
          <div className="holder">
            <button type="button" className="btn" onClick={this.firstNameShow}>
              Show/Hide FirstName
            </button>
            {isFirstName && (
              <div className="show-hide">
                <p className="name">Joe</p>
              </div>
            )}
          </div>
          <div className="holder">
            <button type="button" className="btn" onClick={this.lastNameShow}>
              Show/Hide LastName
            </button>
            {isLastName && (
              <div className="show-hide">
                <p className="name">Jonas</p>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
