import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import logger from 'redux-logger';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export default function configureStore(initialState) {
	return createStore(
		rootReducer,
		initialState,
		applyMiddleware(reduxImmutableStateInvariant(),logger())
	);
}