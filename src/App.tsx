// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
// import { Gallery } from './pages/Gallery';
import { Contact } from './pages/Contact';
// import NotFoundPage from './pages/NotFoundPage';
import { Terms } from './pages/Terms';
import { Privacy } from './pages/Privacy';
import { ProductGallery } from './pages/ProductGallery';
import { Product } from './pages/Product';
import { Products } from './pages/Products';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              {/* <Route path="/gallery" element={<Gallery />} /> */}
              <Route path="/gallery" element={<ProductGallery />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/products" element={<Products />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
              {/* <Route path="*" element={<NotFoundPage />} /> */}
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
