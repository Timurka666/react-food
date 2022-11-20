import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import { Contacts } from "./components/pages/Contacts";
import { NotFound } from "./components/pages/NotFound";
import { Category } from "./components/pages/Category";
import { Recipe } from "./components/pages/Recipe";

function App() {
  return (
    <>
      <Router basename="/react-food">
        <Header />
        <main className="container content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/category/:name" element={<Category />} />
            <Route path="/meal/:id" element={<Recipe />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
