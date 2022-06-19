const initialState = {
  loading: false,
  data: null,
  error: null,
};

const listMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};

export default listMovieReducer;
