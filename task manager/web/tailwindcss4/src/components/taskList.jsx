import React, { useEffect, useState } from 'react'
import { deleteTask, getTask, updateTask } from '../api/api';

const taskList = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask , setEditingTask] = useState(null);
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedDesc, setUpdatedDesc] = useState("");

  const fetchTasks = async () => {
    try {
      const data = await getTask();
      setTasks(data);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteTask(id);
      fetchTasks();
    } catch (error) {
      console.log(error)
    }
  }

  const startEditing = (task) => {
    setEditingTask(task.id);
    setUpdatedTitle(task.title);
    setUpdatedDesc(task.description)
  }

  const handleUpdate = async () => {
    await updateTask(editingTask, {title: updatedTitle, description: updatedDesc});
    setEditingTask(null);
    fetchTasks();
  }


  return (
    <div className='mt-4'>
      {tasks.map((task) => (
        <div key={task.id} className="bg-gray-100 p-4 rounded-lg mb-2 flex justiffy-between items-center">
          {editingTask === task.id ? (
            <div className="w-full">
              <input type="text" value={updatedTitle} 
                onChange={(e) => setUpdatedTitle(e.target.value)}
                className='w-full p-2 border rounded mb-2'/>
              <textarea value={updatedDesc} onChange={(e)=> setUpdatedDesc(e.target.value)}
                  className='w-full p-2 border rounded mb-2'></textarea>
                  <button onClick={handleUpdate} className='bg-green-500 text-white px-4 py-2 rounded mr-2'> Save</button>
                  <button onClick={() => setEditingTask(null)} className='bg-gray-500 text-white px-4 py-2 rounded mr-2'> Cancel</button>
            </div>
          ) : (
            <>
            <div>
              <h3 className="text-lg font-bold">{task.title}</h3>
              <p className="text-gray-600 font-bold">{task.descript}</p>
            </div>
            <div className="ml-auto flex space-x-2">
              <button onClick={()=> startEditing(task)} className='bg-yellow-500 text-white px-4 py-2 rounded'>Edit</button>
              <button onClick={() => handleDelete(task.id)} className='bg-red-500 text-white px-4 py-2 rounded'>Delete</button>
            </div>
            </>
          )}
        </div>
      ))}
    </div>
  )
}

export default taskList