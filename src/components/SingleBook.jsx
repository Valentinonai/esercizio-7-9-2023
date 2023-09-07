import { Component } from "react";
import { Badge, Card, Col } from "react-bootstrap";

class SingleBook extends Component {
  state = {
    selected: false,
    borderColor: "transparent",
  };
  toggleClass = () => {
    this.state.selected
      ? this.setState({ selected: false, borderColor: "transparent" })
      : this.setState({ selected: true, borderColor: "red" });
  };
  render() {
    return (
      <Col xs="12" md="4">
        <Card
          style={{
            overflow: "hidden",
            backgroundColor: "#9b9b9b",
            boxShadow: "0 0 2px 2px gray",
            borderColor: [this.state.borderColor],
          }}
        >
          <Card.Img
            variant="top"
            src={this.props.book.img}
            style={{ borderRadius: "0 0 5px 5px", boxShadow: "0 0 2px 2px black" }}
            onClick={this.toggleClass}
          />
          <Card.Body>
            <Card.Title
              style={{
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                overflow: "hidden",
                color: "#363434",
                fontSize: "14px",
                fontWeight: "bold",
                textAlign: "start",
                marginBottom: "20px",
              }}
            >
              {this.props.book.title}
            </Card.Title>
            <Card.Text className="d-flex justify-content-end">
              <Badge bg="dark">{this.props.book.price} $</Badge>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
