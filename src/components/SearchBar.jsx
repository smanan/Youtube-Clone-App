import React , { useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper , IconButton } from '@mui/material'
import {SearchIcon} from '@mui/icons-material'

const SearchBar = () => {
  return (
    <div>
      <Paper component="form" onSubmit={()=>{}} sx={{borderRadius: 20 , border:'1px solid #e3e3e3'}}>Test</Paper>
    </div>
  )
}

export default SearchBar
