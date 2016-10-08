import * as types from './actionTypes';

const Actions = { 
 createCourse: (course) => {
	return {type: types.CREATE_COURSE, course};
	}
};

export default Actions;