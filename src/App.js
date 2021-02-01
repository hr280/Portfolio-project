import React from 'react';
import Contact from './components/Contact';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Stack from './components/Stack';
import Work from './components/Work';
import Work2 from './components/Work2';
import Work3 from './components/Work3';
import Work4 from './components/Work4';
import Work5 from './components/Work5';

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <Work />
      <Work2 />
      <Work3 />
      <Work4 />
      <Work5 />
      <Stack />
      <Contact />
    </>
  );
}

export default App;
