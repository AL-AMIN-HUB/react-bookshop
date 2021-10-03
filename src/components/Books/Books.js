import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Book from "../Book/Book";

const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("./allData.JSON")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div className="bg-color  pb-5">
      <div className=" mt-5 py-5 container mx-auto">
        <h2 className="text-muted pb-5">Top Rated Books</h2>
        <div>
          <Row xs={1} sm={1} md={3} className="g-4">
            {books.map((book) => (
              <Book key={book.id} book={book}></Book>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Books;
