import { useTheme } from '@emotion/react';
import { LoadingButton } from '@mui/lab';
import { ButtonGroup, Card, Checkbox, Container, Grid, Paper, Stack, TextField, Typography } from '@mui/material';
import { Box } from '@mui/material';
import { Paragraph } from 'app/components/Typography';
import useAuth from 'app/hooks/useAuth';
import axios from 'axios';
import { Formik } from 'formik';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import styled from '@emotion/styled';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ArticleIcon from '@mui/icons-material/Article';
import Button from '@mui/material/Button';
import BackupIcon from '@mui/icons-material/Backup';
import makeStyles from '@emotion/styled';
import * as Yup from 'yup';
import React from 'react'
import { Breadcrumb } from 'app/components';
import { useDispatch, useSelector } from 'react-redux';
import { userrequest } from 'slice/recruiter/userSlice';
import { applicantgetuserrequest, putapplicantuserrequest } from 'slice/recruiter/applicant/ProfileupdateSlice';
import { useEffect } from 'react';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });
  // const initialValues = {
  //   name: '',
  //   skills:'',
  //   type: "applicant"
  // };
  const FlexBox = styled(Box)(() => ({ display: 'flex', alignItems: 'center' }));
const ApllicantProfile = () => {

    const theme = useTheme();
    const { register } = useAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleFormSubmit = (  ) => {

    }
    const useStyles = makeStyles((theme) => ({
        body: {
          padding: "60px 60px",
        },
        inputBox: {
          width: "100%",
          height:"10%"
        },
        submitButton: {
          width: "400px",
        },
      }));
      const MultifieldInput = (props) => {
        // const { education, setEducation } = props;  
        const classes = useStyles();
        const [education, setEducation] = useState([
          {
            institutionName: "",
            startYear: "",
            endYear: "",
          },
        ]);
         
        
          return (
            <>
              {education.map((obj, key) => (
                <Grid
                  item
                  container
                  className={classes.inputBox}
                  key={key}
                  style={{ paddingLeft: 0, paddingRight: 0 }}
                >
                  <Grid item xs={6}>
                    <TextField
                      // label={Institution Name #${key + 1}}
                      value={education[key].institutionName}
                      onChange={(event) => {
                        const newEdu = [...education];
                        newEdu[key].institutionName = event.target.value;
                        setEducation(newEdu);
                      }}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      label="Start Year"
                      value={obj.startYear}
                      variant="outlined"
                      type="number"
                      onChange={(event) => {
                        const newEdu = [...education];
                        newEdu[key].startYear = event.target.value;
                        setEducation(newEdu);
                      }}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      label="EndYear"
                      value={obj.endYear}
                      variant="outlined"
                      type="number"
                      onChange={(event) => {
                        const newEdu = [...education];
                        newEdu[key].endYear = event.target.value;
                        setEducation(newEdu);
                      }}
                    />
                  </Grid>
                </Grid>
              ))}
              <br/>
              <Grid item>
             
                <Button style={{backgroundColor:'#AC0606',color:'white'}}
                 fullWidth
                  variant="contained"
                  color="secondary"
                  onClick={() =>
                    setEducation([
                      ...education,
                      {
                        institutionName: "",
                        startYear: "",
                        endYear: "",
                      },
                    ])
                  }
                  className={classes.inputBox}
                >
                  ADD ANOTHER INSTITUTE DETAILS
                </Button>
              </Grid>
            </>
          );
        };
        const data = useSelector((state)=>state.user.data);
        console.log(data);
        const nav = useNavigate()
      
        const dis = useDispatch();

        const handleInput = (key, value) => {
          setUserData({
            ...userdata,
            [key]: value,
          });
          
        };
        const[userdata, setUserData]=useState({
          name:"",
          education:"",
          Skill: ""
        });
        useEffect(()=> {

          dis(applicantgetuserrequest(userdata))
        },[userdata])
      
        useEffect(()=> {
      
          setUserData(data)
        },[data])
        const handleForSubmit =(e)=>{
          e.preventDefault()
          dis (putapplicantuserrequest(userdata))
          localStorage.setItem('Name' , userdata.name)
          // navigate("/Recruiter/Profile")
          // toast.success("User information updated successfully")
      
      }
  return (
    <Container>
    <Box style={{marginTop:"15px"}} className="breadcrumb">
      <Breadcrumb routeSegments={[{ name: 'Applicant', path: '/applicant' }, { name: 'Profile' }]} />
    </Box>
    <div>
        <div style={{display:"flex", justifyContent:"center"}}>
    <Stack spacing={3} style={{width:"50%", marginTop:"30px", borderTop:"20px"}}>
    <Grid item>
        <Typography variant="h2" style={{display:'flex', justifyContent:'center',  marginBottom: '30px'}}>Profile</Typography>
      </Grid>
    <Paper
          style={{
            padding: "20px",
            outline: "none",
            width:"100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderTop:"20px"
          }}
        >
          <Grid container direction="column" alignItems="stretch" spacing={3} style={{width:"85%", marginTop:"10px"}}>
          <Formik
                onSubmit={handleFormSubmit}
              >
          {({ errors, touched, handleChange, handleBlur, handleSubmit }) => (
                  <form onSubmit={handleSubmit} >
                    <TextField
                      fullWidth
                      size="small"
                      type="text"
                      name="name"
                      label="Name"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={userdata?.name}
                      onChange={(event) =>
                        handleInput("name", event.target.value)
                      }
                      helperText={touched.name && errors.name}
                      error={Boolean(errors.name && touched.name)}
                      sx={{ mb: 3 }}
                    />


                            <MultifieldInput xs={3}
                            fullWidth
                        // education={education}
                        // setEducation={setEducation}
                        name="education"
                        label="education"
                      variant="outlined"
                      />

                      <TextField 
                       style={{marginTop:"18px"}}
                      fullWidth
                      size="small"
                      type="text"
                      name="skills"
                      label="Skills"
                      onBlur={handleBlur}
                      value={userdata?.Skill}
                      onChange={(event) =>
                        handleInput("skill", event.target.value)
                      }
                      helperText={touched.skills && errors.skills}
                      error={Boolean(errors.skills && touched.skills)}
                      sx={{ mb: 3 }}
                    />
                    <ButtonGroup variant="outlined" aria-label="Basic button group" sx={{ mb: 3 }} fullWidth>
                        
                       <Button
                            style={{height:"36px", width:"40%"}}
                             component="label"
                             role={undefined}
                             variant="contained"
                             tabIndex={-1}
                             startIcon={<ArticleIcon />}
                             >
                             
                             <VisuallyHiddenInput type="file" />
                           </Button>   
                            <Button 
                            style={{height:"36px",width:"121%"}}
                            disabled                
                            defaultValue="Resume (.pdf)"
                            >Resume (.pdf)</Button>
                            <Button
                            disabled
                            style={{height:"36px",borderColor:"none", width:"40%"}}
                             component="label"
                             
                             startIcon={<BackupIcon />}
                             >
                           </Button>   
                            </ButtonGroup>


                        <ButtonGroup variant="outlined" aria-label="Basic button group" sx={{ mb: 3 }} fullWidth>
                        
                        <Button
                             style={{height:"36px", width:"40%"}}
                              component="label"
                              role={undefined}
                              variant="contained"
                              tabIndex={-1}
                              startIcon={<AssignmentIndIcon />}
                              >
                              
                              <VisuallyHiddenInput type="file" />
                            </Button>   
                             <Button 
                             style={{height:"36px", width:"121%"}}
                             disabled                
                             defaultValue="Resume (.pdf)"
                             >Profile Photo(.jpg/.png)</Button>
                             <Button
                             disabled
                             style={{height:"36px",borderColor:"none", width:"40%"}}
                              component="label"
                              
                              startIcon={<BackupIcon />}
                              >
                            </Button>   
                             </ButtonGroup>

                  </form>
                )}
                </Formik>
           </Grid>
          <Button
            variant="contained"
            color="primary"
            style={{ padding: "10px 50px", marginTop: "30px" }}
            onClick={handleForSubmit}
          >
            Update Details
          </Button>
        </Paper>
     </Stack>
       </div>
   </div>
 </Container> 
  )
}

export default ApllicantProfile