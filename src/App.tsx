import React from 'react';
import Home from './components/Home';
import { SmartAppProvider } from './states';

function App() {
  return (
    <div className={'base-background'}>
        <SmartAppProvider>
            <Home/>
        </SmartAppProvider>
    </div>
  );
}

export default App;
