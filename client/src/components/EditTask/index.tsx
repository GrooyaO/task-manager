import { Chip } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'

export default function EditTask({
  toggleEditMode,
}: {
  toggleEditMode: () => void
}) {
  return (
    <Chip
      label="Edit"
      onClick={toggleEditMode}
      onDelete={toggleEditMode}
      deleteIcon={<EditIcon />}
      variant="outlined"
      color="primary"
    />
  )
}
