import {Routes, Route, NavLink} from "react-router-dom"
import GreatsPage from "../Pages/GreatsPage"
import CatsPage from "../Pages/CatsPage"
import NotFound from "../Pages/NotFound"

export function App(){
  return (
    <div>
      <nav>
        <ul>
          <li>
           <NavLink to='/'>Homepag</NavLink>
          </li>
          <li>
          <NavLink to='/cats'>Cats page</NavLink>
          </li>
          <li>
          <NavLink to='/grossery'>Grossery page</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<GreatsPage/>}/>
        <Route path="/cats" element={<CatsPage/>}/>
        <Route path='/grossery' element={<h2>Grossery</h2>}/>
        <Route pats="*" element ={<NotFound/>}/>
      </Routes>
    </div>
    );
}
 

