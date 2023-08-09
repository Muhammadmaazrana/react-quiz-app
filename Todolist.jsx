import React from 'react'
import { useState } from 'react'

function Todolist() {
    const [activity, setActivity] = useState("");
    function handleChange(e) {
      setActivity(e.target.value);
    }
    const [listdata, setListData] = useState([]);
    const [editedText, setEditedText] = useState("");
    const [editIndex, setEditIndex] = useState(-1); // New state to store the index of the todo being edited
  
    function addtodo() {
      setListData([...listdata, activity]);
      setActivity("");
    }
  
    function removetodo(i) {
      const updatedlist = listdata.filter((_, id) => i !== id);
      setListData(updatedlist);
    }
  
    function edittodo(i) {
      setEditIndex(i); // Set the index of the todo being edited
      setEditedText(listdata[i]); // Set the edited text to the current todo's text
    }
  
    function saveEditedTodo(i) {
      const updatedlist = [...listdata];
      updatedlist[i] = editedText;
      setListData(updatedlist);
      setEditedText("");
      setEditIndex(-1); // Reset the editIndex when the todo is saved
    }
  
    return (
      <div>
        <h1>todo app</h1>
        <input type="text" placeholder='enter what to do..' value={activity} onChange={handleChange} />
        <button onClick={addtodo}>add todo</button>
  
        {listdata.map((Data, i) => {
          return (
            <div key={i}>
              {i === editIndex ? (
                <>
                  {/* Show an input field for editing the todo */}
                  <input type="text" value={editedText} onChange={(e) => setEditedText(e.target.value)} />
                  <button onClick={() => saveEditedTodo(i)}>Save</button>
                </>
              ) : (
                <>
                  {/* Show the todo text if not editing */}
                  <p>{Data}</p>
                  <button onClick={() => removetodo(i)}>Remove</button>
                  <button onClick={() => edittodo(i)}>Edit</button>
                </>
              )}
            </div>
          );
        })}
      </div>
    );
  }
  
  export default Todolist;
  