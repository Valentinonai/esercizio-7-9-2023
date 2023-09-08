import { Component } from "react";
import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";

class CommentList extends Component {
  render() {
    return (
      <ListGroup>
        {this.props.review.comment.map((elem, index) => (
          <SingleComment
            comment={elem}
            key={`List-${index}`}
            iD={this.props.iD}
            elementId={this.props.review.elementId}
            index={index}
            Reload={this.props.Reload}
          />
        ))}
      </ListGroup>
    );
  }
}
export default CommentList;
