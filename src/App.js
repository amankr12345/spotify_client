import React from "react"

import DashBoard from "./DashBoard";

import Login from "./Login";

const code=new URLSearchParams(window.location.search).get('code')
function App() {
  return code?<DashBoard code={code}/>:<Login/>
    
  }

export default App;
