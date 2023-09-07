import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TopBar from "./components/topBar";
import MyFooter from "./components/MyFooter";
import BookList from "./components/BookList";
import Fantasy from "./data/books/fantasy.json";
import { Component } from "react";

class App extends Component {
  state = {
    books: Fantasy,
  };
  scegli = (book) => {
    this.setState({ books: book });
  };
  render() {
    return (
      <div className="App">
        <TopBar Fn={this.scegli} />
        <BookList books={this.state.books} />
        <MyFooter />
      </div>
    );
  }
}

export default App;
