import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Music from './components/Music';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sora">
      <Header />
      <main>
        <Home />
        <Music />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
