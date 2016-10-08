import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';

class ManageCoursePage extends React.Component {
	constructor (props, context) {
		super(props, context);
		this.state = {
			course: Object.assign({}, this.props.initialCourse),
			errors: {}
		};
		this.updateCourseState = this.updateCourseState.bind(this);
		this.saveCourse = this.saveCourse.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		if(this.props.initialCourse.id != nextProps.initialCourse.id) {
			//necessary to populate form when existing course is loaded directly.
			this.setState({course: Object.assign({}, nextProps.initialCourse)});
		}
	}

	updateCourseState(event) {
		const field = event.target.name;
		let course = this.state.course;
		course[field] = event.target.value;
		return this.setState({course: course});
	}

	saveCourse(event) {
		event.preventDefault();
		this.props.actions.saveCourse(this.state.course);
		this.context.router.push('/Courses');
	}

	render () {
		return (
			<div>
				<CourseForm 
					allAuthors={this.props.authors}
					onChange={this.updateCourseState}
					onSave={this.saveCourse}
					course={this.state.course}
					errors={this.state.errors}
				/>
			</div>
		);
	}
}

ManageCoursePage.propTypes = {
	initialCourse: PropTypes.object.isRequired,
	authors: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired
};

//pull in the react router context so router is available on this.context.router
ManageCoursePage.contextTypes = {
	router: PropTypes.object
};

function getCourseById(courses, id) {
	const course = courses.filter(course => course.id==id);
	if (course) return course[0];
	return null;
}

function mapStateToProps(state, ownProps) {
	const courseId = ownProps.params.id;   //from the path '/course/:id'
	let initialCourse = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};
	
	if (courseId && state.courses.length>0) { //making sure the ajax request is done
		initialCourse = getCourseById(state.courses, courseId);
	}

	const authorsFormattedForDropdown = state.authors.map(author => {
		return {
			value: author.id,
			text: author.firstName + ' ' + author.lastName
		};
	});

	return {
		initialCourse: initialCourse,
		authors: authorsFormattedForDropdown
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(courseActions, dispatch)
	};
}

export default connect(mapStateToProps,mapDispatchToProps)(ManageCoursePage);