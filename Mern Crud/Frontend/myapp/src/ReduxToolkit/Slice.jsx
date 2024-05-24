import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'



// ************** create User


export const createUser = createAsyncThunk('createUser', async (data, { rejectWithValue }) => {

    return axios.post('http://localhost:8999/api/createUser', data)
        .then((res) => {

            return res.data
        })
        .catch((err) => {
            return rejectWithValue(err)
        })

})



// **************get User



export const getUser = createAsyncThunk('getUser', async (data, { rejectWithValue }) => {

    return axios.get('http://localhost:8999/api/getUser', data)
        .then((res) => {

            return res.data
        })
        .catch((err) => {
            return rejectWithValue(err)
        })

})


// **************delete User



export const deleteUser = createAsyncThunk('deleteUser', async (data, { rejectWithValue }) => {

    return axios.delete(`http://localhost:8999/api/deleteUser/${data}`)
        .then((res) => {

            return res.data
        })
        .catch((err) => {
            return rejectWithValue(err)
        })

})

// ************** update User


export const updateUser = createAsyncThunk('updateUser', async (data, { rejectWithValue }) => {
    console.log('id',data);

    return axios.put(`http://localhost:8999/api/updateUser/${data._id}`,data)
        .then((res) => {

            return res.data
        })
        .catch((err) => {
            return rejectWithValue(err)
        })

})



const initialState = {
    
    crud: [],
    loading: false,
    error: null
}


const cartSlice = createSlice({
    name: "Mern Crud",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder

            // ************** create User


            .addCase(createUser.pending, (state, action) => {
                state.loading = true
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.loading = false

                state.crud.push(action.payload.data)


                // console.log(state.crud);
                // console.log(action.payload);
            })
            .addCase(createUser.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })

            // ************** get User


            .addCase(getUser.pending, (state, action) => {
                state.loading = true
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.loading = false

                state.crud = action.payload.data


                // console.log(state.crud);
                // console.log(action.payload);
            })
            .addCase(getUser.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })

            // **************delete User

            .addCase(deleteUser.pending, (state, action) => {
                state.loading = true
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.loading = false
                const { _id } = action.payload.user

                state.crud = state.crud.filter((item) => item._id !== _id)

                // console.log(state.crud);
                // console.log(_id);
            })
            .addCase(deleteUser.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })


            // **************update User

            .addCase(updateUser.pending, (state, action) => {
                state.loading = true
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                state.loading = false
                // const { _id } = action.payload.use
                console.log( action);
                // const ind = state.crud.findIndex((item) => item._id === action.payload.user._id)
                // state.crud[ind] = action.payload.user
                state.crud.push(action.payload.user)

                // console.log(ind);
                // state.crud.map((item)=>console.log(item._id))

                // console.log(state.crud);
                // console.log(action.payload.user);
            })
            .addCase(updateUser.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })


    }

})

export default cartSlice.reducer;