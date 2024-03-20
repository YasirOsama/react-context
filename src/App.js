import logo from './logo.svg';
import './App.css';
import ChildA from './ChildA';
import { createContext } from 'react';
import A from './components/A';
import Usememo from './components/Usememo';
import UsecallBack from './components/UsecallBack';
import Form from './components/Form';
import Parent from './child to parent/Parent';

import Parent1 from './child to parent/Parent1';
import ListKey from './list/ListKey';
import UsWithObject from './list/UsWithObject';
import Us from './list/Us';
import UsWithArray from './list/UsWithArray';
import UsWithArray1 from './list/UsWithArray1';
// A.js and B.js is example of use context
  const data=createContext()
  const data1=createContext();
 
function App() {
  
  // const name="abrar";
  // const geneder="female";
  return (
    <div>
    <>
    // it is also problamatic and is solution is use context hook.
    {/* <data.Provider value={name}>
    <data1.Provider value={geneder}>
      <ChildA></ChildA>
       
      </data1.Provider>
    </data.Provider> 
    
   <A/>
   <Usememo/>
   <UsecallBack/> */}
   {/* <Form/> */}
   <Parent/> 
    {/* <Parent1/> */}
  {/* <ListKey/> */}
  {/* <UsWithObject/>
  <Us/> */}
 {/* <UsWithArray/> */}
 {/* <UsWithArray1/> */}
    </>
    </div>
  );
}

export default App;
export {data,data1};
