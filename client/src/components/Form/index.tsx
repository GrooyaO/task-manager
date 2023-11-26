import React, { useState, useEffect } from 'react'
import { Box, TextField, Button } from '@mui/material'

const SharedForm = ({ initialData, onSubmit, mode }: any) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
  })

  useEffect(() => {
    if (mode === 'edit' && initialData) {
      setFormData({
        title: initialData.title,
        description: initialData.description,
      })
    }
  }, [initialData, mode])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormData({ ...formData, [id]: value })
  }

  const handleFormSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    onSubmit(formData)
    if (mode === 'add') {
      setFormData({ title: '', description: '' })
    }
  }

  return (
    <Box
      component="form"
      onSubmit={handleFormSubmit}
      autoComplete="off"
      noValidate
      sx={{ maxWidth: { lg: '250px' }, margin: '0 auto' }}
    >
      <TextField
        id="title"
        label="Title"
        variant="outlined"
        value={formData.title}
        onChange={handleInputChange}
        fullWidth
        size="small"
      />
      <TextField
        id="description"
        label="Description"
        value={formData.description}
        onChange={handleInputChange}
        variant="outlined"
        fullWidth
        size="small"
      />
      <Button variant="contained" type="submit">
        {mode === 'edit' ? 'Update Task' : 'Add Task'}
      </Button>
    </Box>
  )
}

export default SharedForm
