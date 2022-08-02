import './index.css'

const CommentItem = props => {
  const {commentDetails} = props
  const {name, comment} = commentDetails
  return (
    <li>
      <h1>hiii</h1>
      <p>{name}</p>
      <p>{comment}</p>
    </li>
  )
}
export default CommentItem
