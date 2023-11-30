import "./app.scss";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Parallex from "./Components/Parallex/Parallex";
import Services from "./Components/Services/Services";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
const App = () => {
  return (
    <div>
      <section id="home">
        <Navbar />
        <Hero />
      </section>
      <section>
        <Parallex type="services" />
      </section>
      <section id="services">
        <Services />
      </section>
      <section>
        <Parallex type="work" />
      </section>
      <Portfolio />
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
