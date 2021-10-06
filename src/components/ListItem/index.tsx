import {useState} from "react";
import * as C from "./styles"
import {Item} from "../../types/Item"
type Props ={
  item: Item,
  onchange: (id:number) => void
}

export const ListItem = ({item, onchange}:Props) => {
  
  const handleChange = (id: number) => {
    onchange(id)
  }

  return(
    <C.Container done={item.done}>
      <input 
        type="checkbox" 
        checked={item.done} 
        onChange={()=>handleChange(item.id)}  
      />
      <label>{item.name} - {item.done.toString()}</label>
    </C.Container>
  )
}