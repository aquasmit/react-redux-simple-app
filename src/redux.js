import {
    applyMiddleware,
    combineReducers,
    createStore,
} from 'redux';

import { reducer as formReducer } from 'redux-form';

import thunk from 'redux-thunk';

// actions.js
export const activateGeod = geod => ({
    type: 'ACTIVATE_GEOD',
    geod,
});

export const closeGeod = () => ({
    type: 'CLOSE_GEOD',
});

// reducers.js
export const geod = (state = {}, action) => {
    switch (action.type) {
        case 'ACTIVATE_GEOD':
            return action.geod;
        case 'CLOSE_GEOD':
            return {};
        default:
            return state;
    }
};

export const reducers = combineReducers({
    geod,
    form:formReducer
});

// store.js
export function configureStore(initialState = {}) {
    const store = createStore(
        reducers,
        initialState,
        applyMiddleware(thunk)
    )
    return store;
};

export const store = configureStore();