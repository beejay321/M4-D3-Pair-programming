import BooksList from "./bookList";
import BOOKS from "../data/fantasy.json";
import React from "react";
import { InputGroup, FormControl, Container } from "react-bootstrap";

class FilterBookList extends React.Component {
  state = {
    query: "",
  };

  render() {
    return (
      <div>
        <Container className="mt-3">
          <InputGroup className="mb-3">
            <FormControl
              onKeyUp={(e) => this.setState({ query: e.target.value })}
              placeholder="Search"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Container>
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
