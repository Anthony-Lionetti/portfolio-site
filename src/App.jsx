import Nav from "./components/Nav/Nav";
import { Hero, About, Projects, Contact } from "./components/main";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
