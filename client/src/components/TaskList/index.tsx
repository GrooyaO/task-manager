import { useState, useEffect } from 'react'
import { Task } from '../../types'
import { apiListTasks } from '../../api/endpoints'

export default function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([])

  async function getTasks() {
    try {
      const data = await apiListTasks()
      setTasks(data)
    } catch (error) {
      console.error(`Error fetching tasks: ${error}`)
    }
  }

  useEffect(() => {
    getTasks()
  }, [])

  if (tasks.length === 0) {
    return (
      <div>
        <p>No tasks to show</p>
      </div>
    )
  }

  return (
    <div>
      {tasks.map((task: Task) => (
        <div key={task.id}>
          <span>{task.title}</span>
          <span>{task.description}</span>
        </div>
      ))}
    </div>
  )
}
