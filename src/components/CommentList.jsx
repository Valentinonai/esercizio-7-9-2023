import { Component } from "react";
import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";

class CommentList extends Component {
  render() {
    return (
      <ListGroup>
        {this.props.review.map((elem, index) => (
          <SingleComment
            comment={elem.comment}
            key={`List-${index}`}
            elementId={elem._id}
            index={index}
            Reload={this.props.Reload}
          />
        ))}
      </ListGroup>
    );
  }
}
export default CommentList;
