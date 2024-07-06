import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next'; // Importa el I18nextProvider
import i18n from './i18n'; // Importa tu configuración de i18n

// Importa tus componentes
import Home from './components/Home';
import Services from './components/Services';
import NotFound from './components/NotFound';

function App() {
  return (
    <I18nextProvider i18n={i18n}> {/* Envuelve toda la app con I18nextProvider y pasa la configuración de i18n */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Ruta para el componente Home */}
          <Route path="/services" element={<Services />} /> {/* Ruta para el componente Services */}
          <Route path="*" element={<NotFound />} /> {/* Ruta para el componente NotFound */}
        </Routes>
      </Router>
    </I18nextProvider>
  );
}

export default App;
