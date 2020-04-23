import React from 'react';
import Header from './components/header/Header';
import Lesson from './components/lesson/Lesson';
import Button from './components/button/Button';
import Btn from './components/btn/Btn';
import Wrapper from './components/wrapper/Wrapper';
import Form from './components/form/Form';
import BoxGenerator from './components/boxgenerator/BoxGenerator';
import Alert from './components/alert/Alert';
import Tabs from './components/tabs/Tabs';
import TodoList from './components/todolist/TodoList';
import TimeDisplay from './components/timedisplay/TimeDisplay';
import NavBar from './components/navbar/NavBar';
import Pokemon from './components/pokemon/Pokemon';
import Axios from './components/axios/Axios';
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

      <Lesson lesson={4} topic={"Map Iteration"}>
        <BoxGenerator/>
      </Lesson>

      <Lesson lesson={5} topic={"How To Send Arguments In Callbacks"}>
        <Alert songs={["Stargazing", "Magnolia", "Silly Watch"]}/>
        <Tabs section={[1, 2, 3]}/>
        <TodoList/>
      </Lesson>


      <Lesson lesson={6} topic={"useEffect"}>
        <TimeDisplay/>
      </Lesson>

      <Lesson lesson={7} topic={"Context"}>
        <NavBar/>
      </Lesson>

      <Lesson lesson={8} topic={"Application Program Interface"}>
        <Pokemon/>
        <Axios/>
      </Lesson>
    </div>
  );
}

export default App;
