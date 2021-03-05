import BookItem from "../book-item/BookItem";
import { useState } from 'react';
import { useEffect } from 'react';
import './books.scss';
import { trackPromise } from 'react-promise-tracker';

const Books = () => {
  const [books, setBooks] = useState(null);
  useEffect(() => {
    trackPromise(
      fetch('http://localhost:8000/books')
        .then(responese => responese.json())
        .then(data => {
          setBooks(data);
        })
    )
  }, [])

  return (
    <div className="books">
      {books && books.map((book) => (
        <BookItem book={book} key={book.id}></BookItem>
      ))}
    </div>
  );
}

export default Books;