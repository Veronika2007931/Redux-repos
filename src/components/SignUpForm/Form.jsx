import { useEffect, useState } from "react"

export const Form = ()=>{


useEffect(()=>{
    console.log(' Виклик useEffect')
},[])



const [name, setName]= useState('')
const [password, setPassword] = useState('')

   const handleChange = (e)=>{
    const name = e.currentTarget.name
    switch (name){
        case 'name' :
            setName(e.currentTarget.value)
            return;
            case 'password' :
            setPassword(e.currentTarget.value)
            return;

            default: 
            return;
    }
   }

const handleSubmit = (e)=>{
    e.preventDefault()

    e.currentTarget.reset()
}


    return(
        <form onSubmit = {handleSubmit}>
            <label htmlFor="">
                <input type="text" name= 'name'/>
            </label>
            <label >
                <input type="password" name="password" />
            </label>
            <button type="submit"></button>
        </form>
    )
}