import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
      <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/company" element={<Company/>} />
          <Route exact path="/contact" element={<Contact/>} />
        </Routes>
        </Container>  
        <Footer />
    </Router>

    
  );
}

export default App;
