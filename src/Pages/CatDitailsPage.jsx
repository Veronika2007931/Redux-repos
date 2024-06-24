import { useParams, Link, Outlet, useNavigate } from "react-router-dom"

const CatDetailPage=()=>{
    const {catId} = useParams()
    const navigate = useNavigate
    return(
       <>
        <h1>Cat {catId}</h1>
        < button type='button' onClick={()=>navigate("/cats")}>Go back</button>
        <ul>
            <li><Link to="description">Description</Link></li>
            <li><Link to="breeeds_history">History</Link></li>
        </ul>
        <Outlet/>
       </>
    )
}

export default CatDetailPage