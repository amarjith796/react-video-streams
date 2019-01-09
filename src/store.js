import { createStore, applyMiddleware, compose } from 'redux'
import { logger } from 'redux-logger';
import videoStreamApp from './reducers';
// import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware'

const middleware = [promise()]; //logger,

const allStoreEnhancers = compose(
    applyMiddleware(...middleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(videoStreamApp, allStoreEnhancers);

export default store;