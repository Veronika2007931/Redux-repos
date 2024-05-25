import {Routes, Route} from "react-router-dom"

export function App(){
  return (
    <div>
      <Routes>
        <Route path='/' element={<h1>Hello</h1>}/>
      </Routes>
    </div>
    );
}
 

