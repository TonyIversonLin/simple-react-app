import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import CourseForm from './CourseForm';

function setup(status) {
	let props = {
		course: {}, loading: status, errors: {},
		onSave: () => {},
		onChange: () => {} 
	};

	return shallow(<CourseForm {...props}/>);
}

describe('CourseForm via Enzyme', () => {
	it('renders form and h1', () => {
		const wrapper = setup(false);
		expect(wrapper.find('form').length).toBe(1);
		expect(wrapper.find('h1').text()).toEqual('Manage Course');
	});

	it('save button is labeled "Saving" when not saving', () => {
		const wrapper = setup(false);
		expect(wrapper.find('input').props().value).toBe('Saving');	
	});

	it('save button is labeled "Saving..." when not saving', () => {
		const wrapper = setup(true);
		expect(wrapper.find('input').props().value).toBe('Saving...');	
	});
});






