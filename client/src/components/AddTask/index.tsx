import { Task } from '../../types'
import { apiCreateTask } from '../../api/endpoints'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import SharedForm from '../Form'

export default function AddTask() {
  const queryClient = useQueryClient()

  const { mutate: addTaskMutation } = useMutation({
    mutationFn: (newTask: Task) => apiCreateTask(newTask),
    mutationKey: ['addTask'],
    onSettled: () => queryClient.invalidateQueries({ queryKey: ['tasks'] }),
  })

  const handleAddTask = (newTaskData: Task) => {
    addTaskMutation(newTaskData)
  }

  return (
    <SharedForm
      initialData={{ title: '', description: '' }}
      onSubmit={handleAddTask}
      mode="add"
    />
  )
}
