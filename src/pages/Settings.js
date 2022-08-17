import React from 'react'
import SelectFields from '../components/SelectFields'
import { Box } from '@mui/system'
import { Button, CircularProgress, Typography } from '@mui/material'
import TextFieldComp from '../components/TextFieldComp'
import useAxios from '../hooks/useAxios'
import { useNavigate } from 'react-router-dom'


const Settings = () => {
  const { response, error, loading } = useAxios({ url: "/api_category.php" })
  const history = useNavigate()
  if (loading) {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    )
  }
  if (error) {
    return (
      <Typography color="red" variant="h6" mt={20}>
        some Went Wrong!

      </Typography>
    )
  }
  const difficultyOptions = [
    { id: "easy", name: "Easy" },
    { id: "medium", name: "Medium" },
    { id: "hard", name: "Hard" }
  ]
  const typeOptions = [
    { id: "multiple", name: "Multiple Choice" },
    { id: "boolean", name: "True / False" },
  ]
  const handleSubmit = (e) => {
    e.preventDefault();
    history('/questions');
  }
  return (
    <form onSubmit={handleSubmit}>
      <SelectFields options={response.trivia_categories} label="Category" />
      <SelectFields options={difficultyOptions} label="Difficulty" />
      <SelectFields options={typeOptions} label="Type" />
      <TextFieldComp />
      <Box mt={3}>
        <Button fullWidth variant='contained' type="submit">Get Started</Button>
      </Box>
    </form>

  )
}

export default Settings