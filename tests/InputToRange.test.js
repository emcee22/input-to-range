import React from 'react';
import { shallow } from 'enzyme';
import { InputToRange } from '../src/index.js';

const changeEv = {
	preventDefault: () => {},
	target: { value: '123' }
};
const keyPressEv = {
	preventDefault: () => {},
	keyCode: 32
};

it('renders without crashing', () => {
	shallow(<InputToRange />);
});

it('checks input changes are working', () => {
	const component = shallow(<InputToRange />);

	component.find('input').simulate('change', changeEv);

	expect(component.find('input').props().value).toBe('123');
});

it('checks if error appears', () => {
	changeEv.target.value = 'not correct input, should show error';
	const component = shallow(<InputToRange />);

	component.find('input').simulate('change', changeEv);
	component.find('input').simulate('keypress', keyPressEv);

	expect(component.find('.InputToRange__Error').exists()).toBeTruthy();
});

it('checks if onChange is called', () => {
	const props = { onChange: jest.fn() };
	changeEv.target.value = '123';
	const component = shallow(<InputToRange {...props} />);
	const spy = jest.spyOn(props, 'onChange');

	component.find('input').simulate('change', changeEv);
	component.find('input').simulate('keypress', keyPressEv);

	expect(spy).toHaveBeenCalled();
});

it('checks if removeLabel works', () => {
	changeEv.target.value = '123';
	const props = { useLabels: true };
	const component = shallow(<InputToRange {...props} />);

	component.find('input').simulate('change', changeEv);
	component.find('input').simulate('keypress', keyPressEv);

	const closeEl = component
		.find('.InputToRange__labels-container')
		.find('.InputToRange__labels-container__label')
		.first()
		.find('.InputToRange__labels-container__label__close');
	closeEl.simulate('click', 0);

	expect(
		component
			.find('.InputToRange__labels-container')
			.find('.InputToRange__labels-container__label')
			.first()
			.find('.InputToRange__labels-container__label__close')
			.exists()
	).toBeFalsy();
});
