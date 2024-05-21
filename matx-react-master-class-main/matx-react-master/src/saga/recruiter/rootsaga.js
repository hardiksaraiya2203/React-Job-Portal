
import { all } from 'redux-saga/effects';
import { watchadvancedsearchgetjob, watchcreatejob, watchdeleteuserdata, watchgetjob, watchgetuser, watchgetuserdata, watchsearchgetjob } from './createjob';
import { watchputjob, watchupdatejob } from './Updatejobsaga';
import { advancedwatchgetviwjobs, watchgetapplicantuser, watchgetviwjobs, watchputapplicantuser, whatchaPutratingforjob, whatchadvancedSrarchgetuser, whatchaendjobUserdeleterequst, whatchapplicationgrequst, whatchapplyjobrequst, whatcharatingforjob, whatcharatingrequst, whatchemployeesgetuser } from './ApplicantuserSaga';
function* rootsaga()
{
    return yield all([watchcreatejob(), watchgetjob(),watchgetuser(),watchgetuserdata (),watchdeleteuserdata()
    ,watchupdatejob(),watchputjob(),watchsearchgetjob(),watchadvancedsearchgetjob(),watchgetapplicantuser(),watchputapplicantuser(),watchgetviwjobs(),advancedwatchgetviwjobs(),
    whatchemployeesgetuser(),whatchadvancedSrarchgetuser(),whatchaendjobUserdeleterequst(),whatcharatingrequst(),whatchapplicationgrequst(),whatcharatingforjob(),whatchaPutratingforjob(),
    whatchapplyjobrequst()])
}
export default rootsaga;