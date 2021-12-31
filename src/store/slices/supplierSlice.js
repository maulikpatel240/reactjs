import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import supplierApiController from "../../services/supplier.service";
import { setMessage } from "./message";

export const usersAdapter = createEntityAdapter();

export const supplierStoreApi = createAsyncThunk("supplier/create", async (formvalues, thunkAPI) => {
  try {
    const resposedata = await supplierApiController
      .create(formvalues, thunkAPI)
      .then((response) => {
        if (response.status == 200) {
          return thunkAPI.fulfillWithValue(response.data);
        } else {
          return thunkAPI.rejectWithValue();
        }
      })
      .catch((error) => {
        const message = (error.response && error.response.data && error.response.data) || error.message || error.toString();
        return thunkAPI.rejectWithValue({ status: error.response.status, message: message });
      });
    return resposedata;
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue({ status: error.response.status, message: message });
  }
});

export const supplierUpdateApi = createAsyncThunk("supplier/update", async (formvalues, thunkAPI) => {
  try {
    const resposedata = await supplierApiController
      .update(formvalues, thunkAPI)
      .then((response) => {
        if (response.status == 200) {
          return thunkAPI.fulfillWithValue(response.data);
        } else {
          return thunkAPI.rejectWithValue();
        }
      })
      .catch((error) => {
        const message = (error.response && error.response.data && error.response.data) || error.message || error.toString();
        return thunkAPI.rejectWithValue({ status: error.response.status, message: message });
      });
    return resposedata;
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue({ status: error.response.status, message: message });
  }
});

export const supplierGridViewApi = createAsyncThunk("supplier/gridview", async (formValues, thunkAPI) => {
  try {
    const resposedata = await supplierApiController
      .view(formValues, thunkAPI)
      .then((response) => {
        if (response.status == 200) {
          return response.data;
        }
      })
      .catch((error) => {
        if (error.response && error.response.status == 422) {
          const message = (error.response && error.response.data && error.response.data) || error.message || error.toString();
        } else if (error.response.status == 401) {
        }
        return thunkAPI.rejectWithValue({ status: error.response.status });
      });
    return resposedata;
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue();
  }
});

export const supplierDetailApi = createAsyncThunk("supplier/detail", async (formValues, thunkAPI) => {
  try {
    const resposedata = await supplierApiController
      .view(formValues, thunkAPI)
      .then((response) => {
        if (response.status == 200) {
          return response.data;
        }
      })
      .catch((error) => {
        if (error.response && error.response.status == 422) {
          const message = (error.response && error.response.data && error.response.data) || error.message || error.toString();
        } else if (error.response.status == 401) {
        }
        return thunkAPI.rejectWithValue({ status: error.response.status });
      });
    return resposedata;
  } catch (error) {
    console.log(error);
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue();
  }
});

export const supplierDeleteApi = createAsyncThunk("supplier/delete", async (formValues, thunkAPI) => {
  try {
    const resposedata = await supplierApiController
      .deleted(formValues, thunkAPI)
      .then((response) => {
        if (response.status == 200) {
          return response.data;
        }
      })
      .catch((error) => {
        const message = (error.response && error.response.data && error.response.data) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
      });
    return resposedata;
  } catch (error) {
    console.log(error);
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    thunkAPI.dispatch(setMessage(message));
    return thunkAPI.rejectWithValue();
  }
});

export const supplierSuggetionListApi = createAsyncThunk("supplier/suggetionlist", async (formValues, thunkAPI) => {
  try {
    const resposedata = await supplierApiController
      .suggetionlist(formValues, thunkAPI)
      .then((response) => {
        if (response.status == 200) {
          return response.data;
        }
      })
      .catch((error) => {
        const message = (error.response && error.response.data && error.response.data) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
      });
    return resposedata;
  } catch (error) {
    console.log(error);
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    thunkAPI.dispatch(setMessage(message));
    return thunkAPI.rejectWithValue();
  }
});

const initialState = {
  isOpenedAddForm: "",
  isOpenedEditForm: "",
  isOpenedDetailModal: "",
  isGridView: [],
  isSuggetionListView: [],
  isDetailData: "",
  isTabView: "grid",
  issupplierDetailTab: "appointment",
  isSort: "",
  isSearchList: "",
};

