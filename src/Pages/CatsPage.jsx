import {useState, useSearchParms} from "react"
import { Link } from "react-router-dom";
const CatsPage=()=>{
    const[cats, setCats] = useState(['cat-1', 'cat-2','cat-3','cat-4'])
    const[searchParams, setSearchParams] = useSearchParms()

    const catId = searchParams.get("name") ?? ""

    const updateQeryString = (e)=>{
    if(e.target.value !== ""){
        return setSearchParams({name: e.target.value})
    }
        setSearchParams({})
    }

    const visibleCats = () =>{
        return cats.filter(cat=>cat.includes(catId))
    }



    return(
        <>
        <h1>Cats</h1>
        <input type="text" value={catId}  onChange={updateQeryString}/>
        <ul>
        {visibleCats().map(cat => {
            return(
                <li key={cat}>
                    <Link to={`${cat}`}>{cat}</Link>
                    </li>
            )
        })}
        </ul>
        </>
        
    )
}


export default CatsPage;