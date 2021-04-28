import BooksList from "./bookList";
import BOOKS from "../data/fantasy.json";
import React from "react";
import { InputGroup, FormControl, Container } from "react-bootstrap";

class FilterBookList extends React.Component {
  state = {
    query: "",
  };
  /*  searchQuery = (e) => {
    e.target.value;
  }; */

  render() {
    return (
      <div>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            onKeyUp={(e) => this.setState({ query: e.target.value })}
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <BooksList
          books={BOOKS.filter((book) =>
            book.title.toLowerCase().includes(this.state.query)
          )}
        />
      </div>
    );
  }
}

export default FilterBookList;