// import { create } from '@mui/material/styles/createTransitions'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
const initialState = [];
const sittersSlice = createSlice({
    name: 'sitters',
    initialState,
    reducers: {
        getSitters(state, action) {
            return [...action.payload]
        }
    }
})

export const fetchSitters = createAsyncThunk(
    'sitters/fetchSitters',
    async(api, { dispatch }) => {
        return (
            await fetch(api)
            .then(r => r.json())
            .then(sitters => dispatch(getSitters(sitters)))
        )
    }
)
export const { getSitters } = sittersSlice.actions
export default sittersSlice.reducer





