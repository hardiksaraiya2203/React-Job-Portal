import { Button} from '@mui/material'
import React from 'react'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Loginsingin = () => {
  return (
    <div style={{height:"50vh"}}>
        <div style={{ display:'flex', justifyContent:'center'}}>

      <Link to='/session/signup'><Button>Recruiter</Button></Link> 
      <Link to='/session/signupForApplicant'><Button>Applicant</Button></Link> 
        </div>
    </div>
  )
}

export default Loginsingin