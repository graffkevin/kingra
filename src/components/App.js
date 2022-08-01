import './App.css';
import React from 'react';
import NavigationTool from './navigation/Navigation';
import RouterProvider from './routerProvider';
import Footer from './navigation/Footer';

function App() {
  
  return (
      <div className="App">
            <NavigationTool />
            <div className='offsetContent'>
              <div className='mainContainer'>
                <RouterProvider />
                <Footer />
              </div>
            </div>
      </div>
  );
  
}

export default App;
