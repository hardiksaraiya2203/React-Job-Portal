import { call, put, takeEvery } from "redux-saga/effects"
import { getjobupdatedata, putjobupdatedata } from "service/recruiter/recruiterjob"
import { putjobfaile, putjobrequest, putjobsuccess, updatejobfaile, updatejobrequest, updatejobsuccess } from "slice/recruiter/updatejob"


function* createjobupdate (action)

{
  try{
    let mydat = yield call(getjobupdatedata, action.payload)
  yield  put(updatejobsuccess(mydat))
}
catch(error){
     yield  put(updatejobfaile(error))
 }
}
export function* watchupdatejob ()
{
  return yield takeEvery(updatejobrequest, createjobupdate)
}

function* putjobupdate (action)

{
  try{
    let mydat1 = yield call(putjobupdatedata, action.payload)
  yield  put(putjobsuccess(mydat1))
}
catch(error){
     yield  put(putjobfaile(error))
 }
}
export function* watchputjob ()
{
  return yield takeEvery(putjobrequest, putjobupdate)
}
