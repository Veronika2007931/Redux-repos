import {Routes, Route, NavLink} from "react-router-dom"
import GreatsPage from "../Pages/GreatsPage"
import CatsPage from "../Pages/CatsPage"
import NotFound from "../Pages/NotFound"
import CatDetailPage from "Pages/CatDitailsPage"

export function App(){
  return (
    <div>
     
      <Routes>

        <Route pats="/" element={<Layout/>}>
        <Route index element={<GreatsPage/>}/>
        <Route path="/cats" element={<CatsPage/>}/>
        <Route pats="/cats/:catId" element={<CatDetailPage/>}/>
        <Route path='/grossery' element={<h2>Grossery</h2>}/>
        <Route pats="*" element ={<NotFound/>}/>
        </Route>
      </Routes>
    </div>
    );
}
 

