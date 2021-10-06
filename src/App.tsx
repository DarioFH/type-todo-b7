import {useState} from "react";
import { Item } from "./types/Item";
import * as C from "./App.styles";

import {ListItem} from "./components/ListItem";
import AddArea from "./components/AddArea";

const App = () => {

  const [list, setList] = useState<Item[]>([
    {id: 1, name: "Go to Dentist", done: false},
    {id: 2, name: "Go to Market", done: false}
  ])

  const handleAddTask = (name: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: name,
      done: false
    });
    setList(newList)
  }

  const handleUpdateTask = (id:number) => {
    let newList:{id:number, name:string, done:boolean}[]=[]
    list.forEach( (row, index) => {
      if(id === row.id){
        newList.push({...row, done: !row.done})
      }else{
        newList.push({...row})
      }
    })

    setList(newList)
  }

  return(
    <C.Container>
      <C.Area>
        <C.Header>
          TODO List
        </C.Header>

        <AddArea onEnter={handleAddTask} />

        {list.map((item, index) => (
          <ListItem key={index} item={item} onchange={handleUpdateTask} />
        ))}

      </C.Area>
    </C.Container>
  )
}

export default App