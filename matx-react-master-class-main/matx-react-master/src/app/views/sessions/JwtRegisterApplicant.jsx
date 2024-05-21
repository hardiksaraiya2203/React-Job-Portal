import { useTheme } from '@emotion/react';
import { LoadingButton } from '@mui/lab';
import { ButtonGroup, Card, Checkbox, Grid, TextField } from '@mui/material';
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

const FlexBox = styled(Box)(() => ({ display: 'flex', alignItems: 'center' }));

const JustifyBox = styled(FlexBox)(() => ({ justifyContent: 'center' }));

const ContentBox = styled(JustifyBox)(() => ({
  height: '100%',
  padding: '32px',
  background: 'rgba(0, 0, 0, 0.01)'
}));

const JWTRegister = styled(JustifyBox)(() => ({
  background: '#1A2038',
  minHeight: '100vh !important',
  '& .card': {
    maxWidth: 800,
    minHeight: 400,
    margin: '1rem',
    display: 'flex',
    borderRadius: 12,
    alignItems: 'center'
  }
}));

// inital login credentials
const initialValues = {
  email: '',
  password: '',
  name: '',
  skills:'',
  type: "applicant"
};

// form field validation schema
const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, 'Password must be 6 character length')
    .required('Password is required!'),
  email: Yup.string().email('Invalid Email address').required('Email is required!')
});

const JwtRegisterApplicant = () => {
  const theme = useTheme();
  const { register } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = (values) => {
    setLoading(true);

    try {
     fetch("http://localhost:4444/auth/signup",{ 
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        'content-type': "application/json"
      }
    
     }).then(y=>y.json())
     .then((y)=>{
       setLoading(false);
      console.log(y)
       if(!y.errors && !y.driver)
       { 
        // navigate('/session/signin');
        toast.success("Register successfull")
        localStorage.setItem('token' , JSON.stringify(y))
       }
    
     }).catch((error)=>{
       console.log(error);
        alert("This Email is Already exiting");
     })
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };
  // const useStyles = makeStyles((theme) => ({
  //   body: {
  //     padding: "60px 60px",
  //   },
  //   inputBox: {
  //     width: "100%",
  //     height:"10%"
  //   },
  //   submitButton: {
  //     width: "400px",
  //   },
  // }));
  // const MultifieldInput = (props) => {
  //   const classes = useStyles();
  //   // const { education, setEducation } = props;
  //   const [education, setEducation] = useState([
  //     {
  //       institutionName: "",
  //       startYear: "",
  //       endYear: "",
  //     },
  //   ]);
     
    
  //     return (
  //       <>
  //         {education.map((obj, key) => (
  //           <Grid
  //             item
  //             container
  //             className={classes.inputBox}
  //             key={key}
  //             style={{ paddingLeft: 0, paddingRight: 0 }}
  //           >
  //             <Grid item xs={6}>
  //               <TextField
  //                 // label={Institution Name #${key + 1}}
  //                 value={education[key].institutionName}
  //                 // onChange={(event) => {
  //                 //   const newEdu = [...education];
  //                 //   newEdu[key].institutionName = event.target.value;
  //                 //   setEducation(newEdu);
  //                 // }}
  //                 variant="outlined"
  //               />
  //             </Grid>
  //             <Grid item xs={3}>
  //               <TextField
  //                 label="Start Year"
  //                 value={obj.startYear}
  //                 variant="outlined"
  //                 type="number"
  //                 // onChange={(event) => {
  //                 //   const newEdu = [...education];
  //                 //   newEdu[key].startYear = event.target.value;
  //                 //   setEducation(newEdu);
  //                 // }}
  //               />
  //             </Grid>
  //             <Grid item xs={3}>
  //               <TextField
  //                 label="EndYear"
  //                 value={obj.endYear}
  //                 variant="outlined"
  //                 type="number"
  //                 // onChange={(event) => {
  //                 //   const newEdu = [...education];
  //                 //   newEdu[key].endYear = event.target.value;
  //                 //   setEducation(newEdu);
  //                 // }}
  //               />
  //             </Grid>
  //           </Grid>
  //         ))}
  //         <br/>
  //         <Grid item>
         
  //           <Button style={{backgroundColor:'#AC0606',color:'white'}}
  //            fullWidth
  //             variant="contained"
  //             color="secondary"
  //             onClick={() =>
  //               setEducation([
  //                 ...education,
  //                 {
  //                   institutionName: "",
  //                   startYear: "",
  //                   endYear: "",
  //                 },
  //               ])
  //             }
  //             className={classes.inputBox}
  //           >
  //             ADD ANOTHER INSTITUTE DETAILS
  //           </Button>
  //         </Grid>
  //       </>
  //     );
  //   };
   
  return (
    <JWTRegister>
      <Card className="card">
        <Grid container>
          <Grid item sm={6} xs={12} >
            <ContentBox style={{backgroundColor:"white"}}>
              <img
              
                width="139%"
                alt="Register"
                src="/assets/images/singup5.jpg"
              />
            </ContentBox>
          </Grid>

          <Grid item sm={6} xs={12}>
            <Box p={4} height="100%">
              <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={validationSchema}
              >
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                    <TextField
                      fullWidth
                      size="small"
                      type="text"
                      name="name"
                      label="Name"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={values.name}
                      onChange={handleChange}
                      helperText={touched.name && errors.name}
                      error={Boolean(errors.name && touched.name)}
                      sx={{ mb: 3 }}
                    />

                    <TextField
                      fullWidth
                      size="small"
                      type="email"
                      name="email"
                      label="Email"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={values.email}
                      onChange={handleChange}
                      helperText={touched.email && errors.email}
                      error={Boolean(errors.email && touched.email)}
                      sx={{ mb: 3 }}
                    />
                    <TextField
                      fullWidth
                      size="small"
                      name="password"
                      type="password"
                      label="Password"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={values.password}
                      onChange={handleChange}
                      helperText={touched.password && errors.password}
                      error={Boolean(errors.password && touched.password)}
                      sx={{ mb: 2 }}
                    />

                            {/* <MultifieldInput xs={3}
                        // education={education}
                        // setEducation={setEducation}
                        name="education"
                        label="education"
                      variant="outlined"
                      /> */}

                      <TextField 
                       style={{marginTop:"18px"}}
                      fullWidth
                      size="small"
                      type="text"
                      name="skills"
                      label="Skills"
                      onBlur={handleBlur}
                      value={values.Skill}
                      onChange={handleChange}
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
                    <FlexBox gap={1} alignItems="center">
                      <Checkbox
                        size="small"
                        name="remember"
                        onChange={handleChange}
                        checked={values.remember}
                        sx={{ padding: 0 }}
                      />

                      <Paragraph fontSize={13}>
                        I have read and agree to the terms of service.
                      </Paragraph>
                    </FlexBox>

                    <LoadingButton
                      type="submit"
                      color="primary"
                      loading={loading}
                      variant="contained"

                      sx={{ mb: 2, mt: 3 }}
                    >
                      Regiser
                    </LoadingButton>

                    <Paragraph>
                      Already have an account?
                      <NavLink
                        to="/session/signin"
                        style={{ color: theme.palette.primary.main, marginLeft: 5 }}
                      >
                        Login
                      </NavLink>
                    </Paragraph>
                  </form>
                )}
              </Formik>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </JWTRegister>
  );
};

export default JwtRegisterApplicant;
