import { CardContent, Typography, CardActions } from '@mui/material'
import DeleteTask from '../DeleteTask'
import { Task } from '../../types'

export default function TaskListItem({ task }: { task: Task }) {
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
      </CardActions>
    </>
  )
}
