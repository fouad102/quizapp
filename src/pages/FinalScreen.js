import React from 'react'
import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useDispatch, useSelector } from 'react-redux'
import { handle_Score ,handle_Amount } from '../redux/action'
import { useNavigate } from 'react-router-dom'
const FinalScreen = () => {
  const  {score}=useSelector((state)=> state)
  const dispatch=useDispatch()
  const history =useNavigate()

  const handleBackToSetting =()=>{
    dispatch(handle_Score(0))
    dispatch(handle_Amount(50))
    history('/')


  }
  return (
   <Box mt={30}  >
    <Typography variant='h3' fontWeight="bold" mb={3} >Final Score {score}</Typography>
    <Button onClick={handleBackToSetting} variant="outlined">Back To Setting! </Button>

   </Box>
  )
}

export default FinalScreen