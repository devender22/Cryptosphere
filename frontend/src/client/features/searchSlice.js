import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    query: '',
    suggestions: [],
    loading: false,
    error: null,
  },
  reducers: {
    updateQuery: (state, action) => {
      state.query = action.payload;
    },
    fetchSuggestionsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchSuggestionsSuccess: (state, action) => {
      state.loading = false;
      state.suggestions = action.payload;
    },
    fetchSuggestionsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  updateQuery,
  fetchSuggestionsStart,
  fetchSuggestionsSuccess,
  fetchSuggestionsFailure,
} = searchSlice.actions;



export const selectQuery = (state) => state.search.query;
export const selectSuggestions = (state) => state.search.suggestions;
export const selectLoading = (state) => state.search.loading;
export const selectError = (state) => state.search.error;

export const fetchSuggestions = (query) => async (dispatch) => {
  try {
    dispatch(fetchSuggestionsStart());
    const response = await fetch('/suggestions.json');
    const data = await response.json();
    const suggestions = data
      .filter((item) => item.name.toLowerCase().startsWith(query.toLowerCase()))
      .map((item) => item.name);
    dispatch(fetchSuggestionsSuccess(suggestions));
  } catch (error) {
    dispatch(fetchSuggestionsFailure(error.message));
  }
};

export default searchSlice.reducer;