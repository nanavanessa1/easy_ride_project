//responsable de tout ce qui concerne la navigation

import {createSlice} from "@reduxjs/toolkit";


const initialState ={
    origin : null,
    destination:null,
    travelTimeInformation: null
}

export const navSlice = createSlice({
    name:'nav',
    initialState,
    reducer:{
        setOrigin:(state,action) =>{
            state.origin = action.payload;

        },
        setDestination:(state,action) =>{
            state.destination = action.payload;
        },
        setTravelInformation:(state,action) =>{
            state.travelTimeInformation = action.payload;
        },
    },
    

});


export const {setOrigin,setDestination,setTravelInformation}=navSlice.actions;

//selectors
export const SelectOrigin = (state)=> state.nav.origin;
export const SelectDestination = (state)=> state.nav.destination;
export const SelectTravelTimeInformation = (state)=> state.nav.travelTimeInformation;
export default navSlice.reducer;