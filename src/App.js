import React from "react";
import "./App.css";

// import styles from './App.module.css';
//  import ClassExample1 from './ClassExample1';
//  import FunctionalExample from './FunctionalExample';
//  import  WithJsx  from './ClassComponents/chapter8/withJsx';
//  import  WithoutJsx  from './ClassComponents/chapter8/withoutJsx';
//  import  Greet  from './ClassComponents/chapter9/Greet';
//  import  Welcome  from './ClassComponents/chapter9/Welcome';
//  import  Message  from './ClassComponents/chapter10/Message';
//  import Counter from './ClassComponents/chapter11/Counter';
//  import Destructuring from './ClassComponents/chapter12/Destructuring'
//  import EventHandler from './ClassComponents/chapter13/EventHandler';
// import  ClassEventHandler from './ClassComponents/chapter13/ClassEventHandler';
// import EventBind from'./ClassComponents/chapter14/EventBind';
// import ParentComponent from './ClassComponents/Chapter15/ParentComponent';
// import UserGreeting from'./ClassComponents/Chapter16/UserGreeting';
//  import NameList from './ClassComponents/Chapter17and18/NameList';
//  import NameLists from './ClassComponents/Chapter19/NameLists';
//  import CSSStylesheet from './ClassComponents/Chapter20/CSSStylesheet'
//  import Inline from './ClassComponents/Chapter20/Inline';
//  import Form from './ClassComponents/Chapter21/Form';
//  import LifeCycleA from './ClassComponents/Chapter22and23/LifeCycleA';
//   import ComponentA from './ClassComponents/Chapter24/ComponentA';
//  import Fragment from './ClassComponents/Chapter25/Fragment';
//  import ParentComp from './ClassComponents/Chapter26/ParentComp';
//  import ParentCompMemo from './ClassComponents/Chapter27/ParentCompMemo';
//  import RefDemo from './ClassComponents/Chapter28/RefsDemo';
//  import FocusInput from './ClassComponents/Chapter29/FocusInput';
//  import FRParentInput from './ClassComponents/Chapter30/FRParentInput';
//  import PortalDemo from './ClassComponents/Chapter31/PortalDemo';
//  import ErrorBounding from './ClassComponents/Chapter32/ErrorBounding';
//  import Hero from './ClassComponents/Chapter32/Hero';
//  import ClickCount from './ClassComponents/Chapter33/ClickCount';
//  import HoverCount from './ClassComponents/Chapter33/HoverCount';
//  import HoverCount1 from './ClassComponents/Chapter34&35/HoverCount1';
//  import ClickCount1 from './ClassComponents/Chapter34&35/ClickCount1';
//  import ClickCounterTwo from './ClassComponents/Chapter36/ClickCounterTwo';
//  import HoverCounterTwo from './ClassComponents/Chapter36/HoverCounterTwo';
//  import CounterPropsRender from './ClassComponents/Chapter37/CounterPropsRender';
// import ComponentC from './ClassComponents/Chapter38&39&40/ComponentC';
// import { UserProvider } from './ClassComponents/Chapter38&39&40/UserContext';
// import AxiosPosts from "./ClassComponents/Chapter41&42/AxiosPosts"
// import PostForm from './ClassComponents/Chapter43/PostForm';
// import DeletePost from './ClassComponents/Chapter43/DeletePost';
// import HookCounter from './HookConcept/UseStateConcept/Chapter1&2/HookCounter';
// import HookCounterTwo from './HookConcept/UseStateConcept/Chapter3/HookCounterTwo';
//import UseStateWithObject from './HookConcept/UseStateConcept/Chapeter4/UseStateWithObject';
//import UseStateWithArray from './HookConcept/UseStateConcept/Chapter5/UseStateWithArray';
//import UseEffectCounter from './HookConcept/UseEffectConcept/Chapter6&7/UseEffectCounter';
//import UseEffectConditionally from './HookConcept/UseEffectConcept/Chapter8/UseEffectConditionally';
//import ClassMouseMove from './HookConcept/UseEffectConcept/Chapter9/ClassMouseMove';
//import HookMouseMove from './HookConcept/UseEffectConcept/Chapter9/HookMouseMove';
//import HookContainerUnMount from './HookConcept/UseEffectConcept/Chapter10/HookContainerUnMount';
// import IntrervalClassCount from './HookConcept/UseEffectConcept/Chapter11/IntrervalClassCount';
// import IntervalHookCounter from './HookConcept/UseEffectConcept/Chapter11/IntervalHookCounter';
// import FetchPosts from './HookConcept/UseEffectConcept/Chapter12/FetchPosts';
// import FetchPost from './HookConcept/UseEffectConcept/Chapter13/FetchPost';
//import FetchPostOnClick from './HookConcept/UseEffectConcept/Chapter14/FetchPostOnClick';
// import ComponentHookA from './HookConcept/UseContextConcept/ComponentHookA';
// import UseReducerCounter from './HookConcept/UseReducerConcept/Chapter18&19/UseReducerCounter';
//import UseReducerObjectCounter from './HookConcept/UseReducerConcept/Chapter20/UseReducerObjectCounter';
//import UseReducerCountermultipleStatesSameReducer from './HookConcept/UseReducerConcept/Chapter21/UseReducerCountermultipleStatesSameReducer';
//import UseReducerUseContext from "./HookConcept/UseReducerConcept/Chapter22/UseReducerUseContext";
//import UseEffetUseStateDataFetching from "./HookConcept/UseReducerConcept/Chapter23/UseEffetUseStateDataFetching";
//import UseEffectUseReducerDataFetching from "./HookConcept/UseReducerConcept/Chapter24/UseEffectUseReducerDataFetching";
//import UseCallback from "./HookConcept/UseCallbackConcept/UseCallback";
//import UseMemoCounter from "./HookConcept/UseMemoConcept/Chapter27/UseMemoCounter";
//import FocusInputUseRef from "./HookConcept/UseRefConcept/Chapter28/FocusInputUseRef";
//import ClassClearInterval from "./HookConcept/UseRefConcept/Chapter29/ClassClearInterval";
//import ClearIntervalwithUseRef from "./HookConcept/UseRefConcept/Chapter29/ClearIntervalwithUseRef";
//import HookCounter1 from "./HookConcept/CustomHooks/Chapter30&31/HookCounter1";
//import HookCounter2 from "./HookConcept/CustomHooks/Chapter30&31/HookCounter2";
// import CustomCounter1 from "./HookConcept/CustomHooks/Chapter32/CustomCounter1";
// import CustomCounter2 from "./HookConcept/CustomHooks/Chapter32/CustomCounter2";
import InputForm from "./HookConcept/CustomHooks/Chapter33/InputForm";
import SanExperiment from "./HookConcept/UseReducerConcept/Chapter18&19/SanExperiment";

