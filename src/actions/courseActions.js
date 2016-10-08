import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

export function loadCourseSuccess(courses) {
	return {type: types.LOAD_COURSES_SUCCESS, courses: courses};
}

export function createCourseSuccess(course) {
	return {type: types.CREATE_COURSE_SUCCESS, course: course};
}

export function updateCourseSucess(course) {
	return {type: types.UPDATE_COURSE_SUCCESS, course: course};
}

export function loadCourses() {
  return function(dispatch) {
   return courseApi.getAllCourses()
      .then(courses => dispatch(loadCourseSuccess(courses)))
      .catch(error => {throw(error);});
  };
} 

export function saveCourse(course) {
	return function(dispatch, getState) {
		return courseApi.saveCourse(course).then(savedCourse => {
			course.id ? dispatch(updateCourseSucess(savedCourse)) :
				dispatch(createCourseSuccess(savedCourse));
		}).catch(error => {
			throw(error);
		});
	};
}