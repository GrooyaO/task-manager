import { useState } from 'react'
import { Button, TextField, Box } from '@mui/material'
import { Task } from '../../types'
import { apiCreateTask } from '../../api/endpoints'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export default function AddTask() {
  const queryClient = useQueryClient()

  const [formData, setFormData] = useState({
    title: '',
    description: '',
  })

  const { mutate: addTaskMutation } = useMutation({
    mutationFn: (newTask: Task) => apiCreateTask(newTask),
    mutationKey: ['addTask'],
    onSettled: () => queryClient.invalidateQueries({ queryKey: ['tasks'] }),
  })

  function handleFormSubmit(e: React.SyntheticEvent) {
    e.preventDefault()
    addTaskMutation(formData as Task)
    setFormData({ title: '', description: '' })
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { id, value } = e.target
    setFormData({
      ...formData,
      [id]: value,
    })
    console.log(formData)
  }

  return (
    <Box
      component={'form'}
      onSubmit={(e) => handleFormSubmit(e)}
      autoComplete="off"
      noValidate
      sx={{ maxWidth: { lg: '250px' }, margin: '0 auto' }}
    >
      <TextField
        id="title"
        label="Title"
        variant="outlined"
        onChange={handleInputChange}
        fullWidth
        size="small"
      />
      <TextField
        id="description"
        label="Description"
        onChange={handleInputChange}
        variant="outlined"
        fullWidth
        size="small"
      />
      <Button variant="contained" type="submit">
        Add Task
      </Button>
    </Box>
  )
}
