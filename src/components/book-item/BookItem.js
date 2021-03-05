import './book-item.scss'
import { Link } from "react-router-dom";

const BookItem = (props) => {
  const book = props.book;
  return (
    <Link to={`/books/${book.id}`}>
      <div className="book-item">
        <img src={book.imageUrl} alt="book" />
        <div className="book-info">
          <p className="title">{book.title}</p>
          <p className="description">{book.description}</p>
        </div>
      </div>
    </Link>
  );
}

export default BookItem;