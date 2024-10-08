/* the first && second concepts of redux (action && reducer)
 * >>> the create slice automatically will:
 * 1. define action constants for subReducer into the reducers;
 * 2. create action objects for each action;
 * 3. create acion creators for each action object;
 * 4. GENERATE the main [reducer && actions] that we can export them to the store by::
 *
 * it allows us:
 * 1. to composite each action into a single reducer of its own as it finally combine them in one reducer && in one main action;
 * 2. to mutate the state directly as it uses the immer library under the hood;
 *
 */

/* the third concept of redux:
 * >>> the configureStore automatically will:
 * 1. combine the all "reducers" of reducer field under the hood into one main reducer;
 * 2. combining the all "actions" into one which consists of the sliceName/reducerFieldName;
 * 3. combining the all "middleware" into one by the middlware prop method which accepts by default:
 *    a function that returns the list of all middlware so that we can add ours to (concat);
 *
 * the asyncThunk is automatically will:
 * 1. instead of creating a parent actionCreator that returns a function with one argument so that get catched by the thunk middler,
 *    it allows us to create explictly thunk without that restriciton of creation that returns an explicitly promise [axios, fetch];
 * 2. instead of calling the dispastch inside the action function,
 *    it will generates the three transactions of async [pending, fulffiled, reject] that get accessed by the extra reducers;
 *
 */

import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import authReducer from "./slices/authSlice";

const logger = createLogger();

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware(getDefaultMiddles) {
    getDefaultMiddles().concat(logger);
  },
});
