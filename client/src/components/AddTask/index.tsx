import { Task } from '../../types'
import { apiCreateTask } from '../../api/endpoints'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import SharedForm from '../Form'
import { Typography } from '@mui/material'

export default function AddTask() {
  const queryClient = useQueryClient()

  const {
    mutate: addTaskMutation,
    isError,
    error,
  } = useMutation({
    mutationFn: (newTask: Task) => apiCreateTask(newTask),
    mutationKey: ['addTask'],
    onSettled: () => queryClient.invalidateQueries({ queryKey: ['tasks'] }),
  })

  const handleAddTask = (newTaskData: Task) => {
    addTaskMutation(newTaskData)
  }
  if (isError) {
    return (
      <Typography variant="body1">
        {'🚨 An error has occurred: ' + error.message}
      </Typography>
    )
  }
  return (
    <SharedForm
      initialData={{ title: '', description: '' }}
      onSubmit={handleAddTask}
      mode="add"
    />
  )
}
