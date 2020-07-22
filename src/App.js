import React, {useState}from 'react';
import './App.css';
import styles from './App.module.css'
import ClassExample1 from './ClassExample1';
 import FunctionalExample from './FunctionalExample';
 import  WithJsx  from './chapter8/withJsx';
 import  WithoutJsx  from './chapter8/withoutJsx';
 import  Greet  from './chapter9/Greet';
 import  Welcome  from './chapter9/Welcome';
 import  Message  from './chapter10/Message'; 
 import Counter from './chapter11/Counter';
 import Destructuring from './chapter12/Destructuring'
 import EventHandler from './chapter13/EventHandler';
import  ClassEventHandler from './chapter13/ClassEventHandler';
import EventBind from'./chapter14/EventBind';
import ParentComponent from './Chapter15/ParentComponent';
import UserGreeting from'./Chapter16/UserGreeting';
 import NameList from './Chapter17and18/NameList';
 import NameLists from './Chapter19/NameLists';
 import CSSStylesheet from './Chapter20/CSSStylesheet'
 import Inline from './Chapter20/Inline';
 import Form from './Chapter21/Form';
 import LifeCycleA from './Chapter22and23/LifeCycleA';
 import ComponentA from './Chapter24/ComponentA';
 import Fragment from './Chapter25/Fragment'
  let sav=0;
 
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {count: 0};
  }
san=()=>{
  this.setState({count: this.state.count+1})

}
  render(){
    
  return (
    <div className="App">
     
      {/* <ClassExample1 san="san"/>
      <FunctionalExample san="From App San"/>
      <WithJsx/>
      <WithoutJsx/>
      <Greet  name="Greetchild1"/>
      <Greet  name="Greetchild2"><p>helo man from manfransisco</p> <button onClick={this.san}>sanIncrement</button></Greet>
      <Greet  name="Greetchild3"><p>helo san from sanfransisco</p></Greet>
      <Welcome name="santhosh MS"/>
      <Welcome name="sanju MS"/>
      <p>{this.state.count}</p>
      <Message/>
      <Counter/>
      <Destructuring name="santhosh" lastName="MS"/>
      <EventHandler/>
      <ClassEventHandler/>
      <EventBind/>
      <ParentComponent/>
      <UserGreeting/> 
      <NameList/>
      <NameLists/>
      <CSSStylesheet/>
      <Inline/>
      <h1 className={styles.success}>App.module.css</h1>
       <h1 className="error">App.css</h1>
        <Form/>
        <LifeCycleA count={3}/>
        <ComponentA count={0}/>*/}
      
       <Fragment/>
      </div>
  );
 
  }
}

export default App;
