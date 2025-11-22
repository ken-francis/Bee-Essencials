import Navigation from './components/layout/Navigation';
import Hero from './components/sections/Hero';
import NewProducts from './components/sections/NewProducts';
import Features from './components/sections/Features';
import About from './components/sections/About';
function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <NewProducts /> 
      <Features />
      <About />
    </>
  );
}

export default App;