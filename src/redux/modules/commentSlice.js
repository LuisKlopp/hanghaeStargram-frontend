import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getCookieToken, getRefreshToken } from "../../Cookie";

const initialState = {
  comments: [],
  isLoading: false,
  error: null,
};

export const getDetailComments = createAsyncThunk(
  "comments/getComment",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(`https://01192mg.shop/api/comments/${payload}`);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addCommentList = createAsyncThunk(
  "comment/addComment",
  async (newList) => {
    const response = await axios.post(`https://01192mg.shop/api/auth/comments/${newList.id}`, newList.content,
      {
        headers: {
            "Content-Type": `application/json`,
            "Authorization": getCookieToken(),
            "refresh-token": getRefreshToken()
          }
  });
  return response.data
  })

export const editContent = createAsyncThunk("comment/editComment", async (payload) => {
  const response = await axios.put(`https://01192mg.shop/api/auth/comments/${payload.id}`, { content: payload.content },
  {
    headers: {
        "Content-Type": `application/json`,
        "Authorization": getCookieToken(),
        "refresh-token": getRefreshToken()
      }
});
    return { payload }
  })

export const deleteContent = createAsyncThunk("commet/deleteComment", async (id) => {
    const response = await axios.delete(`https://01192mg.shop/api/auth/comments/${id}`,{
      headers: {
          "Content-Type": `application/json`,
          "Authorization": getCookieToken(),
          "refresh-token": getRefreshToken()
        }
  });
    return id
  })
  


export const commentSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: {
    [getDetailComments.fulfilled]: (state, action) => {
      state.comments = action.payload;
    },
    [getDetailComments.rejected]: (state, action) => {
      state.isLoading = false
    },
    [addCommentList.fulfilled]: (state, action) => 
    { state.comments.data.push(action.payload.data) },
    
    [editContent.fulfilled]: (state, { payload }) => {
      state.comments.data = state.comments.data.map((comment) =>
      comment.id === payload.payload.id
          ? { ...comment, content: payload.payload.content }
          : comment
      )
    },
    [deleteContent.fulfilled]: (state, { payload }) => { 
      state.comments.data = state.comments.data.filter((comment) => comment.id !==  payload)
    },

  },
})

export default commentSlice.reducer;