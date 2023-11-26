import { useState } from 'react'
import { CardContent, Typography, CardActions } from '@mui/material'
import DeleteTask from '../DeleteTask'
import { Task } from '../../types'
import SharedForm from '../Form'
import EditTask from '../EditTask'
import { updateTask } from '../../api/endpoints'
import { useQueryClient, useMutation } from '@tanstack/react-query'

export default function TaskListItem({ task }: { task: Task }) {
  const queryClient = useQueryClient()
  const [isEditMode, setIsEditMode] = useState(false)

  function toggleEditMode() {
    setIsEditMode(!isEditMode)
  }

  const {
    mutate: editTaskMutation,
    isPending,
    isError,
    error,
  } = useMutation({
    mutationFn: ({ taskId, newTask }: { taskId: string; newTask: Task }) =>
      updateTask(taskId, newTask),
    mutationKey: ['editTask'],
    onSettled: () => queryClient.invalidateQueries({ queryKey: ['tasks'] }),
  })

  const handleEditSubmit = (updatedTaskData: Task) => {
    editTaskMutation({ taskId: task.id, newTask: updatedTaskData })
    toggleEditMode()
  }

  if (isError)
    return (
      <Typography variant="body1">
        {'🚨 An error has occurred: ' + error.message}
      </Typography>
    )
  if (isPending) return 'Loading...'

  if (isEditMode) {
    return (
      <CardContent>
        <SharedForm
          initialData={task}
          onSubmit={handleEditSubmit}
          mode="edit"
        />
      </CardContent>
    )
  }

  return (
    <>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <strong>Title:</strong>
          {task.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Description:</strong>
          {task.description}
        </Typography>
      </CardContent>
      <CardActions sx={{ margin: '0 auto', width: 'fit-content' }}>
        <DeleteTask taskId={task.id} />
        <EditTask toggleEditMode={toggleEditMode} />
      </CardActions>
    </>
  )
}
