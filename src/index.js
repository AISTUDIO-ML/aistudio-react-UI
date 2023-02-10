import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Toaster } from 'react-hot-toast';

// 1. import `SaasProvider` component. This wraps the `ChakraProvider` component.
// import { SaasProvider } from '@saas-ui/react'

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <> <Toaster  />
 <App /></>

);


