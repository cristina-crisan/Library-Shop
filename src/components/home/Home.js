import Books from "../books/Books"
import Cart from "../cart/Cart"
import './home.scss'
import BookDetails from "../book-details/BookDetails";
import { Route, Switch } from "react-router-dom";
import { useState } from 'react';

const Home = () => {

  const [updateStatusCart, setUpdateStatusCart] = useState(null);

  return (
    <div className="home">
      <Cart updateStatusCart={updateStatusCart} afterCartDelete={() => { setUpdateStatusCart(null) }}> </Cart>
      <Switch>
        <Route exact path="/books/:id" >
          <BookDetails    onUpdateCart={() => { setUpdateStatusCart(true) }} ></BookDetails>
        </Route>
        <Route path="/" component={Books} />
      </Switch>
    </div>
  );
}

export default Home;