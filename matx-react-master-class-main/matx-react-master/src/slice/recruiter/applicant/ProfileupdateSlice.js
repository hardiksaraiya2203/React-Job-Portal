const { createSlice } = require("@reduxjs/toolkit")


const initialState = {
    isloading : false,
  data : null,
  error: null,
  listData:[]
}


const ProfileupdateSlice = createSlice({
  name :"applicantuser",
  initialState, 
  reducers :{
    applicantgetuserrequest : function(state, {payload}){
        state.isloading = true;
    },
    applicantgetusersuccess : function(state, {payload}){
        state.isloading = false;
        state.data = payload;       
    },
    applicantgetuserfaile : function(state, {payload}){
        state.isloading = false;
        state.error = payload;
    },
    putapplicantuserrequest : function(state, {payload}){
        state.isloading = true;
    },
    putapplicantusersuccess : function(state, {payload}){
        state.isloading = false;
        state.data = payload;       
    },
    putapplicantuserfaile : function(state, {payload}){
        state.isloading = false;
        state.error = payload;
    },
    employeegetuserrequest : function(state, {payload}){
        state.isloading = true;
    },
    employeeSucgetuserrequest : function(state, {payload}){
        state.isloading = false;
        state.data = payload;
    },
    employeeFailgetuserrequest : function(state, {payload}){
        state.isloading = false;
        state.error = payload;
    },
    advancesearchuserrequest : function(state, {payload}){
        state.isloading = true;
    },
    Sucadvancesearchuserrequest : function(state, {payload}){
        state.isloading = false;
        state.data = payload;
    },
   Faileadvancesearchuserrequest : function(state, {payload}){
        state.isloading = false;
        state.error = payload;
    },
    endjobUserdeleterequst : function(state, {payload}){
        state.isloading = true;
    },
    SucendjobUserdeleterequst : function(state, {payload}){
        state.isloading = false;
        state.data = payload;
    },
   FaileendjobUserdeleterequst : function(state, {payload}){
        state.isloading = false;
        state.error = payload;
    },
    ratingputapplicanterequest : function(state, {payload}){
        state.isloading = true;
    },
    Sucratingputapplicanterequest : function(state, {payload}){
        state.isloading = false;
        state.data = payload;
    },
   Faileratingputapplicanterequest : function(state, {payload}){
        state.isloading = false;
        state.error = payload;
    },

    ratingforjobuserrequest : function(state, {payload}){
        state.isloading = true;
    },
    Sucratingforjobuserrequest : function(state, {payload}){
        state.isloading = false;
        state.data = payload;
    },
   Faileratingforjobuserrequest : function(state, {payload}){
        state.isloading = false;
        state.error = payload;
    },
    
    
    ratingforjobuserPutrequest : function(state, {payload}){
        state.isloading = true;
    },
    SucratingforjobuserPutrequest : function(state, {payload}){
        state.isloading = false;
        state.data = payload;
    },
   FaileratingforjobuserPutrequest : function(state, {payload}){
        state.isloading = false;
        state.error = payload;
    },


     applicationforuserrequest : function(state, {payload}){
        state.isloading = true;
    },
    Sucapplicationforuserrequest : function(state, {payload}){
        state.isloading = false;
        state.listData = payload;
    },
   Faileapplicationforuserrequest : function(state, {payload}){
        state.isloading = false;
        state.error = payload;
    },


     applyjobrequest : function(state, {payload}){
        state.isloading = true;
    },
    Sucapplyjobrequest : function(state, {payload}){
        state.isloading = false;
        state.listData = payload;
    },
   Faileapplyjobrequest : function(state, {payload}){
        state.isloading = false;
        state.error = payload;
    },
     applicationshortlistrequest : function(state, {payload}){
        state.isloading = true;
    },
    Sucapplicationshortlistrequest : function(state, {payload}){
        state.isloading = false;
        state.listData = payload;
    },
   Faileapplicationshortlistrequest : function(state, {payload}){
        state.isloading = false;
        state.error = payload;
    },
  }
})

export const {applicantgetuserrequest,applicantgetusersuccess,applicantgetuserfaile,putapplicantuserrequest, putapplicantusersuccess ,putapplicantuserfaile,
    applicationshortlistrequest,
    Sucapplicationshortlistrequest,
    Faileapplicationshortlistrequest,
    employeegetuserrequest,
    employeeSucgetuserrequest,
    employeeFailgetuserrequest,
    ratingforjobuserPutrequest,
    SucratingforjobuserPutrequest,
    FaileratingforjobuserPutrequest,
    advancesearchuserrequest,
    applicationforuserrequest,
    Sucapplicationforuserrequest,
    Faileapplicationforuserrequest,
    Sucadvancesearchuserrequest,
    Faileadvancesearchuserrequest,
    ratingforjobuserrequest,
    Sucratingforjobuserrequest,
    Faileratingforjobuserrequest,
    endjobUserdeleterequst,
    SucendjobUserdeleterequst,
    ratingputapplicanterequest,
    Sucratingputapplicanterequest,
    Faileratingputapplicanterequest,
    FaileendjobUserdeleterequst,
    applyjobrequest,
    Sucapplyjobrequest,
    Faileapplyjobrequest
} = ProfileupdateSlice.actions
export default ProfileupdateSlice.reducer