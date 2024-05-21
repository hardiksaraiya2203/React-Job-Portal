import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isloading : false,
    data : null,
    error: null,
    listData: []
}

const ViewApplivastionSlice = createSlice({
  name: "Viewapplication",
  initialState,
  reducers: {
    viewgetJobrequest : function(state, {payload}){
        state.isloading = true;
    },
    viewsucgetJobrequest : function(state, {payload}){
        state.isloading = false;
        state.listData = payload;
    },
    viewfailgetJobrequest : function(state, {payload}){
        state.isloading = false;
        state.error = payload;
    },
    advancesearchviewgetJobrequest : function(state, {payload}){
        state.isloading = true;
    },
    advancesearchviewsucgetJobrequest : function(state, {payload}){
        state.isloading = false;
        state.listData = payload;
    },
    advancesearchviewfailgetJobrequest : function(state, {payload}){
        state.isloading = false;
        state.error = payload;
    },
  }
});

export const {viewgetJobrequest,viewsucgetJobrequest,viewfailgetJobrequest,advancesearchviewgetJobrequest,advancesearchviewsucgetJobrequest,advancesearchviewfailgetJobrequest} = ViewApplivastionSlice.actions

export default ViewApplivastionSlice.reducer