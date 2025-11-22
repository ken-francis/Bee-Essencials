import Navigation from './components/layout/Navigation';
import Hero from './components/sections/Hero';
import NewProducts from './components/sections/NewProducts';
import Features from './components/sections/Features';
import About from './components/sections/About';
import Testimonials from './components/sections/Testimonials';
import AllProducts from './components/sections/AllProducts';
import CTA from './components/sections/CTA';
import Footer from './components/layout/Footer';
function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <NewProducts /> 
      <Features />
      <About />
      <Testimonials />
      <AllProducts />
      <CTA />
      <Footer />
    </>
  );
}

export default App;