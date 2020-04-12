import React from 'react';
import Header from './components/header/Header';
import Lesson from './components/lesson/Lesson';
import Button from './components/button/Button';
import Btn from './components/btn/Btn';
import Wrapper from './components/wrapper/Wrapper';
import Form from './components/form/Form';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header logoText={"Angelo Liwanag"}/>

      <Lesson lesson={1} topic={"Class & Functional Components"}>
        <Button buttonText={"submit"} numberText={10}/>
        <Btn btnText={"submit"} numText={10}/>
      </Lesson>

      <Lesson lesson={2} topic={"How To Lift Up State"}>
        <Wrapper items={['any', 'angelo', 'be', 'bite', 'can', 'cough']}/>
      </Lesson>

      <Lesson lesson={3} topic={"Forms"}>
        <Form/>
      </Lesson>
    </div>
  );
}

export default App;
