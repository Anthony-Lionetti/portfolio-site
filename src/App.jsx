import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Bookself from "./components/Bookself";
import Fundamentals from "./components/Fundamentals";
import NotFound from "./components/NotFound";
import { Route, Switch } from "wouter";

function App() {
  return (
    <main className="main container">
      <Nav />
      <Switch>
        <Route path={"/"} component={Hero} />
        <Route path={"/bookshelf"} component={Bookself} />
        <Route path={"/fundamentals"} component={Fundamentals} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </main>
  );
}

export default App;
