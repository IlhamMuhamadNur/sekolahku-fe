import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";
import customizationReducer from "./customizationReducer";
import snackbarReducer from "./snackbarReducer";
import accountReducer from "./accountReducer";

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
  customization: customizationReducer,
  snackbar: snackbarReducer,
  account: persistReducer(
    {
      key: "data",
      storage,
      keyPrefix: "sekolahKu@",
    },
    accountReducer
  ),
});

export default reducer;
