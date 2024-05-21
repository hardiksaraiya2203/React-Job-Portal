import authFetch, { authFetchGet } from "service/recruiter/authfetch";

const createjobAPI =(data)=>{
    return authFetch('/api/jobs', 'Post', data)
}
export default createjobAPI;
export const getjobData =(pageId)=>{
    return authFetchGet(`/api/jobs?myjobs${pageId}`, 'GET',{})
}
export const userData =(data1)=>{
    return authFetch('/api/user', 'Put', data1)
}
export const usergetData =(data1)=>{
    return authFetchGet('/api/user', 'GET', data1)
}

// DELETE job data start ======-------->
export const deletejobData =(id)=>{
    return authFetchGet(`/api/jobs/${id}`, 'DELETE')
}
// DELETE job data end ======-------->
// SEARCH job data start ======-------->
export const searchgetJobDataSearch = (obj1) => {

    return authFetchGet(`/api/jobs?myjobs=${obj1.pageNumber}&q=${obj1.searchTerm}`, 'GET');
}
// SEARCH job data end ======-------->
// advanced SEARCH job data start ======-------->
export const advancedsearchgetJobDataSearch = (obj) => {
    let url =`/api/jobs?myjobs=${obj.pageNumber}`

    if(obj.jobType.fullTime)
    {
        url = url + "&jobType=" + "Full Time"
    }  
    if(obj.jobType.partTime)
    {
        url = url + "&jobType=" + "Part Time"
    }   
    if(obj.jobType.wfh)
    {
        url = url + "&jobType=" + "Work From Home"
    }    
    if(obj.salary && obj.salary.length> 0)
    {
        if(obj.salary[1]>0){

            url = url + "&salaryMin=" + obj.salary[0]
            url = url + "&salaryMax=" + obj.salary[1]
        }
    }
    if(obj.duration && obj.duration != "0")
    {
        url = url + "&duration=" + obj.duration
    }
    if(obj.sort.salary)
    {
        if(obj.sort.salary.desc)
        {
        url = url + "&desc=" + "salary"
        }
        else
        {
            url = url + "&asc=" + "salary" 
        }
    }

    if(obj.sort.duration)
    {
        if(obj.sort.duration.desc)
        {
        url = url + "&desc=" + "duration"
        }
        else
        {
            url = url + "&asc=" + "duration" 
        }
    }

    if(obj.sort.rating)
    {
        if(obj.sort.rating.desc)
        {
        url = url + "&desc=" + "rating"
        }
        else
        {
            url = url + "&asc=" + "rating" 
        }
    }
    
    return authFetchGet(url, 'GET');
}
// advanced SEARCH job data end ======-------->

// update job  start------------
export const getjobupdatedata =(data)=>{
    return authFetchGet('/api/jobs/'+data, 'GET')
}
export const putjobupdatedata =(data)=>{
    return authFetch(`/api/jobs/${data._id}`, 'Put', data)
}
// update job  end------------

// applicant user ======------->

export const applicantusergetData =(data1)=>{
    return authFetchGet('/api/user', 'GET', data1)
}
export const applicantuserputData =(data1)=>{
    return authFetch('/api/user', 'Put', data1)
}

// applicant user ======------->

// View Application start ====------>

export const GetApplicants =(id) =>
{

    return authFetchGet(`/api/applicants?jobId=${id}&desc=dateOfApplication`,'GET')
}

