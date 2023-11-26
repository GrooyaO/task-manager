import { Chip } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { useQueryClient, useMutation } from '@tanstack/react-query'
import { deleteTask } from '../../api/endpoints'

export default function DeleteTask({ taskId }: { taskId: string }) {
  const queryClient = useQueryClient()
  const { mutate: deleteTaskMutation } = useMutation({
    mutationFn: (taskId: string) => deleteTask(taskId),
    mutationKey: ['removeTask'],
    onSettled: () => queryClient.invalidateQueries({ queryKey: ['tasks'] }),
  })

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
