import React from 'react';
import ReactDOM from 'react-dom/client';
import { Header } from './components/index';
import { Home, About, Projects, Contact } from './sections/index';
import { GlobalStyle } from './utils/style/GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Header />
    <Home />
    <About />
    <Projects />
    <Contact />
  </React.StrictMode>
);
