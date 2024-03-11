import React from 'react'
import { Box, Typography } from '@mui/material'
const Header = () => {
  return (
    <Box width={"100%"} display="flex" justifyContent={"center"} marginTop={"3rem"} color={"blue"}>
   <Typography fontWeight={"600"} fontSize="3rem">My TODO List</Typography>
   </Box>
  )
}

export default Header