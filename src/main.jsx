import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import * as themes from './theme/schema.json';

function Index() {
  window.localStorage.setItem('all-themes', JSON.stringify(themes.default));
  return <App />;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);
