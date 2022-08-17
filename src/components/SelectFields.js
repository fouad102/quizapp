import { FormControl, InputLabel, Select, MenuItem } from "@mui/material"
import { Box } from '@mui/system'
import { useDispatch } from 'react-redux'
import React, { useState } from 'react'
import { handle_Category, handle_Difficulty, handle_Type } from '../redux/action'


const SelectFields = props => {
  const { label, options } = props
  const dispatch = useDispatch()
  const [value, setValue] = useState('')
  const handlerChange = (e) => {
    setValue(e.target.value)
    switch (label) {
      case "Category":

        dispatch(handle_Category(e.target.value))
        break;


      case "Difficulty":

        dispatch(handle_Difficulty(e.target.value))
        break;

      case "Type":

        dispatch(handle_Type(e.target.value))
        break;


      default:
        return;
    }
  }
  return (
    <Box mt={4} width="100%">
      <FormControl fullWidth size="small">
        <InputLabel>{label}</InputLabel>
        <Select value={value} onChange={handlerChange} label={label}>
          {options.map(({ id, name }) => (
            <MenuItem value={id} key={id}>{name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}

export default SelectFields