import React, { useState} from "react";
import Button from "./components/Button";

const App = () => {
  // ini buat datanya
  const [taskList, setTaskList] = useState({
    // rand: Math.random(),
    data: [],
  });
  
  // ini buat input data
  const [newTaskValue, setNewTaskValue] = useState("");


  // ini buat nambah task
  const actionAddTask = () => {
    if (newTaskValue.trim() === '') {
      return false;
    }
    const newData = taskList.data
    newData.push(newTaskValue);
    // alert(JSON.stringify(newData))
    // setTaskList({rand: Math.random(), data: newData})
    setTaskList({data: newData});
    setNewTaskValue('');
  };
  // btw ini rand: Math.random bisa diganti angka sama2 1 atau 1; rand + 1
  // sebenernya gak usah pake rand sih, asal di bikin object juga bisa aja

  return (
    <div>
      <br/>
      <div>
        <input 
          type="text" 
          placeholder='Input Task Here..'
          value={newTaskValue}
          onChange={(e)=>setNewTaskValue(e.target.value)}
        />
        <Button text="AddTask" onClick={actionAddTask}></Button>
      </div>
      <div>
        <ul>
          {taskList.data.map((item)=>(
            <li>{item}</li>
          ))}
        </ul>
      </div>
      <Button background="red" text="Clear" onClick={() => setTaskList({data:[]})}></Button>
      <Button text="Hapus"></Button>
    </div>
  );
}

export default App;
