import "./cart-item.scss";

const CartItem = ({ cartBook, onCartItemDeleted }) => {
  let id = cartBook.id;
  function deleteFromCart() {
    fetch(`http://localhost:8000/cart/${id}`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then(() => {
        onCartItemDeleted(cartBook);
      })
  }

  return (
    <div className="cart-item">
      <div className="book-image">
        <img src={cartBook.imageUrl} alt="book" />
      </div>
      <div className="book-details">
        <div className="book-title">
          <span>{cartBook.title}</span>
          <button type="button" onClick={deleteFromCart}><i className="fas fa-trash-alt"></i>
          </button>
        </div>
        <div className="other-details">
          <span >{cartBook.author}</span>
          <span >{cartBook.price} lei</span>
        </div>
      </div>
    </div>
  );
}

export default CartItem;