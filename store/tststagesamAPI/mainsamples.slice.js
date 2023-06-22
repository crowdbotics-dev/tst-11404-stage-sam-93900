import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_mainsample_list = createAsyncThunk(
  "mainsamples/api_v1_mainsample_list",
  async payload => {
    const response = await apiService.api_v1_mainsample_list(payload)
    return response.data
  }
)
export const api_v1_mainsample_create = createAsyncThunk(
  "mainsamples/api_v1_mainsample_create",
  async payload => {
    const response = await apiService.api_v1_mainsample_create(payload)
    return response.data
  }
)
export const api_v1_mainsample_retrieve = createAsyncThunk(
  "mainsamples/api_v1_mainsample_retrieve",
  async payload => {
    const response = await apiService.api_v1_mainsample_retrieve(payload)
    return response.data
  }
)
export const api_v1_mainsample_update = createAsyncThunk(
  "mainsamples/api_v1_mainsample_update",
  async payload => {
    const response = await apiService.api_v1_mainsample_update(payload)
    return response.data
  }
)
export const api_v1_mainsample_partial_update = createAsyncThunk(
  "mainsamples/api_v1_mainsample_partial_update",
  async payload => {
    const response = await apiService.api_v1_mainsample_partial_update(payload)
    return response.data
  }
)
export const api_v1_mainsample_destroy = createAsyncThunk(
  "mainsamples/api_v1_mainsample_destroy",
  async payload => {
    const response = await apiService.api_v1_mainsample_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const mainsamplesSlice = createSlice({
  name: "mainsamples",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_mainsample_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_mainsample_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_mainsample_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_mainsample_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_mainsample_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_mainsample_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_mainsample_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_mainsample_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_mainsample_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_mainsample_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_mainsample_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_mainsample_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_mainsample_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_mainsample_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_mainsample_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_mainsample_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_mainsample_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_mainsample_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_mainsample_list,
  api_v1_mainsample_create,
  api_v1_mainsample_retrieve,
  api_v1_mainsample_update,
  api_v1_mainsample_partial_update,
  api_v1_mainsample_destroy,
  slice: mainsamplesSlice
}