export const advanceviewjobpoup = (obj) => {
    // jobId=65e6c379845c371eb40ed79f&status=rejected&status=applied&status=shortlisted&asc=jobApplicant.name&asc=jobApplicant.rating&desc=dateOfApplication
    let url =`/api/applicants?jobId=${obj.id}`
    
    if(obj.status.rejected)
    {
        url = url + "&status=" + "rejected"
    }  
    if(obj.status.Accepted)
    {
        url = url + "&status=" + "Accepted"
    }  
    if(obj.status.shortlisted)
    {
        url = url + "&status=" + "shortlisted"
    }  
    if(obj.sort["jobApplicant.name"])
    {
        if(obj.sort["jobApplicant.name"].desc)
        {
        url = url + "&desc=" + "jobApplicant.name"
        }
        else
        {
            url = url + "&asc=" + "jobApplicant.name" 
        }
    }
    if(obj.sort["jobApplicant.rating"])
    {
        if(obj.sort["jobApplicant.rating"].desc)
        {
            url = url + "&desc=" + "jobApplicant.rating"
        }
        else
        {
            url = url + "&asc=" + "jobApplicant.rating" 
        }
    }
    if(obj.sort.dateOfApplication)
    {
        if(obj.sort.dateOfApplication.desc)
        {
        url = url + "&desc=" + "dateOfApplication"
        }
        else
        {
            url = url + "&asc=" + "dateOfApplication" 
        }
    }
    

    
    return authFetchGet(url, 'GET');
}
// View Application end ====------>

// emploees start 

   
export const employeegetuser = (obj) => {
    
    return authFetchGet(`/api/applicants?status=accepted&desc=${obj.deadline}`,'GET', obj)
}

export const advancedsearchemployeegetuser = (obj) => {
    // http://localhost:4444/api/applicants?status=accepted&asc=jobApplicant.name&asc=job.title&asc=jobApplicant.rating&desc=dateOfJoining
     let url = `/api/applicants?status=accepted`

     
     if(obj.sort["jobApplicant.name"])
    {
        if(obj.sort["jobApplicant.name"].desc)
        {
        url = url + "&asc=" + "jobApplicant.name"
        }
        else
        {
            url = url + "&asc=" + "jobApplicant.name" 
        }
    }

    if(obj.sort["job.title"])
    {
        if(obj.sort["job.title"].desc)
        {
        url = url + "&desc=" + "job.title"
        }
        else
        {
            url = url + "&asc=" + "job.title" 
        }
    }

    if(obj.sort.dateOfJoining)
    {
        if(obj.sort.dateOfJoining.desc)
        {
        url = url + "&desc=" + "dateOfJoining"
        }
        else
        {
            url = url + "&asc=" + "dateOfJoining" 
        }
    }
        if(obj.sort["jobApplicant.rating"])
        {
            if(obj.sort["jobApplicant.rating"].desc)
            {
                url = url + "&desc=" + "jobApplicant.rating"
            }
            else
            {
                url = url + "&asc=" + "jobApplicant.rating" 
            }
        }
       
        return authFetchGet(url, 'GET');
}
// emploees end 

// end job start

export const endjobgetRequest = (obj) => {
    
    return authFetch(`/api/applications/${obj.id}`,'PUT', obj)
}


// end job end 
// rating start

export const ratinggetRequest = (obj1) => {
    
    return authFetch(`/api/rating`,'put', obj1)
}


// rating end 

// job rating start

export const ratingforjobRequest = (obj1) => {
    
    return authFetch(`/api/rating`,'put', obj1)
}


export const GetratingforjobRequest = (obj) => {
    
    return authFetchGet(`/api/rating?id=${obj.id}`,'GET')
}
// job rating end 

// APPLICATION start

export const applicationRequest = (obj1) => {
    
    return authFetchGet('/api/applications','GET', obj1)
}


// APPLICATION end 

// APPLICATION start

// http://localhost:4444/api/jobs/65f80665d539261b30007283/applications

export const appplyJobs = (obj) => {
    
    return authFetch(`/api/jobs/${obj.id}/applications`,'POST', obj)
}


// APPLICATION end 


// shortlisted application 
// http://localhost:4444/api/applicants?jobId=65f81226f8a3cf28605c629a&desc=dateOfApplication
export const applicationshortlist = (obj) => {
     
    return authFetch(`/api/applicants?jobId=${obj.id}&desc=dateOfApplication`,'POST', obj)
}

// http://localhost:4444/api/applications/65fbd976604acb2fd026159a
export const  applicationshortlistID = (obj) => {
    
    return authFetch(`/api/applications/${obj.id}`,'POST', obj)
}

// shortlisted application 