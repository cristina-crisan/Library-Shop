import './cart.scss';
import { useEffect, useState } from 'react';
import CartItem from '../cart-item/CartItem';

const Cart = ({ selectedBook, afterCartDelete }) => {
  const [cart, setCart] = useState(null);
  const [total, setTotal] = useState(null);
  useState(selectedBook);

  useEffect(() => {
    if (selectedBook && cart.every(cartBook => cartBook.id !==
      selectedBook.id)) {
      fetch('http://localhost:8000/cart', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(selectedBook)
      }).then(() => {
        getCart();
      })
    } else {
      getCart();
    }
  }, [selectedBook]);

  function calculateTotal(responeData) {
    let total = responeData.reduce((total, currentValue) => total += currentValue.price, 0).toFixed(2);
    setTotal(total);
  }

  function onCartItemDeleted() {
    getCart();
  }

  function getCart() {
    fetch(`http://localhost:8000/cart`)
      .then(responese => responese.json())
      .then(data => {
        setCart(data);
        calculateTotal(data);
        afterCartDelete()
      });
  }

  return (
    <div className="cart-wrapper">
      <div className="cart-content sticky">
        <div className="contact">
          <div className="cart-header">
            <i className="far fa-address-book"></i>
            <span>Contact</span>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio laborum et tenetur temporibus nesciunt, obcaecati facere, laudantium culpa aliquam quos praesentium itaque atque amet veritatis quas totam.</p>
        </div>
        <div className="cart">
          <div className="cart-header">
            <i className="fas fa-cart-arrow-down"></i>
            <span>Cart ({cart && cart.length})</span>
          </div>
          <div className="cart-items">
            {cart && cart.length === 0 && <div className="empty-cart">Cart is empty</div>}
            {cart && cart.length > 0 && cart.map(cartBook => (
              <CartItem cartBook={cartBook} key={cartBook.id} onCartItemDeleted={(book) => { onCartItemDeleted() }}></CartItem>
            ))}
          </div>
          <div className="total">
            <p>Total : {total} </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;