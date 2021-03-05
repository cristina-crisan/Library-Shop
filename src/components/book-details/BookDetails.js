import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./book-details.scss";

const BookDetails = ({ onSelectBook }) => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/books/${id}`)
      .then(responese => responese.json())
      .then(data => {
        setBook(data)
      })
  }, [id])

  function addToCart() {
    onSelectBook(book);
  }

  return (
    <div className="details">
      <div className="book-info">
        <div className="book-description">
          <p className="title">{book && book.title} </p>
          <p> by {book && book.author}</p>
          <p className="description">{book && book.description}</p>
          <p> Genre: {book && book.genre}</p>
          <p> Price: {book && book.price} lei</p>
        </div>
        <div className="add-button">
          <button onClick={addToCart}>Add</button>
        </div>
      </div>
      <div className="book-image">
        <img src={book && book.imageUrl} alt="book" />
      </div>
    </div>
  );
}

export default BookDetails;