import { routerMiddleware as makeRouterMiddleware } from 'connected-react-router';
import { routerHistory } from './Router.history';

// Build the middleware for intercepting and dispatching navigation actions
export const routerMiddleware = makeRouterMiddleware(routerHistory);
