import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.courses, action) {
	switch(action.type) {
		
		case types.LOAD_COURSES_SUCCESS:
			return action.courses;

		case types.CREATE_COURSE_SUCCESS:
			return [
				...state,   //the ... not only create a new instance, but also exploding state into an array
				Object.assign({}, action.course)
			];

		case types.UPDATE_COURSE_SUCCESS:
			return [
				...state.filter(course => course.id !== action.course.id),
				Object.assign({}, action.course)
			];

		default:
			return state;
	}
}