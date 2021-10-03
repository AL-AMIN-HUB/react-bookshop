import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AudioBooks from "./components/AudioBooks/AudioBooks";
import Blog from "./components/Blog/Blog";
import Books from "./components/Books/Books";
import ErrorFound from "./components/Error/ErrorFound";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Pages from "./components/Pages/Pages";
import TextBooks from "./components/TextBooks/TextBooks";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>{" "}
          <Route path="/home">
            <Home></Home>
          </Route>{" "}
          <Route path="/books">
            <Books></Books>
          </Route>{" "}
          <Route path="/textbooks">
            <TextBooks></TextBooks>
          </Route>{" "}
          <Route path="/audiobooks">
            <AudioBooks></AudioBooks>
          </Route>{" "}
          <Route path="/pages">
            <Pages></Pages>
          </Route>
          <Route path="/blog">
            <Blog></Blog>
          </Route>{" "}
          <Route path="*">
            <ErrorFound></ErrorFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