// let sav=0;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  san = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
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
      <ComponentA count={0}/>
      <Fragment/>
      <ParentComp/>
      <ParentCompMemo/>
      <RefDemo/>
      <FocusInput/>
      <FRParentInput/>
      <PortalDemo/>
      <ErrorBounding>
       <Hero hero={"santhosh"}/>
       </ErrorBounding>
       <ErrorBounding>
       <Hero hero={"joker"}/>
       </ErrorBounding>
       <ErrorBounding>
       <Hero  hero={"sanju"}/>
       </ErrorBounding>
        <ClickCount/>
       <HoverCount/>
        <ClickCount1 name="santhosh"/>
       <HoverCount1 name="sanjeev"/>
        <CounterPropsRender rr={(count,incrementCount)=>
      (
        <ClickCounterTwo count={count} incrementCount={incrementCount}/>
      )
      }/>
       
       <CounterPropsRender rr={(count,incrementCount)=>
        (<HoverCounterTwo count={count} incrementCount={incrementCount}/>)
       }/>
        <UserProvider value="santhosh MS">
      <ComponentC/>
      </UserProvider>
       <AxiosPosts/>
       <PostForm/>
        <DeletePost/>
        <HookCounter/>
        <HookCounterTwo/>
        <UseStateWithObject/>
        <UseStateWithArray/> 
        <UseEffectCounter/>
        <UseEffectConditionally/>
         <ClassMouseMove/>
         <HookMouseMove/>
         <HookContainerUnMount/>
         <IntrervalClassCount/>
       <IntervalHookCounter/>
        <FetchPosts/>
         <FetchPost/>
          <FetchPostOnClick/>
           <ComponentHookA/>
           <UseReducerCounter/>
            <UseReducerObjectCounter/>
            <UseReducerCountermultipleStatesSameReducer/>
            <UseReducerUseContext/>
            <UseEffetUseStateDataFetching />
            <UseEffectUseReducerDataFetching/> 
            <UseCallback/>
            <UseMemoCounter/>
            <FocusInputUseRef/>
            <ClassClearInterval/>
            <ClearIntervalwithUseRef/>
             <HookCounter1/>
            <HookCounter2/>
            <CustomCounter1/>
            <CustomCounter2/>*/}
            <InputForm/>
            <SanExperiment/>
            
      </div>
    );
  }
}

export default App;
