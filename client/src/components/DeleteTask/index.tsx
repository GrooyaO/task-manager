import { Chip } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

export default function DeleteTask({
  taskId,
  onDelete,
}: {
  taskId: string
  onDelete: any
}) {
  async function handleDelete() {
    await onDelete(taskId)
  }

  return (
    <Chip
      label="Delete"
      onClick={handleDelete}
      onDelete={handleDelete}
      deleteIcon={<DeleteIcon />}
      variant="outlined"
    />
  )
}
