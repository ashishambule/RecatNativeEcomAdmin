import 'react-native';
import React from 'react';
import findByAttr from '../../../utils';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import HomeC from '../HomeC';

const setUp = (props = {}) => {
  const component = shallow(<HomeC {...props} />);
  return component;
};

describe('Home Component ', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('Should renders correctly', () => {
    renderer.create(<HomeC />);
  });

  it('Should render logo fields', () => {
    const wrapper = findByAttr(component, 'homelogo');
    expect(wrapper.length).toBe(1);
  });
});
