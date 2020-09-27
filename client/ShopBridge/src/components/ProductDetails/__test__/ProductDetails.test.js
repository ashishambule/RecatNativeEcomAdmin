import 'react-native';
import React from 'react';
import findByAttr from '../../../utils';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import ProductDetails from '../ProductDetails';

const setUp = (props = {}) => {
  const component = shallow(<ProductDetails {...props} />);
  return component;
};

describe('Product details component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('Should renders correctly', () => {
    renderer.create(<ProductDetails />);
  });

  it('Should render details of products', () => {
    const wrapper = findByAttr(component, 'details');
    expect(wrapper.length).toBe(1);
  });
});
