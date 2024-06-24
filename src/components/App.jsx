import {Routes, Route, NavLink} from "react-router-dom"
import {lazy} from 'react'
import ColorPickerPage from "Pages/ColourPickerPage"
import FormPage from "Pages/FormPage"

const GreatsPage = lazy(()=>import('./Pages/GreatsPage.jsx'))
const CatsPage = lazy(()=>import('./Pages/CatsPage.jsx'))
const NotFound = lazy(()=>import('./Pages/NotFoundPage.jsx'))
const CatDetailPage = lazy(()=>import('./Pages/CatDetailPage'))
const Layout = lazy(()=>import('./Pages/Layout'))

export function App(){
  return (
    <div>
     
      <Routes>

        <Route path="/" element={<Layout/>}>
        <Route index element={<GreatsPage/>}/>
        <Route path="cats" element={<CatsPage/>}/>
        <Route path="cats/:catId" element={<CatDetailPage/>}>
           <Route path='discription' element={<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, quam laboriosam. Dicta debitis repellat quas inventore est, 
            cum delectus eligendi laborum laudantium 
            ea officiis ipsum non id impedit consequuntur praesentium!</p>} elment={<p>Опис котика</p>}/>
            <Route path="breeds_history" element={<p>Історія породи</p>}/> 
          </Route>
        <Route path='grossery' element={<h2>Grossery</h2>}/>
        <Route path="colorPicker"  element={<ColorPickerPage/>}/>
        <Route path="form"  element={<FormPage/>}/>
        <Route path="*" element ={<NotFound/>}/>
        </Route>
      </Routes>
    </div>
    );
}
 

