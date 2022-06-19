import React, { useState } from 'react';
import Button from './components/Button';
import Input from './components/Input';
import ListItem from './components/ListItem';
import { globalstyles } from './theme/globalStyles';

const App = () => {
  // ini buat datanya
  const [taskList, setTaskList] = useState({
    // rand: Math.random(),
    data: [],
  });

  // ini buat input data
  const [newTaskValue, setNewTaskValue] = useState('');

  // ini buat nambah task
  const actionAddTask = () => {
    if (newTaskValue.trim() === '') {
      return false;
    }
    const newData = taskList.data;
    newData.push(newTaskValue);
    // alert(JSON.stringify(newData))
    // setTaskList({rand: Math.random(), data: newData})
    setTaskList({ data: newData });
    setNewTaskValue('');
  };
  // btw ini rand: Math.random bisa diganti angka sama2 1 atau 1; rand + 1
  // sebenernya gak usah pake rand sih, asal di bikin object juga bisa aja

  const deleteTask = (value) => {
    const newList = Array.from(taskList.data).filter(
      (item) => item !== value
    );
    setTaskList({ data: newList });
  };

  return (
    <div style={globalstyles.row}>
      <br />
      <div>
        <Input
          value={newTaskValue}
          onChange={(e) => setNewTaskValue(e.target.value)}
        ></Input>
        <Button text="AddTask" onClick={actionAddTask}></Button>
      </div>
      <div>
        <ListItem
          list={taskList.data.map((item) => (
            <li>
              {item}
              <Button text="hapus" onClick={() => deleteTask(item)} />
            </li>
          ))}
        ></ListItem>
      </div>
      <Button
        backgroundColor="red"
        text="Clear"
        onClick={() => setTaskList({ data: [] })}
      ></Button>
      <Button text="Edit"></Button>
      <h2>FLOAT</h2>
      <div>
        <div
          style={{
            backgroundColor: '#ccc',
            width: 50,
            height: 50,
            margin: 5,
            float: 'left',
          }}
        ></div>
        <div
          style={{
            backgroundColor: '#ccc',
            width: 50,
            height: 50,
            margin: 5,
            float: 'left',
          }}
        ></div>
        <div
          style={{
            backgroundColor: '#ccc',
            width: 50,
            height: 50,
            margin: 5,
            float: 'left',
          }}
        ></div>
      </div>
      <div
        style={{
          backgroundColor: 'black',
          width: 50,
          height: 50,
          margin: 5,
          clear: 'both',
        }}
      ></div>

      <h2>Flex</h2>
      <div
        style={{
          backgroundColor: '#666',
          display: 'flex',
          flexDirection: 'row',
          // width: "80%",
          maxWidth: 200,
          margin: 'auto',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            backgroundColor: '#ccc',
            width: 50,
            height: 50,
            margin: 5,
          }}
        ></div>
        <div
          style={{
            backgroundColor: '#ccc',
            width: 50,
            height: 50,
            margin: 5,
          }}
        ></div>
        <div
          style={{
            backgroundColor: '#ccc',
            width: 50,
            height: 50,
            margin: 5,
          }}
        ></div>
        <div
          style={{
            backgroundColor: '#ccc',
            width: 50,
            height: 50,
            margin: 5,
          }}
        ></div>
        <div
          style={{
            backgroundColor: '#ccc',
            width: 50,
            height: 50,
            margin: 5,
          }}
        ></div>
        <div
          style={{
            backgroundColor: '#ccc',
            width: 50,
            height: 50,
            margin: 5,
          }}
        ></div>
      </div>
      <div
        style={{
          backgroundColor: 'black',
          width: 50,
          height: 50,
          margin: 5,
          clear: 'both',
        }}
      ></div>
    </div>
  );
};

export default App;
