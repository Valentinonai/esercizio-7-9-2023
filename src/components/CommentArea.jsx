import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import { Alert, Spinner } from "react-bootstrap";

class CommentArea extends Component {
  state = {
    review: { comment: [], rate: [], elementId: [] },
    working: true,
    alert: {
      stato: false,
      variant: "info",
      message: "",
    },
    select: false,
  };
  Reload = () => {
    this.props.toggle();
  };
  componentDidMount = async () => {
    try {
      const risp = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.iD}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGY5YjRlMThkM2Q0OTAwMTRjZmQ3ZDQiLCJpYXQiOjE2OTQwODYzNjksImV4cCI6MTY5NTI5NTk2OX0.UMzNavOw7SiIyoEXvdOL_L1zqNhivjz340RkCbm8TtM",
        },
      });
      if (risp.ok) {
        const libro = await risp.json();
        console.log(libro);
        this.setState({
          review: {
            comment: libro.map((x) => x.comment),
            rate: libro.map((x) => x.rate),
            elementId: libro.map((x) => x._id),
          },
          alert: {
            stato: true,
            variant: "info",
            message: "Caricamento Completato",
          },
        });
        setTimeout(() => {
          this.setState({ alert: { stato: false, variant: "info", message: "" } });
        }, 2500);
      } else {
        this.setState({
          alert: {
            stato: true,
            variant: "danger",
            message: `Errore:${risp.status}`,
          },
        });
        setTimeout(() => {
          this.setState({ alert: { stato: false, variant: "danger", message: "" } });
        }, 2500);
      }
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ working: false });
    }
  };

  render() {
    return (
      <>
        {this.state.working && <Spinner animation="border" />}
        {!this.state.working && (
          <>
            {this.state.alert.stato && <Alert variant={this.state.alert.variant}>{this.state.alert.message}</Alert>}

            <CommentList review={this.state.review} Reload={this.Reload} select={this.state.select} />
            <AddComment iD={this.props.iD} Reload={this.Reload} />
          </>
        )}
      </>
    );
  }
}
export default CommentArea;
