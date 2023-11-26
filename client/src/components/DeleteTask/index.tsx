import { Chip, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { useQueryClient, useMutation } from '@tanstack/react-query'
import { deleteTask } from '../../api/endpoints'

export default function DeleteTask({ taskId }: { taskId: string }) {
  const queryClient = useQueryClient()
  const {
    mutate: deleteTaskMutation,
    isPending,
    isError,
    error,
  } = useMutation({
    mutationFn: (taskId: string) => deleteTask(taskId),
    mutationKey: ['removeTask'],
    onSettled: () => queryClient.invalidateQueries({ queryKey: ['tasks'] }),
  })

  if (isError)
    return (
      <Typography variant="body1">
        {'🚨 An error has occurred: ' + error.message}
      </Typography>
    )
  if (isPending) {
    return <Typography variant="body1">Loading..</Typography>
  }
  return (
    <Chip
      label="Delete"
      onClick={() => deleteTaskMutation(taskId)}
      onDelete={() => deleteTaskMutation(taskId)}
      deleteIcon={<DeleteIcon />}
      variant="outlined"
      color="error"
    />
  )
}
