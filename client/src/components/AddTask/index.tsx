import { useState } from 'react'
import { Button, TextField, Box } from '@mui/material'
import { Task } from '../../types'
import { apiCreateTask } from '../../api/endpoints'

export default function AddTask() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
  })

  function addTask(e: React.SyntheticEvent) {
    e.preventDefault()
    apiCreateTask(formData as Task)
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
      onSubmit={(e) => {
        addTask(e)
      }}
    >
      <TextField
        id="title"
        label="Title"
        variant="outlined"
        onChange={handleInputChange}
      />
      <TextField
        id="description"
        label="Description"
        variant="outlined"
        onChange={handleInputChange}
      />
      <Button variant="text" type="submit">
        Add Task
      </Button>
    </Box>
  )
}
