import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <AppBar>
            <Toolbar>
                <Typography align='left' sx={{ flexGrow: 1 }}>BLOGS</Typography>
                <Button ><Link to={"/home"} style={{color:"white"}}  > HOME</Link></Button>
                <Button ><Link to={"/add"} style={{color:"white"}}>ADDLINK</Link></Button>
                
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar
