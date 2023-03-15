import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AddBook from "./components/add-book.component";
import Book from "./components/book.component";
import BooksList from "./components/books-list.component";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/books"} className="nav-link">
                  Books
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/add"} className="nav-link">
                  Add a Book
                </Link>
              </li>
            </div>
          </nav>

          <div className="container mt-3">
            <Switch>
              <Route exact path={["/", "/books"]} component={BooksList} />
              <Route exact path="/add" component={AddBook} />
              <Route path="/books/:id" component={Bookl} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
