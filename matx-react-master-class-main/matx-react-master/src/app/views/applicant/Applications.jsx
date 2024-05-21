import { Box, Card, CardActions, CardContent, Container, Dialog, DialogActions, DialogContent, Grid, Icon, Paper, Rating, Typography } from '@mui/material'
import { Breadcrumb } from 'app/components'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { applicationforuserrequest, ratingforjobuserPutrequest, ratingforjobuserrequest, ratingputapplicanterequest } from 'slice/recruiter/applicant/ProfileupdateSlice';
const colorSet = {
    applied: "#3454D1",
    shortlisted: "#DC851F",
    accepted: "#09BC8A",
    rejected: "#D1345B",
    deleted: "#B49A67",
    cancelled: "#FF8484",
    finished: "#4EA5D9",
  };
  const buttonSet = {
  
    applied: (
      <>
      <div style={{display:"flex"}}>
  
      
        <Grid item xs>
          <Button
            // className={classes.statusBlock}
            style={{
              background: colorSet["shortlisted"],
              color: "#ffffff",
              padding: '101px 130px',
              width: '102%',    
            }}
            // onClick={() => updateStatus("shortlisted")}
          >
            Shortlist
          </Button>
        </Grid>
        <Grid item xs>
          <Button
            // className={classes.statusBlock}
            style={{
              background: colorSet["rejected"],
              color: "#ffffff",
              padding: '101px 130px',
              width: '102%',
            }}
            // onClick={() => updateStatus("rejected")}
          >
            Reject
          </Button>
        </Grid>
        </div>
      </>
    ),
    shortlisted: (
      <>
      <div style={{display:"flex"}}>
        <Grid item xs >
          <Button
            // className={classes.statusBlock}
            style={{
              background: colorSet["accepted"],
              color: "#ffffff",
              ppadding: '101px 130px',
              width: '102%',
  
            }}
            // onClick={() => updateStatus("accepted")}
          >
            Accept
          </Button>
        </Grid>
        <Grid item xs>
          <Button
            // className={classes.statusBlock}
            style={{
              background: colorSet["rejected"],
              color: "#ffffff",
              padding: '101px 130px',
              width: '102%',
            }}
            // onClick={() => updateStatus("rejected")}
          >
            Reject
          </Button>
        </Grid>
        </div>
      </>
    ),
    rejected: (
      <>
        <Grid item xs>
          <Paper
            // className={classes.statusBlock}
            style={{
              background: colorSet["rejected"],
              color: "#ffffff",
              padding: '101px 130px',
              width: '102%',
            }}
          >
            Rejected
          </Paper>
        </Grid>
      </>
    ),
    accepted: (
      <>
        <Grid item xs>
          <Paper
            // className={classes.statusBlock}
            style={{
              background: colorSet["accepted"],
              color: "#ffffff",
              padding: '101px 130px',
              width: '102%',
            }}
          >
            Accepted
          </Paper>
        </Grid>
      </>
    ),
    cancelled: (
      <>
        <Grid item xs>
          <Paper
            // className={classes.statusBlock}
            style={{
              background: colorSet["cancelled"],
              color: "#ffffff",
              padding: '101px 130px',
              width: '102%',
            }}
          >
            Cancelled
          </Paper>
        </Grid>
      </>
    ),
    finished: (
      <>
        <Grid item xs>
          <Paper
            // className={classes.statusBlock}
            style={{
              background: colorSet["finished"],
              color: "#ffffff",
              padding: '101px 130px',
              width: '102%',
            }}
          >
            Finished
          </Paper>
        </Grid>
      </>
    ),
  };
  
const Applications = () => {
    const {listData} = useSelector((y)=>y.applicantuser);
    // console.log(listData)
    const[applications, setApplications]=useState("")
    console.log(applications)
    useEffect(()=>{
        setApplications(listData)
    },[])
    const dis=useDispatch();
    useEffect(()=>{
      dis(applicationforuserrequest(applications))
    },[applications])


    
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
    dis(ratingforjobuserPutrequest({
        id: idrating
    }))

    dis(ratingforjobuserrequest({
      rating : ratingget,
      jobId : idrating,
    }))
  
    toast.success("Rating updated successfully");
  handleCloserating()
 
  }

//   useEffect(()=>{
//     dis(ratingforjobuserPutrequest(ratingget))
//   },[])
// rating job poup end 
  return (
    <>
    <Container style={{marginBottom:'50px'}}>
    <Box style={{marginTop:"15px"}} className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: 'Applications', path: '/applicant/Applications' }, { name: 'Applications' }]} />
      </Box>

      <Grid item >
        <Typography variant="h4" style={{display:'flex', justifyContent:'center'}}>Applications</Typography>
      </Grid>

      {listData.length > 0 ? (
           listData?.map((v) => {
            return (
              <Card sx={{ minWidth: 275 }} style={{marginTop:"20px", alignItems:"center"}} >
     <div style={{display:"flex", justifyContent:"space-between"}}>
    <CardContent >
      <Typography variant="h5" style={{color:"#222944",alignItems:"center"}} component="div" >
      <Icon fontSize="large" style={{color:"rgb(25 118 210)"}}>{"business_center"}</Icon> {v.job.title}
      </Typography> <br/>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
      <b> Posted Job </b>: {v.recruiter.name}
      </Typography>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        <b>Role :</b> {v.job.jobType}
      </Typography>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
      <b>Salary :</b> {v.job.salary}
      </Typography>
      <Typography  color="text.secondary" gutterBottom>
      <b>duration</b> : {v.job.duration}
      </Typography>
    
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        <b>skills :</b> {v.jobApplicant.skills}
      </Typography>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        <b>Applied On:</b> {(new Date(v.dateOfApplication)).toLocaleDateString()}
      </Typography>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        <b>Joined On:</b> {(new Date(v.dateOfJoining)).toLocaleDateString()}
      </Typography>
    </CardContent>
    
    <CardActions style={{display:"grid"}} >
      <Button   style={{border:"none", backgroundColor:'unset' }} size="small">{buttonSet[v.status]}</Button>
      {v.status === "accepted" ||
          v.status === "finished" ? (
            <Grid item>
               <Button  onClick={ ()=>{handleClickOpenrating(v.jobId, v.jobApplicant.rating)}} style={{backgroundColor:"#222944", color:"white",
        backgroundColor: 'rgb(25 118 210)',
        color: 'white',
        border: 'unset',
        cursor:'pointer',
        borderRadius: '3px',
        padding: '8px 127px' }} size="small">RATE JOB</Button>
            </Grid>
          ) : null}
    
      
    </CardActions>
    </div>
             </Card>
              
            )

          })
        ) : (
          <Typography variant="h5" style={{ textAlign: "center" }}>
            No Applications Found
          </Typography>
        )}
      </Container>


      <Dialog
        open={ratingopen}
        onClose={handleCloserating}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
        <Rating
        style={{border:'unset', textAlign:"center",margin:"23px 55px",fontSize:'28px'}}
  name="rating"
  value={ratingget}
  onChange={(event, newValue) => {
    setRatingget(newValue);
  }}
/>
        <DialogActions  style={{display:"flex", justifyContent:"space-around"}}>
          <Button   onClick={ratingSubmit}  style={{backgroundColor:"red", color:"white", padding:"6px 18px", border:'unset', cursor:'pointer'}} autoFocus >
            SUBMIT
          </Button>
        </DialogActions>
        </DialogContent>
      </Dialog>
      </>
  )
}

export default Applications