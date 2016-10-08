import React, {PropTypes} from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursePage from './components/course/CoursePage';
import ManangeCoursePage from './components/course/manageCoursePage.js';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={HomePage} />
		<Route path="about" component={AboutPage} />
		<Route path="Courses" component={CoursePage} />
		<Route path="Course" component={ManangeCoursePage} />
		<Route path="Course/:id" component={ManangeCoursePage} />
	</Route>
);