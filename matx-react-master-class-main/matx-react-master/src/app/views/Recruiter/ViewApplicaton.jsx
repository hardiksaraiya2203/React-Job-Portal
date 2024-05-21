import React, { useState } from 'react'
import { 
  Box, 
  Container, 
  Grid , 
  Typography,
  Button,
  IconButton,
  Paper,
  Modal,
  FormControlLabel,
  Checkbox,
  Card,
  CardContent,
  Rating,
} from '@mui/material'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import FilterListIcon from '@mui/icons-material/FilterList';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Breadcrumb } from 'app/components'
import { useParams, useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import makeStyles from '@emotion/styled'
import { useEffect } from 'react'
import { advancesearchviewgetJobrequest, viewgetJobrequest } from 'slice/recruiter/ViewApplivastionSlice'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

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
            padding:'  33px 63px'
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
            padding: '33px 71px'
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
            display:'flex',
            padding: '33px 68px' ,

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
            padding: '33px 71px',
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
            display: 'flex',
            justifyContent:'center',
            padding: '34px 20px',
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
            padding:'33px 151px'
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
            padding:'33px 151px'
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
            padding:'33px 151px'
          }}
        >
          Finished
        </Paper>
      </Grid>
    </>
  ),
};


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
          <Grid container item alignItems="center">
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
                xs={4}
                justify="space-around"
                alignItems="center"
                style={{ border: "1px solid #D1D1D1", borderRadius: "5px" }}
              >
                <Grid item>
                  <Checkbox
                    name="dateOfApplication"
                    checked={searchOptions.sort.dateOfApplication.status}
                    onChange={(event) =>
                      setSearchOptions({
                        ...searchOptions,
                        sort: {
                          ...searchOptions.sort,
                          dateOfApplication: {
                            ...searchOptions.sort.dateOfApplication,
                            status: event.target.checked,
                          },
                        },
                      })
                    }
                    id="dateOfApplication"
                  />
                </Grid>
                <Grid item>
                  <label for="dateOfApplication">
                    <Typography>Date of Application</Typography>
                  </label>
                </Grid>
                <Grid item>
                  <IconButton
                    disabled={!searchOptions.sort.dateOfApplication.status}
                    onClick={() => {
                      setSearchOptions({
                        ...searchOptions,
                        sort: {
                          ...searchOptions.sort,
                          dateOfApplication: {
                            ...searchOptions.sort.dateOfApplication,
                            desc: !searchOptions.sort.dateOfApplication.desc,
                          },
                        },
                      });
                    }}
                  >
                    {searchOptions.sort.dateOfApplication.desc ? (
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
                xs={4}
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

export default function ViewApplicaton() {
  const [filterOpen, setFilterOpen] = useState(false);
  const [searchOptions, setSearchOptions] = useState({
    status: {
      all: false,
      applied: false,
      shortlisted: false,
    },
    sort: {
      "jobApplicant.name": {
        status: false,
        desc: false,
      },
      dateOfApplication: {
        status: true,
        desc: true,
      },
      "jobApplicant.rating": {
        status: false,
        desc: false,
      },
    },
  });
  const{id}=useParams()
  console.log(id)

  const[idToview, setIdToview]= useState("");
  const {listData} = useSelector((state)=>state.Viewapplication);
  console.log(listData);
 const handleSubmitForadvancedsearch=()=>{
  dis (advancesearchviewgetJobrequest({
    ...searchOptions,
    id : id,
  }))

}
 const dis=useDispatch();
  useEffect(()=>{
    dis(viewgetJobrequest(id))
  },[idToview])
  return (
    <>
    <Container >
         <Box style={{marginTop:"15px"}} className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: 'Listjobs', path: '/Recruiter/Listjobs' }, { name: 'Appllication' }]} />
      </Box>
      <Grid item >
        <Typography variant="h4" style={{display:'flex', justifyContent:'center'}}>Application</Typography>
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
        getData={handleSubmitForadvancedsearch}
      />
      
          </Grid>
 

          
      {listData.length > 0 ? (
  listData?.map((v) => {
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
Applied On: {(new Date(v.dateOfApplication)).toLocaleDateString()}
</Typography>
<Typography variant="p" style={{color:"#222944",alignItems:"center"}} component="div" >
Education: {v.jobApplicant.education.map((edu) => {
      return `${edu.institutionName}(${edu.startYear}-${edu.endYear})`;
    })}
</Typography>
<Typography variant="p" style={{color:"#222944",alignItems:"center"}} component="div" >
SOP: {v.sop}
</Typography>
</div>
</div>
</CardContent>
<CardContent>
<Grid item direction="column" xs={3}>
<Grid item>
  <Button
  style={{width:'365px'}}
    variant="contained"
    // className={classes.statusBlock}
    color="primary"
    // onClick={() => getResume()}
  >
    Download Resume
  </Button>
</Grid>
<Grid item>
  {buttonSet[v.status]}
</Grid>
</Grid>
{/* <div style={{display:'inline-grid', justifyContent:'center'}}>
<div style={{display:'flex',justifyContent:'center'}}>
  <Button style={{backgroundColor:'#1976d2',padding:'5px 93px', color:'white'}}>DOWNLOAD RESUME</Button>
</div>
<div style={{display:'flex'}}>
  <div>
   <Button style={{padding:'34px 50px',backgroundColor:'rgb(220 133 31)',color:'white'}}> SHORTLIST</Button>
  </div>
  <div>
   <Button style={{padding:'34px 50px',backgroundColor:'#d1345b',color:'white'}}> REJECT</Button>
  </div>
</div>
</div> */}
</CardContent>
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
    </>
  )
}
