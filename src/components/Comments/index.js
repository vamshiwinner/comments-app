import {Component} from 'react'

import {v4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {
    commentList: [],
    inputName: '',
    inputComment: '',
  }

  onRenderComment = () => {
    const {commentList} = this.state
    console.log(commentList)

    return commentList.map(eachComment => (
      <CommentItem key={eachComment.id} commentDetails={eachComment} />
    ))
  }

  onInput = event => {
    this.setState({
      inputName: event.target.value,
    })
  }

  onArea = event => {
    this.setState({
      inputComment: event.target.value,
    })
  }

  onAddButton = event => {
    event.preventDeafult()

    const {inputName} = this.state
    const {inputComment} = this.state
    const initialContainerBackgroundClassName = `${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`
    const newComment = {
      id: v4(),
      name: inputName,
      comment: inputComment,
      initialClassName: initialContainerBackgroundClassName,
    }
    this.setState(prevState => ({
      commentList: [...prevState.commentList, newComment],
      inputName: '',
      inputComment: '',
    }))
  }

  render() {
    const {inputName, inputComment} = this.state
    return (
      <div className="bg-container">
        <div className="cart-container">
          <h1>Comments</h1>

          <div className="comment-image-container">
            <form className="form" onSubmit={this.onAddButton}>
              <p className="pera">Say something about 4.0 Technologies</p>
              <input
                onChange={this.onInput}
                className="input"
                type="text"
                placeholder="Your Name"
                value={inputName}
              />
              <textarea
                onChange={this.onArea}
                placeholder="Your Comment"
                rows="6"
                value={inputComment}
              />
              <button className="button" type="submit">
                Add Comment
              </button>
            </form>
            <img
              alt="comment"
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            />
          </div>
          <hr className="hr-line" />
          <div className="comment-section">
            <p className="">
              <span className="span">0</span>
            </p>
            <p>Comments</p>
          </div>
          <ul>{this.onRenderComment()}</ul>
        </div>
      </div>
    )
  }
}
export default Comments
