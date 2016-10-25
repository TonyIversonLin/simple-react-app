import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import {ManageCoursePage} from './manageCoursePage';

describe ('Manage Course Page', () => {
	it('sets error message when trying to save empty title', () => {
		const props = {
			authors: [],
			actions: {saveCourse: ()=> {return Promise.resolve();}},
			initialCourse: {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''}
		};
		//this is tesing the connected smart component version
		//const wrapper  = mount(<Provider store={store}><ManageCoursePage/></Provider>);
		const wrapper = mount(<ManageCoursePage {...props}/>);
		const saveButton = wrapper.find('input').last();  //searching all its children
		expect(saveButton.prop('type')).toBe('submit');

		saveButton.simulate('click');
		expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters');
	});
});  