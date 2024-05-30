import { useParams } from "react-router-dom"

const CatDetailPage=()=>{
    const {catId} = useParams()
    return(
        <h1>Cat {catId}</h1>
    )
}

export default CatDetailPage