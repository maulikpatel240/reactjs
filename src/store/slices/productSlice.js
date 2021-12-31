import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productApiController from "../../services/product.service";
import { setMessage } from "./message";

export const productStoreApi = createAsyncThunk("product/create", async (formvalues, thunkAPI) => {
  try {
    const resposedata = await productApiController
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

export const productUpdateApi = createAsyncThunk("product/update", async (formvalues, thunkAPI) => {
  try {
    const resposedata = await productApiController
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

export const productListViewApi = createAsyncThunk("product/listview", async (formValues, thunkAPI) => {
  try {
    const resposedata = await productApiController
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

export const productDetailApi = createAsyncThunk("product/detail", async (formValues, thunkAPI) => {
  try {
    const resposedata = await productApiController
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

export const productDeleteApi = createAsyncThunk("product/delete", async (formValues, thunkAPI) => {
  try {
    const resposedata = await productApiController
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

export const productSuggetionListApi = createAsyncThunk("product/suggetionlist", async (formValues, thunkAPI) => {
  try {
    const resposedata = await productApiController
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
  isOpenedDetailModal: "",
  isListView: [],
  isSuggetionListView: [],
  isDetailData: "",
  isDeleted: false,
  isTabView: "product",
  isproductDetailTab: "appointment",
  isSort: "",
  isSearchList: "",
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    reset: () => initialState,
    openNewProductForm: (state = initialState) => {
      state.isOpenedDetailModal = "";
      state.isOpenedAddForm = "open";
    },
    closeNewProductForm: (state = initialState) => {
      state.isOpenedDetailModal = "";
      state.isOpenedAddForm = "";
    },
    productTabView: (state, action) => {
      state.isOpenedAddForm = "";
      state.isOpenedDetailModal = "";
      state.isTabView = action.payload;
    },
    openproductDetailModal: (state = initialState) => {
      state.isOpenedAddForm = "";
      state.isOpenedDetailModal = "open";
    },
    closeproductDetailModal: (state = initialState) => {
      state.isOpenedAddForm = "";
      state.isOpenedDetailModal = "";
    },
    productDetailTab: (state, action) => {
      state.isproductDetailTab = action.payload;
    },
    productSort: (state, action) => {
      let sort = state.isSort ? state.isSort : {};
      state.isSort = Object.assign(sort, action.payload);
    },
    productSortRemove: (state) => {
      state.isSort = "";
    },
    productOpenSearchList: (state) => {
      state.isSearchList = "open";
    },
    productRemoveSearchList: (state) => {
      state.isSearchList = "";
    },
  },
  extraReducers: {
    [productStoreApi.pending]: (state, action) => {},
    [productStoreApi.fulfilled]: (state, action) => {},
    [productStoreApi.rejected]: (state, action) => {},
    [productListViewApi.pending]: (state, action) => {
      // state.isListView = [];
    },
    [productListViewApi.fulfilled]: (state, action) => {
      let old_current_page = state.isListView.current_page ? state.isListView.current_page : "";
      let new_current_page = action.payload.current_page ? action.payload.current_page : "";
      let viewdata = state.isListView && state.isListView.data;
      let newviewdata = action.payload && action.payload.data;
      state.isListView = action.payload;
      if (old_current_page && new_current_page && old_current_page != new_current_page) {
        let data = viewdata && newviewdata ? (state.isListView.data = [...viewdata, ...newviewdata]) : action.payload;
      }
      state.isListView = action.payload;
    },
    [productListViewApi.rejected]: (state, action) => {
      state.isListView = [];
    },
    [productSuggetionListApi.pending]: (state, action) => {
      // state.isSuggetionListView = [];
    },
    [productSuggetionListApi.fulfilled]: (state, action) => {
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
    [productSuggetionListApi.rejected]: (state, action) => {
      state.isSuggetionListView = [];
    },
    [productDetailApi.pending]: (state, action) => {
      // state.isDetailData = "";
    },
    [productDetailApi.fulfilled]: (state, action) => {
      state.isDetailData = action.payload;
    },
    [productDetailApi.rejected]: (state, action) => {
      state.isDetailData = "";
    },
    [productDeleteApi.pending]: (state, action) => {
      state.isDeleted = false;
    },
    [productDeleteApi.fulfilled]: (state, action) => {
      const { id } = action.payload;
      state.isView = state.isView.data ? state.isView.data.filter((item) => item.id != id) : state.isView.filter((item) => item.id != id);
    },
    [productDeleteApi.rejected]: (state, action) => {
      state.isDeleted = false;
    },
  },
});
// Action creators are generated for each case reducer function
export const { reset, productTabView, openNewProductForm, closeNewProductForm,  productTabGridView, openproductDetailModal, closeproductDetailModal, productDetailTab, productSort, productSortRemove, productOpenSearchList, productRemoveSearchList } = productSlice.actions;
export default productSlice.reducer;
