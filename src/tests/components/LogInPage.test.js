import React from 'react';
import { shallow } from 'enzyme';
import { LogInPage } from '../../components/LogInPage';

test('should render LogInPage correctly', () => {
    const wrapper = shallow(<LogInPage startLogIn={startLogIn} />);
    expect(wrapper).toMatchSnapshot();
});

test('should call startLogIn on button click', () => {
    const startLogIn = jest.fn();
    const wrapper = shallow(<LogInPage startLogIn={startLogIn} />);
    wrapper.find('button').prop('onClick')();
    expect(startLogIn).toHaveBeenCalled();
});