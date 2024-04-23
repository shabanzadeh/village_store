import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {


  return (
    <>
   <Router>
    <Routes>
      <Route path="/"></Route>
      <Route path="/wohmanDress"></Route>
      <Route path="MenDress"></Route>
      <Route path="ChildDress"></Route>
      <Route path="PlasticItems"></Route>
      <Route path ="Stantionery"></Route>
    </Routes>
   </Router>
      
    </>
  )
}

export default App
