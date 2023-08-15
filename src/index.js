import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';

import { Provider } from './context/context';
import App from './App';
import './index.css';

ReactDOM.render(
  
  <SpeechProvider appId="7081f941-2986-4f7f-85a2-832cbb0e5ef8" language="en-US">
    <Provider>
    <React.StrictMode>
      <App />
      </React.StrictMode>
    </Provider>
  </SpeechProvider>,
  document.getElementById('root')
);