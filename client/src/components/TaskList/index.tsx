import { Task } from '../../types'
import { Box, Card, Typography } from '@mui/material'
import TaskListItem from '../TaskListItem'
import { useTasks } from '../../App'

export default function TaskList() {
  const { data: tasks, error, isLoading } = useTasks()

  if (tasks && tasks.length === 0) {
    return (
      <Box>
        <Typography variant="body2" color="text.secondary">
          Task list is empty
        </Typography>
      </Box>
    )
  }

  if (isLoading) return 'Loading...'
  if (error) return '🚨 An error has occurred: ' + error.message

  return (
    <Box
      sx={{
        display: 'grid',
        marginTop: '15px',
        gridTemplateColumns: 'auto auto',
      }}
    >
      {tasks?.map((task: Task) => (
        <Card
          //pass in id as key
          key={task.id}
          elevation={3}
          sx={{
            margin: '5px',
          }}
        >
          <TaskListItem task={task} />
        </Card>
      ))}
    </Box>
  )
}
