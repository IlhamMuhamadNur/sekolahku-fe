import * as actionTypes from "./actions";

const initialState = {
  snackbars: [],
};

// ==============================|| SNACKBAR REDUCER ||============================== //

const snackbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SNACKBAR_OPEN:
      return {
        ...state,
        snackbars: [
          ...state.snackbars,
          {
            id: Date.now(),
            open: true,
            message: action.message || "Terjadi kesalahan. Harap coba lagi.",
            anchorOrigin: action.anchorOrigin || {
              vertical: "top",
              horizontal: "center",
            },
            alertSeverity: action.alertSeverity || "success",
            transition: action.transition || "SlideDown",
            close: action.close !== false,
            actionButton: action.actionButton || false,
          },
        ],
      };
    case actionTypes.SNACKBAR_CLOSE:
      return {
        ...state,
        snackbars: state.snackbars.filter(
          (snackbar) => snackbar.id !== action.id
        ),
      };
    default:
      return state;
  }
};

export default snackbarReducer;
