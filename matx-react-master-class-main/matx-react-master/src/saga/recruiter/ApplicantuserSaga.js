import { Faileadvancesearchuserrequest, Faileapplicationforuserrequest, Faileapplicationshortlistrequest, Faileapplyjobrequest, FaileendjobUserdeleterequst, FaileratingforjobuserPutrequest, Faileratingforjobuserrequest, Faileratingputapplicanterequest, Sucadvancesearchuserrequest, Sucapplicationforuserrequest, Sucapplicationshortlistrequest, Sucapplyjobrequest, SucendjobUserdeleterequst, SucratingforjobuserPutrequest, Sucratingforjobuserrequest, Sucratingputapplicanterequest, advancesearchuserrequest, applicantgetuserfaile, applicantgetuserrequest, applicantgetusersuccess, applicationforuserrequest, applicationshortlistrequest, applyjobrequest, employeeFailgetuserrequest, employeeSucgetuserrequest, employeegetuserrequest, endjobUserdeleterequst, putapplicantuserfaile, putapplicantuserrequest, putapplicantusersuccess, ratingforjobuserPutrequest, ratingforjobuserrequest, ratingputapplicanterequest } from "slice/recruiter/applicant/ProfileupdateSlice"
import { call, put, takeEvery } from "redux-saga/effects"
import { GetApplicants, GetratingforjobRequest, advancedsearchemployeegetuser, advanceviewjobpoup, applicantuserputData, applicationRequest, applicationshortlist, appplyJobs, employeegetuser, endjobgetRequest, getjobupdatedata, ratingforjobRequest, ratinggetRequest } from "service/recruiter/recruiterjob"
import { advancesearchviewfailgetJobrequest, advancesearchviewgetJobrequest, advancesearchviewsucgetJobrequest, viewfailgetJobrequest, viewgetJobrequest, viewsucgetJobrequest } from "slice/recruiter/ViewApplivastionSlice"



function* getapplicantuser (action)

{
  try{
    let mydat = yield call(getjobupdatedata, action.payload)
  yield  put(applicantgetusersuccess(mydat))
}
catch(error){
     yield  put(applicantgetuserfaile(error))
 }
}
export function* watchgetapplicantuser ()
{
  return yield takeEvery(applicantgetuserrequest, getapplicantuser)
}
function* putapplicantuser (action)

{
  try{
    let mydat = yield call(applicantuserputData, action.payload)
  yield  put(putapplicantusersuccess(mydat))
}
catch(error){
     yield  put(putapplicantuserfaile(error))
 }
}
export function* watchputapplicantuser ()
{
  return yield takeEvery(putapplicantuserrequest, putapplicantuser)
}


// view Application start =---==------->
function* viewgetJobs (action)

{
  try{
    let mydat = yield call(GetApplicants, action.payload)
  yield put(viewsucgetJobrequest(mydat))
}
catch(error){
     yield put(viewfailgetJobrequest(error))
 }
}
export function* watchgetviwjobs ()
{
  return yield takeEvery(viewgetJobrequest, viewgetJobs )
}

// advanced job seach start

function* advancesearchviewgetJobs (action)

{
  try{
    let mydat = yield call(advanceviewjobpoup, action.payload)
  yield put(advancesearchviewsucgetJobrequest(mydat))
}
catch(error){
     yield put(advancesearchviewfailgetJobrequest(error))
 }
}
export function* advancedwatchgetviwjobs ()
{
  return yield takeEvery(advancesearchviewgetJobrequest, advancesearchviewgetJobs )
}


// advanced job seach  end 
// view Application end =---==------->

// employees get user start

function* employeesGetuser (action)

{
  try{
    let mydat = yield call(employeegetuser, action.payload)
  yield put(employeeSucgetuserrequest(mydat))
}
catch(error){
     yield put(employeeFailgetuserrequest(error))
 }
}
export function* whatchemployeesgetuser ()
{
  return yield takeEvery(employeegetuserrequest, employeesGetuser )
}


// employees get user end


// employees get user start

function* advancedSearchemployeesGetuser (action)

{
  try{
    let mydat = yield call(advancedsearchemployeegetuser, action.payload)
  yield put(Sucadvancesearchuserrequest(mydat))
}
catch(error){
     yield put(Faileadvancesearchuserrequest(error))
 }
}
export function* whatchadvancedSrarchgetuser ()
{
  return yield takeEvery(advancesearchuserrequest, advancedSearchemployeesGetuser )
}


// employees get user end


// end job get user start

function* endjobemployeesGetuser (action)

{
  try{
    let mydat = yield call(endjobgetRequest, action.payload)
  yield put(SucendjobUserdeleterequst(mydat))
}
catch(error){
     yield put(FaileendjobUserdeleterequst(error))
 }
}
export function* whatchaendjobUserdeleterequst ()
{
  return yield takeEvery(endjobUserdeleterequst, endjobemployeesGetuser )
}


// end job get user end


// rating update start

function* enratingemployeesGetuser (action)

{
  try{
    let mydat = yield call(ratinggetRequest, action.payload)
  yield put(Sucratingputapplicanterequest(mydat))
}
catch(error){
     yield put(Faileratingputapplicanterequest(error))
 }
}
export function* whatcharatingrequst ()
{
  return yield takeEvery(ratingputapplicanterequest, enratingemployeesGetuser )
}


// rating update end

// rating update start

function* ratingForJob (action)

{
  try{
    let mydat = yield call(ratingforjobRequest, action.payload)
  yield put(Sucratingforjobuserrequest(mydat))
}
catch(error){
     yield put(Faileratingforjobuserrequest(error))
 }
}
export function* whatcharatingforjob ()
{
  return yield takeEvery(ratingforjobuserrequest, ratingForJob )
}

function* ratingForJobGet (action)

{
  try{
    let mydat = yield call(GetratingforjobRequest, action.payload)
  yield put(SucratingforjobuserPutrequest(mydat))
}
catch(error){
     yield put(FaileratingforjobuserPutrequest(error))
 }
}
export function* whatchaPutratingforjob ()
{
  return yield takeEvery(ratingforjobuserPutrequest, ratingForJobGet )
}


// rating update end


// users applications start

function* applictionforuser (action)

{
  try{
    let mydat = yield call(applicationRequest, action.payload)
  yield put(Sucapplicationforuserrequest(mydat))
}
catch(error){
     yield put(Faileapplicationforuserrequest(error))
 }
}
export function* whatchapplicationgrequst ()
{
  return yield takeEvery(applicationforuserrequest, applictionforuser )
}


// user applications end

// apply applications start

function* jobapplyappliction (action)

{
  try{
    let mydat = yield call(appplyJobs, action.payload)
  yield put( Sucapplyjobrequest(mydat))
}
catch(error){
     yield put(Faileapplyjobrequest(error))
 }
}
export function* whatchapplyjobrequst ()
{
  return yield takeEvery(applyjobrequest, jobapplyappliction )
}


// apply applications end


// applications shortlist start

function* japplicationusershortlist (action)

{
  try{
    let mydat = yield call(applicationshortlist, action.payload)
  yield put(Sucapplicationshortlistrequest (mydat))
}
catch(error){
     yield put(Faileapplicationshortlistrequest(error))
 }
}
export function* whatchapplicationshortlist ()
{
  return yield takeEvery(applicationshortlistrequest, japplicationusershortlist )
}


// applications shortlist end