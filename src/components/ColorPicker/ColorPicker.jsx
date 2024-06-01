import{Container, Title, ColorpickerOption} from "./ColorPicker.styled"
import {useState} from "react"


export const ColorPicker = ({options})=>{

 const [colorOptionIdx, setColorOptionIdx] = useState(0)

 const handleClick=(optionId)=>{
  if(optionId === colorOptionIdx){
    return
  }
  setColorOptionIdx( optionId)
}

const label = options[colorOptionIdx].lable

  return (
    <Container >
<Title >Color Picker</Title>
<span >Обраний колір:{label}</span>
{options.map(({label, color}, idx) => (
<ColorpickerOption
   onClick = {()=>{handleClick(idx)}}
   key={label}
   bgc = {color}
   idx={idx}
   currentIdx={colorOptionIdx}>

</ColorpickerOption>))}

</Container>

)
}