import { Box, TextField } from '@mui/material'
import React, { useState } from 'react'

const TodoForm = () => {
    const [todo,setTodo] = useState<string>("")
    const handleSubmit = (e:React.FormEvent) =>{
        e.preventDefault();
    }
  return (
    <form action="" onSubmit={handleSubmit}>
        <Box display={"flex"} justifyContent={"center"} marginTop={"1.6rem"} >
        <TextField
         value={todo}
         placeholder='Enter a todo...'
         onChange={(e) => setTodo(e.target.value)}
         sx={{width:"50rem",outline:"none", borderBottom:"1px solid blue"}}
         size='small'
         
         autoFocus
         />
         </Box>
    </form>
  )
}

export default TodoForm