export const supplierSlice = createSlice({
  name: "supplier",
  initialState,
  reducers: {
    reset: () => initialState,
    openAddSupplierForm: (state = initialState) => {
      state.isOpenedEditForm = "";
      state.isOpenedAddForm = "open";
    },
    closeAddSupplierForm: (state = initialState) => {
      state.isOpenedEditForm = "";
      state.isOpenedAddForm = "";
    },
    openEditSupplierForm: (state = initialState) => {
      state.isOpenedAddForm = "";
      state.isOpenedEditForm = "open";
    },
    closeEditSupplierForm: (state = initialState) => {
      state.isOpenedAddForm = "";
      state.isOpenedEditForm = "";
    },
    openSupplierDetailModal: (state = initialState) => {
      state.isOpenedAddForm = "";
      state.isOpenedDetailModal = "open";
    },
    closeSupplierDetailModal: (state = initialState) => {
      state.isOpenedAddForm = "";
      state.isOpenedDetailModal = "";
    },
    openSupplierSearchList: (state) => {
      state.isSearchList = "open";
    },
    closeSupplierSearchList: (state) => {
      state.isSearchList = "";
    },
  },
  extraReducers: {
    [supplierStoreApi.pending]: (state, action) => {},
    [supplierStoreApi.fulfilled]: (state, action) => {
      state.isGridView.data = [...state.isGridView.data, action.payload];
    },
    [supplierStoreApi.rejected]: (state, action) => {},
    [supplierUpdateApi.pending]: (state, action) => {},
    [supplierUpdateApi.fulfilled]: (state, action) => {
      const { id, ...changes } = action.payload;
      const existingData = state.isGridView.data.find(event => event.id === id);
      if(existingData){
        Object.keys(changes).map((keyName, i) => {
          existingData[keyName] = changes[keyName];
        });
      }
    },
    [supplierUpdateApi.rejected]: (state, action) => {},
    [supplierGridViewApi.pending]: (state, action) => {},
    [supplierGridViewApi.fulfilled]: (state, action) => {
      let old_current_page = state.isGridView.current_page ? state.isGridView.current_page : "";
      let new_current_page = action.payload.current_page ? action.payload.current_page : "";
      let viewdata = state.isGridView && state.isGridView.data;
      let newviewdata = action.payload && action.payload.data;
      state.isGridView = action.payload;
      if (old_current_page && new_current_page && old_current_page < new_current_page && old_current_page != new_current_page) {
        let data = viewdata && newviewdata ? (state.isGridView.data = [...viewdata, ...newviewdata]) : action.payload;
      }
      state.isGridView = action.payload;
    },
    [supplierGridViewApi.rejected]: (state, action) => {
      state.isGridView = [];
    },
    [supplierSuggetionListApi.pending]: (state, action) => {},
    [supplierSuggetionListApi.fulfilled]: (state, action) => {
      let old_current_page = state.isSuggetionListView.current_page ? state.isSuggetionListView.current_page : "";
      let new_current_page = action.payload.current_page ? action.payload.current_page : "";
      let viewdata = state.isSuggetionListView && state.isSuggetionListView.data;
      let newviewdata = action.payload && action.payload.data;
      state.isSuggetionListView = action.payload;
      if (old_current_page && new_current_page && old_current_page != new_current_page) {
        let data = viewdata && newviewdata ? (state.isSuggetionListView.data = [...viewdata, ...newviewdata]) : action.payload;
      }
      state.isSuggetionListView = action.payload;
    },
    [supplierSuggetionListApi.rejected]: (state, action) => {
      state.isSuggetionListView = [];
    },
    [supplierDetailApi.pending]: (state, action) => {},
    [supplierDetailApi.fulfilled]: (state, action) => {
      state.isDetailData = action.payload;
    },
    [supplierDetailApi.rejected]: (state, action) => {
      state.isDetailData = "";
    },
    [supplierDeleteApi.pending]: (state, action) => {
      state.isDeleted = false;
    },
    [supplierDeleteApi.fulfilled]: (state, action) => {
      const { id } = action.payload;
      state.isGridView.data = state.isGridView.data ? state.isGridView.data.filter((item) => item.id != id) : state.isGridView.filter((item) => item.id != id);
    },
    [supplierDeleteApi.rejected]: (state, action) => {},
  },
});
// Action creators are generated for each case reducer function
export const { reset, openAddSupplierForm, closeAddSupplierForm, openEditSupplierForm, closeEditSupplierForm, openSupplierDetailModal, closeSupplierDetailModal, openSupplierSearchList, closeSupplierSearchList } = supplierSlice.actions;
export default supplierSlice.reducer;
