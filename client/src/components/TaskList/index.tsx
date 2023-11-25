import { useState, useEffect } from 'react'
import { Task } from '../../types'
import { apiListTasks, deleteTask } from '../../api/endpoints'
import { Box, Card, CardContent, Typography, CardActions } from '@mui/material'
import DeleteTask from '../DeleteTask'

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
  const handleDeleteTask = async (taskId: string) => {
    await deleteTask(taskId)
  }

  return (
    <Box>
      {tasks.map((task: Task) => (
        <Card key={task.id}>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {task.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {task.description}
            </Typography>
          </CardContent>
          <CardActions>
            <DeleteTask onDelete={handleDeleteTask} taskId={task.id} />
          </CardActions>
        </Card>
      ))}
    </Box>
  )
}
