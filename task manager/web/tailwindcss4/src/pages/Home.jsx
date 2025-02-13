import React from 'react'
import Taskform from '../components/taskForm'
import TaskList from '../components/taskList'
const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-2xl w-full">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">Task manager</h1>
          
      <Taskform onTaskAdded={()=> window.location.reload()}/>
      <TaskList/>
      </div>
  
    </div>
  )
}

export default Home