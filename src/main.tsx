import React from 'react';
import ReactDOM from 'react-dom/client';
import { AdviceGeneratorApp } from './components/AdviceGeneratorApp/AdviceGeneratorApp';
import './styles/styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AdviceGeneratorApp />
  </React.StrictMode>,
);