import { Box, Container, Typography } from '@mui/material'
import AddTask from './components/AddTask'
import TaskList from './components/TaskList'

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
