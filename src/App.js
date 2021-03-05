import Header from "./components/header/Header";
import Home from "./components/home/Home";
import './App.scss';
import About from "./components/about/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./components/contact/contact";
import Loader from "./components/loader/Loader";


function App() {
  return (
    <Router>
      <Loader />
      <div className="App-header">
        <Header />
        <div className="content">
          <Switch>
            <Route exact path="/about" component={About}></Route>
            <Route exact path="/contact" component={Contact}></Route>
            <Route path="/" component={Home}></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
