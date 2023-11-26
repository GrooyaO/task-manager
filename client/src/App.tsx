import { Box, Container, Typography } from '@mui/material'
import { apiListTasks } from './api/endpoints'
import AddTask from './components/AddTask'
import TaskList from './components/TaskList'
import { Task } from './types'
import { useQuery } from '@tanstack/react-query'

export function useTasks() {
  return useQuery({
    queryKey: ['tasks'],
    queryFn: async (): Promise<Array<Task>> => {
      const data = await apiListTasks()
      return data
    },
  })
}

export default function App() {
  return (
    <Container maxWidth="md" sx={{ textAlign: 'center', margin: '0 auto' }}>
      <Box>
        <Typography variant="h1" color="primary" sx={{ marginBottom: '35px' }}>
          Task manager
        </Typography>
        <AddTask />
        <TaskList />
      </Box>
    </Container>
  )
}
