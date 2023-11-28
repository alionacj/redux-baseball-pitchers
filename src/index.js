import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const pitcherList = (state=['Maud Nelson', 'Ila Borders', 'Don Newcombe', 'CC Sabathia'], action) => {
    if (action.type === 'PITCHER_DISPATCH') {
        const payload = action.payload
        return [...state, payload]
    }
    return state
}

const catcherList = (state=['Roy Campanella', 'Elston Howard', 'Kenji Jojima'], action) => {
    if (action.type === 'CATCHER_DISPATCH') {
        const payload = action.payload
        return [...state, payload]
    }
    return state
}

const baseballStore = createStore(
    combineReducers({
        pitcherList,
        catcherList
    })
)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={baseballStore}>
        <App />
    </Provider>
);
