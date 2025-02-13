import React, { useState } from 'react'
import {createTask} from '../api/api'
const taskForm = ({onTaskAdded}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!title || !description) return

    await createTask({title, description});
    setTitle("");
    setDescription("");
    onTaskAdded();
  }

  return (
    <form onSubmit={handleSubmit} className='bg-white p-4 rounded-lg shadow-md'>
      <input type="text" placeholder='Task Title' value={title} onChange={(e) => setTitle(e.target.value)}
         className="w-full p-2 mb-2 border rounded focus:ring-2 focus:ring-blue-400" />

        <textarea placeholder='Task description' value={description} onChange={(e) => setDescription(e.target.value)}  className="w-full p-2 mb-2 border rounded focus:ring-2 focus:ring-blue-400"></textarea>
        <button type='submit' className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded flex m-auto'>
          Add Task
        </button>
    </form>
  )
}

export default taskForm