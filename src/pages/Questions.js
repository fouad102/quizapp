
import { Button, CircularProgress, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useAxios from '../hooks/useAxios'
import { useNavigate } from 'react-router-dom'
import { handle_Score } from '../redux/action'
import { decode } from 'html-entities'




const getrandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max))
}

const Questions = () => {
  const history = useNavigate()
  const { question_category, question_difficulty, question_type, amount_of_question, score } = useSelector((state) => state)
  let apiUrl = `/api.php?amount=${amount_of_question}`
  if (question_category) {
    apiUrl = apiUrl.concat(`&category=${question_category}`)
  }
  if (question_difficulty) {
    apiUrl = apiUrl.concat(`&difficulty=${question_difficulty}`)
  }
  if (question_type) {
    apiUrl = apiUrl.concat(`&type=${question_type}`)
  }
  console.log(apiUrl)

  //api 
  const { response, loading } = useAxios({ url: apiUrl });
  const dispatch = useDispatch()

  // console.log(response)
  const [questionIndex, setQuestionIndex] = useState(0)
  const [options, setOptions] = useState([])
  // console.log(response.results[0].question)
  console.log(options)


  useEffect(() => {

    if (response?.results.length) {
      const question = response.results[questionIndex]
      let answers = [...question.incorrect_answers]
      answers.splice(getrandomInt(question.incorrect_answers.length), 0, question.correct_answer)
      console.log(question)
      setOptions(answers)
    }
  }, [response, questionIndex])


  if (loading) {
    <Box mt={6}>
      <CircularProgress />
    </Box>
  }
  const handleClickAnswer = (e) => {
    const question = response.results[questionIndex]
    if (e.target.textContent === question.correct_answer) {
      dispatch(handle_Score(score + 1))
    }
    if (questionIndex + 1 < response.results.length) {
      setQuestionIndex(questionIndex + 1)
    }
    else {
      history('/score')

    }
  }
  // let vv = response.results[questionIndex].question;

  return (
    <Box>

      {response ? <>
        <Typography variant="h4">Question {questionIndex + 1}</Typography>
        <Typography mt={6}>{decode(response.results[questionIndex].question)}</Typography>

        {options.map((data, id) => (

          <Box mt={2} key={id}>
            <Button onClick={handleClickAnswer} variant="contained">{decode(data)}</Button>

          </Box>
        ))}

        <Box mt={6}>Score {score} / {response.results.length}</Box>
      </> : <CircularProgress />}


    </Box>
  )
}

export default Questions