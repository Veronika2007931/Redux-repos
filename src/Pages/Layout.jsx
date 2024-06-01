import { NavLink, Outlet } from "react-router-dom"

const Layout =()=>{
   return(
    <>
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
          <li>
          <NavLink to='/colorPicker'>ColorPicker page</NavLink>
          </li>
          <li>
          <NavLink to='/form'>Sign Up Form</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet/>
    </>
   )
}

export default Layout