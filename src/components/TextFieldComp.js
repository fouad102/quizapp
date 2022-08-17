import React from 'react'
import { FormControl ,TextField} from '@mui/material'
import { Box } from '@mui/system'
import { useDispatch } from 'react-redux'
import { handle_Amount } from '../redux/action'

const TextFieldComp = () => {
    const dispatch =useDispatch()
    const handleChange =(e)=>{
        dispatch(handle_Amount(e.target.value))

    }
    return (
        <Box mt={3} width="100%">
            <FormControl fullWidth size='small'>
                <TextField
                    onChange={handleChange}
                    label="Amount of Question"
                    type='number'
                    variant='outlined'
                    size='small'
                >

                </TextField>

            </FormControl>
        </Box>
    )
}

export default TextFieldComp