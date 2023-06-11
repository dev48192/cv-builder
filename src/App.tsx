import React from 'react';
import { SmartAppProvider } from './states';
import AppRoutes from './components/AppRoutes';


function App() {
  return (
    <div className={'base-background'}>
        <SmartAppProvider>
            <AppRoutes/>
        </SmartAppProvider>
    </div>
  );
}

export default App;
