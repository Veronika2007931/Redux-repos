import { useParams, Link } from "react-router-dom"

const CatDetailPage=()=>{
    const {catId} = useParams()
    return(
       <>
        <h1>Cat {catId}</h1>
        <ul>
            <li><Linl to="description">Description</Linl></li>
            <li><Linl to="breeeds_history">History</Linl></li>
        </ul>
       </>
    )
}

export default CatDetailPage