import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isloading : false,
  data : null,
  error: null,
  listData : []
}


const createjobslice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    createJobrequest : function(state, {payload}){
        state.isloading = true;
    },
    createJobSuc : function(state, {payload}){
        state.isloading = false;
        state.data = payload;
    },
    createJobfaile : function(state, {payload}){
        state.isloading = false;
        state.error = payload;
    },
    getJobrequest : function(state, {payload}){
      state.isloading = true;
  },
    sucgetJobrequest : function(state, {payload}){
      state.isloading = false;
      state.listData = payload;
  },
    failgetJobrequest : function(state, {payload}){
      state.isloading = false;
      state.error = payload;
  },
    searchgetJobrequest : function(state, {payload}){
      state.isloading = true;
  },
    searchsucgetJobrequest : function(state, {payload}){
      state.isloading = false;
      state.listData = payload;
  },
    searchfailgetJobrequest : function(state, {payload}){
      state.isloading = false;
      state.error = payload;
  },
   advancedsearchgetJobrequest : function(state, {payload}){
      state.isloading = true;
  },
  advancedsearchsucgetJobrequest : function(state, {payload}){
      state.isloading = false;
      state.listData = payload;
  },
  advancedsearchfailgetJobrequest : function(state, {payload}){
      state.isloading = false;
      state.error = payload;
  }
  }
});

export const {createJobrequest,
  createJobSuc,
  createJobfaile,
  getJobrequest,
  sucgetJobrequest,
  searchgetJobrequest,
  searchsucgetJobrequest,
  searchfailgetJobrequest,
  advancedsearchgetJobrequest,
  advancedsearchsucgetJobrequest,
  advancedsearchfailgetJobrequest,
  failgetJobrequest
} = createjobslice.actions

export default createjobslice.reducer