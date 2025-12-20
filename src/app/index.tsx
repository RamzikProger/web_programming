import React from 'react';
import { createRoot } from "react-dom/client";
import App from "./App";
import '../shared/styles/style.css';

const rootElement = document.getElementById('root');
if(rootElement){
    const root = createRoot(rootElement);
    root.render(<App />);
}
