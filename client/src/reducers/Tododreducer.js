import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Define initial state
let initialState = [];
const fetch2 = async (msg)=>{
    
        const res = await fetch('http://localhost:5000/create', {
            method: 'POST',
            headers: {
              "Content-Type": 'application/json',
              "authorization": localStorage.getItem('token')
            },
            body: JSON.stringify(msg)
          });
          return res.json()
    
}
// Define async thunk for creating a todo
export const createtodo = createAsyncThunk(
  'createtodo',
  async (msg) => {
    const result = await fetch2(msg)
    return(result)
  }
);
const fetch3= async ()=>{
    const res = await fetch('http://localhost:5000/gettodo',{
        method:'get',
        headers:{
            "Content-type":"application/json",
            "Authorization":localStorage.getItem('token')
        }
    })
    return res.json()
}

const fetch4 = async(id)=>{
    console.log(id)
const res = await fetch(`http://localhost:5000/delete/${id}`,{
    method:"delete",
    headers:{
        "Content-type":"application/json"
    }
})
return res.json()
}

export const deletetodo = createAsyncThunk(
    'delete',
    async (id)=>{
        console.log(id)
        const result = fetch4(id)
        return result
    }
)

export const fetchtodo = createAsyncThunk(
    'fetch',
     async ()=>{
            const  result= await fetch3()
            
            return result
     }
)

// Define slice for todo reducer
const Todoreducer = createSlice({
  name: 'todo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createtodo.fulfilled, (state, action) => {
      state.push(action.payload.msg); // Push the new todo to the state
    });
      builder.addCase(fetchtodo.fulfilled,(state,action)=>{
        return action.payload.data
      })
      builder.addCase(deletetodo.fulfilled,(state,action)=>{
        return state.filter((item) => item._id !== action.payload.data._id);
      })
    
  }

});

// Export the reducer
export default Todoreducer.reducer;
