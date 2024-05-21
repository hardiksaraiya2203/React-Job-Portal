import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isloading : false,
    data : null,
    error: null
}

const updatejob = createSlice({
  name: "update",
  initialState,
  reducers: {
    updatejobrequest : function(state, {payload}){
        state.isloading = true;
    },
    updatejobsuccess : function(state, {payload}){
        state.isloading = false;
        state.data = payload;
    },
    updatejobfaile : function(state, {payload}){
        state.isloading = false;
        state.error = payload;
    },
    putjobrequest : function(state, {payload}){
        state.isloading = true;
    },
    putjobsuccess : function(state, {payload}){
        state.isloading = false;
        state.data = payload;
    },
    putjobfaile : function(state, {payload}){
        state.isloading = false;
        state.error = payload;
    },
  }
});

export const {updatejobrequest,updatejobsuccess,updatejobfaile,putjobrequest,putjobsuccess,putjobfaile} = updatejob.actions

export default updatejob.reducer