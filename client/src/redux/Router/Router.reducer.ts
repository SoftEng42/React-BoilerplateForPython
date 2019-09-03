import { connectRouter } from "connected-react-router";
import { routerHistory } from "./Router.history";

export const routerReducer =  connectRouter(routerHistory)
