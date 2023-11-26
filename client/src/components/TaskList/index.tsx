import { Box, Card, Typography } from '@mui/material'
import TaskListItem from '../TaskListItem'
import { Task } from '../../types'
import { useQuery } from '@tanstack/react-query'
import { apiListTasks } from '../../api/endpoints'

function useTasks() {
  return useQuery({
    queryKey: ['tasks'],
    queryFn: async (): Promise<Array<Task>> => {
      const data = await apiListTasks()
      return data
    },
  })
}
export default function TaskList() {
  const { data: tasks, error, isLoading, isError } = useTasks()

  if (tasks && tasks.length === 0) {
    return (
      <Box>
        <Typography variant="body2" color="text.secondary">
          Task list is empty
        </Typography>
      </Box>
    )
  }

  if (isError)
    return (
      <Typography variant="body1">
        {'🚨 An error has occurred: ' + error.message}
      </Typography>
    )

  if (isLoading) return 'Loading...'

  return (
    <Box
      sx={{
        display: 'grid',
        marginTop: '15px',
        gridTemplateColumns: { xs: 'auto', lg: 'auto auto' },
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
