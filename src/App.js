import React from 'react';
import Header from './components/Header';
import Button from './components/Button';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header logoText={"Angelo Liwanag"}/>
      <Button buttonText={"submit"}/>
      <Button buttonText={"purchase"}/>

    </div>
  );
}

export default App;
