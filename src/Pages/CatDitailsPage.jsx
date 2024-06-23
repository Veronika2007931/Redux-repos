import { useParams, Link, Outlet } from "react-router-dom"

const CatDetailPage=()=>{
    const {catId} = useParams()
    return(
       <>
        <h1>Cat {catId}</h1>
        <ul>
            <li><Link to="description">Description</Link></li>
            <li><Link to="breeeds_history">History</Link></li>
        </ul>
        <Outlet/>
       </>
    )
}

export default CatDetailPage