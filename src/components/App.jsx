import {Routes, Route, NavLink} from "react-router-dom"
import Layout from "Pages/Layout"
import GreatsPage from "../Pages/GreatsPage"
import CatsPage from "../Pages/CatsPage"
import NotFound from "../Pages/NotFound"
import CatDetailPage from "Pages/CatDitailsPage"
import ColorPickerPage from "Pages/ColourPickerPage"
import FormPage from "Pages/FormPage"

export function App(){
  return (
    <div>
     
      <Routes>

        <Route pats="/" element={<Layout/>}>
        <Route index element={<GreatsPage/>}/>
        <Route path="/cats" element={<CatsPage/>}/>
        <Route pats="/cats/:catId" element={<CatDetailPage/>}>
           <Route path='/discription' element={<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, quam laboriosam. Dicta debitis repellat quas inventore est, 
            cum delectus eligendi laborum laudantium 
            ea officiis ipsum non id impedit consequuntur praesentium!</p>} elment={<p>Опис котика</p>}/>
            <Route path="/breeds_history" element={<p>Історія породи</p>}/> 
          </Route>
        <Route path='/grossery' element={<h2>Grossery</h2>}/>
        <Route path="/colorPicker"  element={<ColorPickerPage/>}/>
        <Route path="/form"  element={<FormPage/>}/>
        <Route pats="*" element ={<NotFound/>}/>
        </Route>
      </Routes>
    </div>
    );
}
 

