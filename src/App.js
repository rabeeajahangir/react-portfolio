import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {

  return (
    <div>
      <Nav />
      <main>
          <About />        
      </main>
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </div>
    
  );
}

export default App;