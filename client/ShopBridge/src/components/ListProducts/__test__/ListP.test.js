import 'react-native';
import React from 'react';
import findByAttr from '../../../utils';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import ListP from '../ListP';

const setUp = (props = {}) => {
  const component = shallow(<ListP {...props} />);
  return component;
};

describe('List Component ', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('Should renders correctly', () => {
    renderer.create(<ListP />);
  });

  it('Should render list of products', () => {
    const wrapper = findByAttr(component, 'listofitems');
    expect(wrapper.length).toBe(1);
  });
});
