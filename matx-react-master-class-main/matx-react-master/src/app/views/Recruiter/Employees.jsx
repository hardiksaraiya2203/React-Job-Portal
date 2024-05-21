import { Box, Container, Grid, IconButton, Typography,
    Button,
    Chip,
    InputAdornment,
    Paper,
    TextField,
    Modal,
    Slider,
    FormControlLabel,
    FormGroup,
    MenuItem,
    Checkbox,
    Avatar,
    Card,
    Rating,
    CardContent, } from '@mui/material'
import { Breadcrumb } from 'app/components'
import makeStyles from '@emotion/styled'
import React from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import FilterListIcon from '@mui/icons-material/FilterList';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { advancesearchuserrequest, employeegetuserrequest, endjobUserdeleterequst, ratingputapplicanterequest, } from 'slice/recruiter/applicant/ProfileupdateSlice';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { toast } from 'react-toastify';



const useStyles = makeStyles((theme) => ({
    body: {
      height: "inherit",
    },
    statusBlock: {
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textTransform: "uppercase",
    },
    jobTileOuter: {
      padding: "30px",
      margin: "20px 0",
      boxSizing: "border-box",
      width: "100%",
    },
    popupDialog: {
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    avatar: {
      width: theme.spacing(17),
      height: theme.spacing(17),
    },
  }));

const FilterPopup = (props) => {
    const classes = useStyles();
    const { open, handleClose, searchOptions, setSearchOptions, getData } = props;
    return (
      <Modal style={{display:'flex', justifyContent:'center',marginTop:'200px',height:'30%'}} open={open} onClose={handleClose} className={classes.popupDialog}>
        <Paper
          style={{
            padding: '50px',
            outline: 'none',
            minWidth: '60%',
          }}
        >
          <Grid container direction="column" alignItems="center" spacing={3}>
            {/* <Grid container item alignItems="center">
              <Grid item xs={3}>
                Application Status
              </Grid>
              <Grid
                container
                item
                xs={9}
                justify="space-around"
                // alignItems="center"
              >
                <Grid item>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="rejected"
                        checked={searchOptions.status.rejected}
                        onChange={(event) => {
                          setSearchOptions({
                            ...searchOptions,
                            status: {
                              ...searchOptions.status,
                              [event.target.name]: event.target.checked,
                            },
                          });
                        }}
                      />
                    }
                    label="Rejected"
                  />
                </Grid>
                <Grid item>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="applied"
                        checked={searchOptions.status.applied}
                        onChange={(event) => {
                          setSearchOptions({
                            ...searchOptions,
                            status: {
                              ...searchOptions.status,
                              [event.target.name]: event.target.checked,
                            },
                          });
                        }}
                      />
                    }
                    label="Applied"
                  />
                </Grid>
                <Grid item>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="shortlisted"
                        checked={searchOptions.status.shortlisted}
                        onChange={(event) => {
                          setSearchOptions({
                            ...searchOptions,
                            status: {
                              ...searchOptions.status,
                              [event.target.name]: event.target.checked,
                            },
                          });
                        }}
                      />
                    }
                    label="Shortlisted"
                  />
                </Grid>
              </Grid>
            </Grid> */}
            <Grid container item alignItems="center">
              <Grid item xs={3}>
                Sort
              </Grid>
              <Grid item container direction="row" xs={9}>
                <Grid
                  item
                  container
                  xs={6}
                  justify="space-around"
                  alignItems="center"
                  style={{ border: "1px solid #D1D1D1", borderRadius: "5px" }}
                >
                  <Grid item>
                    <Checkbox
                      name="name"
                      checked={searchOptions.sort["jobApplicant.name"].status}
                      onChange={(event) =>
                        setSearchOptions({
                          ...searchOptions,
                          sort: {
                            ...searchOptions.sort,
                            "jobApplicant.name": {
                              ...searchOptions.sort["jobApplicant.name"],
                              status: event.target.checked,
                            },
                          },
                        })
                      }
                      id="name"
                    />
                  </Grid>
                  <Grid item>
                    <label for="name">
                      <Typography>Name</Typography>
                    </label>
                  </Grid>
                  <Grid item>
                    <IconButton
                      disabled={!searchOptions.sort["jobApplicant.name"].status}
                      onClick={() => {
                        setSearchOptions({
                          ...searchOptions,
                          sort: {
                            ...searchOptions.sort,
                            "jobApplicant.name": {
                              ...searchOptions.sort["jobApplicant.name"],
                              desc: !searchOptions.sort["jobApplicant.name"].desc,
                            },
                          },
                        });
                      }}
                    >
                      {searchOptions.sort["jobApplicant.name"].desc ? (
                        <ArrowDownwardIcon />
                      ) : (
                        <ArrowUpwardIcon />
                      )}
                    </IconButton>
                  </Grid>
                </Grid>
                <Grid
                  item
                  container
                  xs={6}
                  justify="space-around"
                  alignItems="center"
                  style={{ border: "1px solid #D1D1D1", borderRadius: "5px" }}
                >
                  <Grid item>
                    <Checkbox
                      name="jobTitle"
                      checked={searchOptions.sort["job.title"].status}
                      onChange={(event) =>
                        setSearchOptions({
                          ...searchOptions,
                          sort: {
                            ...searchOptions.sort,
                            "job.title": {
                              ...searchOptions.sort["job.title"],
                              status: event.target.checked,
                            },
                          },
                        })
                      }
                      id="jobTitle"
                    />
                  </Grid>
                  <Grid item>
                    <label for="jobTitle">
                      <Typography>Job Title</Typography>
                    </label>
                  </Grid>
                  <Grid item>
                    <IconButton
                      disabled={!searchOptions.sort["job.title"].status}
                      onClick={() => {
                        setSearchOptions({
                          ...searchOptions,
                          sort: {
                            ...searchOptions.sort,
                            "job.title": {
                              ...searchOptions.sort["job.title"],
                              desc: !searchOptions.sort["job.title"].desc,
                            },
                          },
                        });
                      }}
                    >
                      {searchOptions.sort["job.title"].desc ? (
                        <ArrowDownwardIcon />
                      ) : (
                        <ArrowUpwardIcon />
                      )}
                    </IconButton>
                  </Grid>
                </Grid>
                <Grid
                  item
                  container
                  xs={6}
                  justify="space-around"
                  alignItems="center"
                  style={{ border: "1px solid #D1D1D1", borderRadius: "5px" }}
                >
                  <Grid item>
                    <Checkbox
                      name="dateOfJoining"
                      checked={searchOptions.sort.dateOfJoining.status}
                      onChange={(event) =>
                        setSearchOptions({
                          ...searchOptions,
                          sort: {
                            ...searchOptions.sort,
                            dateOfJoining: {
                              ...searchOptions.sort.dateOfJoining,
                              status: event.target.checked,
                            },
                          },
                        })
                      }
                      id="dateOfJoining"
                    />
                  </Grid>
                  <Grid item>
                    <label for="dateOfJoining">
                      <Typography>Date of Joining</Typography>
                    </label>
                  </Grid>
                  <Grid item>
                    <IconButton
                      disabled={!searchOptions.sort.dateOfJoining.status}
                      onClick={() => {
                        setSearchOptions({
                          ...searchOptions,
                          sort: {
                            ...searchOptions.sort,
                            dateOfJoining: {
                              ...searchOptions.sort.dateOfJoining,
                              desc: !searchOptions.sort.dateOfJoining.desc,
                            },
                          },
                        });
                      }}
                    >
                      {searchOptions.sort.dateOfJoining.desc ? (
                        <ArrowDownwardIcon />
                      ) : (
                        <ArrowUpwardIcon />
                      )}
                    </IconButton>
                  </Grid>
                </Grid>
                <Grid
                  item
                  container
                  xs={6}
                  justify="space-around"
                  alignItems="center"
                  style={{ border: "1px solid #D1D1D1", borderRadius: "5px" }}
                >
                  <Grid item>
                    <Checkbox
                      name="rating"
                      checked={searchOptions.sort["jobApplicant.rating"].status}
                      onChange={(event) =>
                        setSearchOptions({
                          ...searchOptions,
                          sort: {
                            ...searchOptions.sort,
                            "jobApplicant.rating": {
                              ...searchOptions.sort[["jobApplicant.rating"]],
                              status: event.target.checked,
                            },
                          },
                        })
                      }
                      id="rating"
                    />
                  </Grid>
                  <Grid item>
                    <label for="rating">
                      <Typography>Rating</Typography>
                    </label>
                  </Grid>
                  <Grid item>
                    <IconButton
                      disabled={!searchOptions.sort["jobApplicant.rating"].status}
                      onClick={() => {
                        setSearchOptions({
                          ...searchOptions,
                          sort: {
                            ...searchOptions.sort,
                            "jobApplicant.rating": {
                              ...searchOptions.sort["jobApplicant.rating"],
                              desc: !searchOptions.sort["jobApplicant.rating"]
                                .desc,
                            },
                          },
                        });
                      }}
                    >
                      {searchOptions.sort["jobApplicant.rating"].desc ? (
                        <ArrowDownwardIcon />
                      ) : (
                        <ArrowUpwardIcon />
                      )}
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
  
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                style={{ padding: "10px 50px" }}
                onClick={() => {getData(); handleClose()}}>
                Apply
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Modal>
    );
  };
  
  const colorSet = {
    applied: "#3454D1",
    shortlisted: "#DC851F",
    accepted: "#09BC8A",
    rejected: "#D1345B",
    deleted: "#B49A67",
    cancelled: "#FF8484",
    finished: "#4EA5D9",
  };
const Employees = () => {
    const [filterOpen, setFilterOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const [openEndJob, setOpenEndJob] = useState(false);
    const [searchOptions, setSearchOptions] = useState({
      sort: {
        "jobApplicant.name": {
          status: false,
          desc: false,
        },
        "job.title": {
          status: false,
          desc: false,
        },
        dateOfJoining: {
          status: true,
          desc: true,
        },
        "jobApplicant.rating": {
          status: false,
          desc: false,
        },
      },
    });

// end job poup start

  const [popopen, setpopOpen] = useState(false);
  const [idToendjob, setIdToendjob] = useState();

  const handleClickOpen = (id) => {
    setpopOpen(true);
    setIdToendjob(id)
  };

  const handleClose = () => {
    setpopOpen(false);
  };

  const SubmitEndJOb =(e) =>{
    e.preventDefault() 
     dis(endjobUserdeleterequst({
      dateOfJoining : new Date().toLocaleDateString(),
      status : 'finished',
      id : idToendjob
     }))
     toast.success("Job End Sucessful")
  }
// end job poup end 


// rating job poup start
const [ratingget, setRatingget] = useState();
const [idrating, setIdrating] = useState();
const [ratingopen, setRatingopen] = useState(false);
const handleClickOpenrating = (id, rating) => {
  setRatingopen(true);
  setRatingget(rating)
  setIdrating(id)
};

  const handleCloserating = () => {
    setRatingopen(false);
  };
  const ratingSubmit =()=>{
    dis(ratingputapplicanterequest({
      rating : ratingget,
      applicantId : idrating
    }))
    toast.success("Rating updated successfully");
  handleCloserating()
 
  }
// rating job poup end 



    const data = useSelector((state)=>state.applicantuser.data);
    console.log(data)
    const[user, setUser]=useState("")
    useEffect(()=>{
        setUser(data)
    },[])
    const dis=useDispatch();
    useEffect(()=>{
      dis(employeegetuserrequest(user))
    },[user])

    // advanced search start 

     const advanceSearchApplicantuser =()=>{
        dis(advancesearchuserrequest({
            ...searchOptions,
        }))
     }


    // advanced search end 
  return (
    <>
    <Container>
    <Box style={{marginTop:"15px"}} className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: 'AcceptedEmployees', path: '/Recruiter/Employees' }, { name: 'Employees' }]} />
      </Box>

      <Grid item >
        <Typography variant="h4" style={{display:'flex', justifyContent:'center'}}>Employees</Typography>
      </Grid>

      <Grid item style={{display:'flex', justifyContent:'center'}}> 
              <IconButton>
                <FilterListIcon onClick={() => setFilterOpen(true)} />
              </IconButton>
      <FilterPopup
        open={filterOpen}
        searchOptions={searchOptions}
        setSearchOptions={setSearchOptions}
        handleClose={() => setFilterOpen(false)}
        getData={advanceSearchApplicantuser}
      />
      
          </Grid>


   
        <div style={{gap:"15px", marginBottom:"35px"}}>
               {data?.length > 0 ? (
         
            data?.map((v) => {
              return (
                
                <Card sx={{ minWidth: 275 }} style={{marginTop:"20px", alignItems:"center"}} >
                <div style={{display:"flex", justifyContent:"space-between"}}>
                <CardContent >
                <div style={
                {display:"flex",gap:'10px'}
                }>
                
                <div >
                <Typography >
                <IconButton style={{width:'125px',height:'125px'}}>
                <AccountCircleIcon style={{fontSize:'125px',color:'#bbbbbb'}}/>
                </IconButton>
                </Typography>
                </div>
                <div>
                
                <Typography variant="h5" style={{color:"#222944",alignItems:"center"}} component="div" >
                {v.jobApplicant.name}
                </Typography>
                <Grid item style={{marginTop:'10px'}}>
                  <Rating value={v.jobApplicant.rating !== -1 ? v.jobApplicant.rating : null} readOnly />
                </Grid>
                <Typography variant="p" style={{color:"#222944",alignItems:"center"}} component="div" >
                <span style={{fontWeight:'500'}}>Job Title:</span> {v.job.title}
                </Typography>
                <Typography variant="p" style={{color:"#222944",alignItems:"center"}} component="div" >
                <span style={{fontWeight:'500'}}>Role: </span> {v.job.jobType}
                </Typography>
                <Typography variant="p" style={{color:"#222944",alignItems:"center"}} component="div" >
                <span style={{fontWeight:'500'}}>Applied On: </span> {(new Date(v.dateOfApplication)).toLocaleDateString()}
                </Typography>
                <Typography variant="p" style={{color:"#222944",alignItems:"center"}} component="div" >
                <span style={{fontWeight:'500'}}>SOP: </span> {v.sop}
                </Typography>
                </div>
                </div>
                </CardContent>
                <CardContent>
                <Grid item container direction="column" xs={3}>
          <Grid item>
            <Button
            style={{width:'365px'}}
              variant="contained"
            //   className={classes.statusBlock}
              color="primary"
            //   onClick={() => getResume()}
            >
              Download Resume
            </Button>
          </Grid>
          <Grid item container style={{width:'367px'}} xs>
            {/* {buttonSet[application.status]} */}
            <Button
              variant="contained"
              color="primary"
            //   className={classes.statusBlock}
              style={{
                background: "#09BC8A",
                // width:'365px'
                padding: '25px 163px 26px 148px'
              }}
              onClick={()=>{handleClickOpen(v._id)}}
            >
              End Job
            </Button>
          </Grid>
          <Grid item>
            <Button
            style={{width:'365px'}}
              variant="contained"
              color="primary"
            //   className={classes.statusBlock}
              onClick={ ()=>{handleClickOpenrating(v.userId, v.jobApplicant.rating)}}
            >

              Rate Applicant
            </Button>
          </Grid>
        </Grid>
                </CardContent>
                </div>
                     </Card>
                
              )

            })
          
          ) : (
            <Typography variant="h5" style={{ textAlign: "center" }}>
              No Applicant Found
            </Typography>
          )}
        </div>
 
    </Container>
    <Dialog
        open={popopen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
        <DialogTitle id="responsive-dialog-title" style={{textAlign:"center",padding:"20px 80px",fontSize:'28px'}}>
        Are you Sure?
        </DialogTitle>
       
        <DialogActions style={{display:"flex", justifyContent:"space-around"}}>
          <Button onClick={SubmitEndJOb}  style={{backgroundColor:"red", color:"white", padding:"6px 18px"}} autoFocus>
            DELETE
          </Button>
          <Button autoFocus onClick={handleClose}  style={{backgroundColor:"#222944", color:"white", padding:"6px 18px"}}>
            CANCEL
          </Button>
        </DialogActions>
        </DialogContent>
      </Dialog>

      <Dialog
        open={ratingopen}
        onClose={handleCloserating}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
        <Rating
        style={{textAlign:"center",margin:"23px 55px",fontSize:'28px'}}
  name="rating"
  value={ratingget}
  onChange={(event, newValue) => {
    setRatingget(newValue);
  }}
/>
        <DialogActions  style={{display:"flex", justifyContent:"space-around"}}>
          <Button   onClick={ratingSubmit}  style={{backgroundColor:"red", color:"white", padding:"6px 18px"}} autoFocus >
            SUBMIT
          </Button>
        </DialogActions>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default Employees