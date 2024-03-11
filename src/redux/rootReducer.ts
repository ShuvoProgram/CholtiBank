import { baseApi } from "./api/baseApi";
import sidebarReducer from "./slices/sidebarSlice";

const rootReducer = {
    sidebar:sidebarReducer,
    [baseApi.reducerPath]: baseApi.reducer,
};

export default rootReducer;