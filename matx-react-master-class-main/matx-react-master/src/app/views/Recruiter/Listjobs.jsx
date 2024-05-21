import { Box, Button, Card, Checkbox, Container, FormControlLabel, Grid, Icon, IconButton,  InputAdornment, MenuItem, Modal, Paper, Rating, Slider } from '@mui/material'
import { Breadcrumb } from 'app/components'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { advancedsearchfailgetJobrequest, advancedsearchgetJobrequest, getJobrequest, searchgetJobrequest, viewgetJobrequest } from 'slice/recruiter/createjobslice'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import makeStyles from '@emotion/styled'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Link, createSearchParams, useNavigate, useSearchParams } from 'react-router-dom'
import { useState } from 'react'
import { putjobrequest, updatejobrequest } from 'slice/recruiter/updatejob'
import { toast } from 'react-toastify'
import { userdeleterequest } from 'slice/recruiter/userSlice'


// style of filter start --------->

const useStyles = makeStyles((theme) => ({
  body: {
    height: "inherit",
  },
  button: {
    width: "100%",
    height: "100%",
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
  statusBlock: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textTransform: "uppercase",
  },
}));

// style of filter end --------->

const FilterPopup = (props) => {
  const classes = useStyles();
  const { open, handleClose, searchOptions, setSearchOptions, getData } = props;
  return (
    <Modal style={{display:'flex', justifyContent:'center',marginTop:'200px'}} open={open} onClose={handleClose} className={classes.popupDialog}>
      <Paper
        style={{
          padding: '50px',
          outline: 'none',
          minWidth: '60%',
          height:'60%',

        }}
      >
        <Grid container direction="column" alignItems="center" spacing={3}>
          <Grid container item alignItems="center">
            <Grid item xs={3}>
              Job Type
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
                      name="fullTime"
                      checked={searchOptions.jobType.fullTime}
                      onChange={(event) => {
                        setSearchOptions({
                          ...searchOptions,
                          jobType: {
                            ...searchOptions.jobType,
                            [event.target.name]: event.target.checked
                          }
                        });
                      }}
                    />
                  }
                  label="Full Time"
                />
              </Grid>
              <Grid item>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="partTime"
                      checked={searchOptions.jobType.partTime}
                      onChange={(event) => {
                        setSearchOptions({
                          ...searchOptions,
                          jobType: {
                            ...searchOptions.jobType,
                            [event.target.name]: event.target.checked
                          }
                        });
                      }}
                    />
                  }
                  label="Part Time"
                />
              </Grid>
              <Grid item>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="wfh"
                      checked={searchOptions.jobType.wfh}
                      onChange={(event) => {
                        setSearchOptions({
                          ...searchOptions,
                          jobType: {
                            ...searchOptions.jobType,
                            [event.target.name]: event.target.checked
                          }
                        });
                      }}
                    />
                  }
                  label="Work From Home"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid container item alignItems="center">
            <Grid item xs={3}>
              Salary
            </Grid>
            <Grid item xs={9}>
              <Slider
                valueLabelDisplay="auto"
                valueLabelFormat={(value) => {
                  return value * (100000 / 100);
                }}
                marks={[
                  { value: 0, label: '0' },
                  { value: 100, label: '100000' }
                ]}
                value={searchOptions.salary}
                onChange={(event, value) =>
                  setSearchOptions({
                    ...searchOptions,
                    salary: value
                  })
                }
              />
            </Grid>
          </Grid>
          <Grid container item alignItems="center">
            <Grid item xs={3}>
              Duration
            </Grid>
            <Grid item xs={9}>
              <TextField
                select
                label="Duration"
                variant="outlined"
                fullWidth
                value={searchOptions.duration}
                onChange={(event) =>
                  setSearchOptions({
                    ...searchOptions,
                    duration: event.target.value
                  })
                }
              >
                <MenuItem value="0">All</MenuItem>
                <MenuItem value="1">1</MenuItem>
                <MenuItem value="2">2</MenuItem>
                <MenuItem value="3">3</MenuItem>
                <MenuItem value="4">4</MenuItem>
                <MenuItem value="5">5</MenuItem>
                <MenuItem value="6">6</MenuItem>
                <MenuItem value="7">7</MenuItem>
              </TextField>
            </Grid>
          </Grid>
          <Grid container item alignItems="center">
            <Grid item xs={3}>
              Sort
            </Grid>
            <Grid item container direction="row" xs={9}>
              <Grid
                item
                container
                xs={4}
                justify="space-around"
                alignItems="center"
                style={{ border: '1px solid #D1D1D1', borderRadius: '5px' }}
              >
                <Grid item>
                  <Checkbox
                    name="salary"
                    checked={searchOptions.sort.salary.status}
                    onChange={(event) =>
                      setSearchOptions({
                        ...searchOptions,
                        sort: {
                          ...searchOptions.sort,
                          salary: {
                            ...searchOptions.sort.salary,
                            status: event.target.checked
                          }
                        }
                      })
                    }
                    id="salary"
                  />
                </Grid>
                <Grid item>
                  <label for="salary">
                    <Typography>Salary</Typography>
                  </label>
                </Grid>
                <Grid item>
                  <IconButton
                    disabled={!searchOptions.sort.salary.status}
                    onClick={() => {
                      setSearchOptions({
                        ...searchOptions,
                        sort: {
                          ...searchOptions.sort,
                          salary: {
                            ...searchOptions.sort.salary,
                            desc: !searchOptions.sort.salary.desc
                          }
                        }
                      });
                    }}
                  >
                    {searchOptions.sort.salary.desc ? <Icon fontSize="large">{"arrow_drop_down"}</Icon> : <Icon fontSize="large">{"arrow_drop_up"}</Icon>}
                  </IconButton>
                </Grid>
              </Grid>
              <Grid
                item
                container
                xs={4}
                justify="space-around"
                alignItems="center"
                style={{ border: '1px solid #D1D1D1', borderRadius: '5px' }}
              >
                <Grid item>
                  <Checkbox
                    name="duration"
                    checked={searchOptions.sort.duration.status}
                    onChange={(event) =>
                      setSearchOptions({
                        ...searchOptions,
                        sort: {
                          ...searchOptions.sort,
                          duration: {
                            ...searchOptions.sort.duration,
                            status: event.target.checked
                          }
                        }
                      })
                    }
                    id="duration"
                  />
                </Grid>
                <Grid item>
                  <label for="duration">
                    <Typography>Duration</Typography>
                  </label>
                </Grid>
                <Grid item>
                  <IconButton
                    disabled={!searchOptions.sort.duration.status}
                    onClick={() => {
                      setSearchOptions({
                        ...searchOptions,
                        sort: {
                          ...searchOptions.sort,
                          duration: {
                            ...searchOptions.sort.duration,
                            desc: !searchOptions.sort.duration.desc
                          }
                        }
                      });
                    }}
                  >
                    {searchOptions.sort.duration.desc ? <Icon fontSize="large">{"arrow_drop_down"}</Icon>  : <Icon fontSize="large">{"arrow_drop_up"}</Icon> }
                  </IconButton>
                </Grid>
              </Grid>
              <Grid
                item
                container
                xs={4}
                justify="space-around"
                alignItems="center"
                style={{ border: '1px solid #D1D1D1', borderRadius: '5px' }}
              >
                <Grid item>
                  <Checkbox
                    name="rating"
                    checked={searchOptions.sort.rating.status}
                    onChange={(event) =>
                      setSearchOptions({
                        ...searchOptions,
                        sort: {
                          ...searchOptions.sort,
                          rating: {
                            ...searchOptions.sort.rating,
                            status: event.target.checked
                          }
                        }
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
                    disabled={!searchOptions.sort.rating.status}
                    onClick={() => {
                      setSearchOptions({
                        ...searchOptions,
                        sort: {
                          ...searchOptions.sort,
                          rating: {
                            ...searchOptions.sort.rating,
                            desc: !searchOptions.sort.rating.desc
                          }
                        }
                      });
                    }}
                  >
                    {searchOptions.sort.rating.desc ? <Icon fontSize="large">{"arrow_drop_down"}</Icon> : <Icon fontSize="large">{"arrow_drop_up"}</Icon> }
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <Button
              variant="contained"
              color="primary"
              style={{ padding: '10px 50px' }}
              onClick={() => {handleClose(); getData();}}
            >
              Apply
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Modal>
  );
};


 function ListJobs(){
  const {data, isloading, error ,listData} = useSelector((y)=>y.jobs);
  console.log(data);
  console.log(listData);
     const dis = useDispatch()

    useEffect(()=>{
      dis(getJobrequest(1))
    },[])

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const [opendelete, setOpenDelete] = useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    
    const [idToDelete, setIdToDelete] = useState("");
    const handleClickOpenDelete = (id) => {
      setOpenDelete(true);
      console.log(id);
      setIdToDelete(id);
    };
    
    const handleDelete = () => {
      dis(userdeleterequest(idToDelete));  
      handleCloseDelete();
    };
  const handleCloseDelete= () => {
    setOpenDelete(false);
  };

  // update jobs start ==----------------------->
  const updateData = useSelector((y)=>y.update.data);
  console.log(updateData);
  const [update, setUpdate]= useState({
  maxApplicants : updateData?.maxApplicants,
  maxPositions :updateData?.maxPositions,
  salary :  updateData?.salary
  })
  const [idToUpdate, setIdToUpdate] = useState("");

  
  const handleClickOpenUpdate = (id) => {
    setOpen(true);
    setIdToUpdate(id);
  }
const navigate = useNavigate()
useEffect(()=> {

  dis(updatejobrequest(idToUpdate))
},[idToUpdate])
useEffect(()=> {

  setUpdate(updateData)
},[updateData])

const handleInput = (key, value) => {
  setUpdate({
    ...update,
    [key]: value,
  });
  
};
const handleSubmitForUpdate =(e)=>{
  e.preventDefault()
  dis (putjobrequest({...update,_id:idToUpdate} ))
  navigate("/Recruiter/Listjobs")
  toast.success("User information updated successfully")
  handleClose()

}
// update jobs end ==----------------------->
// search jobs start ==----------------------->
const handleSubmitForsearch=(e)=>{
  dis (searchgetJobrequest({
    pageNumber : 1,
    searchTerm : e.target.value
  }))

}



// Filter start ------------>


const [jobs, setJobs] = useState([]);
const [filterOpen, setFilterOpen] = useState(false);
const [searchOptions, setSearchOptions] = useState({
  query: "",
  jobType: {
    fullTime: false,
    partTime: false,
    wfh: false,
  },
  salary: [0, 0],
  duration: "0",
  sort: {
    salary: {
      status: false,
      desc: false,
    },
    duration: {
      status: false,
      desc: false,
    },
    rating: {
      status: false,
      desc: false,
    },
  },
});
console.log(searchOptions)
// Filter end ------------>

// search jobs end ==----------------------->

// advanced search jobs start ==----------------------->
const handleSubmitForadvancedsearch=()=>{
  dis (advancedsearchgetJobrequest({
    ...searchOptions,
    pageNumber : 1
  }))

}


// advanced search jobs end ==----------------------->
const clearAll = () => {
  dis(getJobrequest(1));
}

// view Application start ======------->
const nav = useNavigate("")
// const[idToview, setIdview]=useState("")
// console.log(idToview)
// useEffect(()=>{
  
// },[idToview])
const Applicationhandlesubmit =(id)=>{
   nav(`/Recruiter/ViewApplicaton/`+ id)
 }

// view Application end ======------->
  return (
    
    <Container style={{marginBottom:'30px'}} >
      <Box style={{marginTop:"15px"}} className="breadcrumb" >
        <Breadcrumb  routeSegments={[{ name: 'ListJobs', path: '/Recruiter' }, { name: 'ListJobs' }]}  />
      </Box>
      <Grid item style={{marginTop: "20px", marginBottom: "20px"}}>
        <Typography variant="h3" style={{display:'flex', justifyContent:'center', fontFamily:"serif"}}>My Job</Typography><hr style={{width:"10%", borderColor:"rgb(25 118 210)"}}/>
      </Grid>
        <Grid item style={{display:'flex', justifyContent:'center'}} >
              <TextField
                label="Search Jobs"
                onBlur={handleSubmitForsearch}
                InputProps={{
                  endAdornment: (
                    <InputAdornment>
                      <IconButton>
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  )
                }}
                style={{ width: '500px' }}
                variant="outlined"
              /><Button variant="outlined" style={{margin : "0px 10px", padding : "14px"}} onClick={clearAll}>Clear</Button>
            </Grid>
            <Grid item style={{display:'flex', justifyContent:'center'}}> 
              <IconButton>
                <FilterListIcon onClick={() => setFilterOpen(true)} />
              </IconButton>
            </Grid>
          <FilterPopup
        open={filterOpen}
        searchOptions={searchOptions}
        setSearchOptions={setSearchOptions}
        handleClose={() => setFilterOpen(false)}
        getData={handleSubmitForadvancedsearch}
      />
 
      { 
        <div style={{gap:"15px"}}>
          {
            listData?.map((v) => {
              return (
                <Card sx={{ minWidth: 275 }} style={{marginTop:"20px", alignItems:"center"}} >
       <div style={{display:"flex", justifyContent:"space-between"}}>
      <CardContent >
        <Typography variant="h5" style={{color:"#222944",alignItems:"center"}} component="div" >
        <Icon fontSize="large" style={{color:"rgb(25 118 210)"}}>{"business_center"}</Icon> {v.title}
        </Typography>
        <Grid item style={{marginTop:'10px'}}>
            <Rating value={listData.rating !== -1 ? listData.rating : null} readOnly />
          </Grid>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <b>Date :</b> {v.dateOfPosting}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <b>maxApplicants :</b> {v.maxApplicants}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        <b> Posted Job </b>: {v.recruiter.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        <b>Jobtype</b> : {v.jobType}
        </Typography>
        <Typography variant="body2">
        Salary : {v.salary}
        </Typography>
      
      </CardContent>
      
      <CardActions style={{display:"grid"}} >
        <Button onClick={()=>{Applicationhandlesubmit(v._id)}} style={{backgroundColor:"#222944", color:"white", padding:"60px 39px"}} size="small">View Application</Button>
        <Button onClick={()=>{ handleClickOpenUpdate(v._id) }} style={{backgroundColor:"rgb(25 118 210)", color:"white", margin:"0px 0px",padding:"8px 0px"}} size="small">Update</Button>
          <Button onClick={()=>{ handleClickOpenDelete(v._id) }} style={{backgroundColor:"#4791db",  color:"white", margin:"0px 0px",padding:"8px 0px"}} size="small">Delete</Button>
      </CardActions>
      </div>
               </Card>
                
              )

            })
          }
        </div>
      }
      {/* update modal start  */}

       <React.Fragment >
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
        
      >
        <DialogTitle style={{textAlign:"center"}} >Update Details</DialogTitle>
        <DialogContent  >
                   <TextField
                    label="Maximum Number Of Applicants"
                   InputLabelProps={{
                    shrink: true,
                      }}
                     type="number"
                    variant="outlined"
                    value={update?.maxApplicants}
                    onChange={(event) => {
                      handleInput("maxApplicants", event.target.value);
                    }}
                    style={{marginTop:"10px"}}
                    fullWidth
                  />
                   <TextField
                    label="Positions Available"
                    type="number"
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true,
                        }}
                    value={update?.maxPositions}
                    onChange={(event) => {
                      handleInput("maxPositions", event.target.value);
                    }}
                    style={{marginTop:"10px"}}
                    fullWidth
                  />
                   <Grid item>
                   <TextField
                   style={{marginTop:"10px"}}
                    label="Salary"
                    type="number"
                    InputLabelProps={{
                      shrink: true,
                        }}
                    variant="outlined"
                    value={update?.salary}
                    onChange={(event) => {
                      handleInput("salary", event.target.value);
                    }}
                   
                    fullWidth
                  />
                </Grid>
        </DialogContent>
        <DialogActions style={{display:"flex", justifyContent:"space-around", marginBottom:"14px",    padding: "16px 37px"}}>
          <Button onClick={handleClose} style={{backgroundColor:"red", color:"white", padding:"7px 27px"}}>Cancel</Button>
          <Button type="submit" onClick={handleSubmitForUpdate} style={{backgroundColor:"#222944", color:"white", padding:"7px 27px"}}>Update</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
   {/* update modal end  */}
    {/* delete modal start  */}
    <React.Fragment style={{width:"344px", height:"auto"}} >
    {/* style={{padding:"50px 50px"}} */}
      <Dialog
        fullScreen={fullScreen}
        open={opendelete}
        onClose={handleCloseDelete}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title" style={{textAlign:"center",padding:"20px 80px"}}>
        Are you Sure?
        </DialogTitle>
       
        <DialogActions style={{display:"flex", justifyContent:"space-around"}}>
          <Button onClick={handleDelete} style={{backgroundColor:"red", color:"white", padding:"6px 18px"}} autoFocus>
            DELETE
          </Button>
          <Button autoFocus onClick={handleCloseDelete} style={{backgroundColor:"#222944", color:"white", padding:"6px 18px"}}>
            CANCEL
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
    {/* delete modal end  */}
</Container>

  )
}


export default ListJobs;

