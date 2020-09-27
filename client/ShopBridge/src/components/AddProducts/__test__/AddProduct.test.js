import 'react-native';
import React from 'react';
import findByAttr from '../../../utils';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import AddProduct from '../AddProduct';
import {shallow, mount, render} from 'enzyme';

const setUp = (props = {}) => {
  const component = shallow(<AddProduct {...props} />);
  return component;
};

describe('Addproduct component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('Should renders Add product correctly', () => {
    renderer.create(<AddProduct />);
  });

  it('Should have all fields', () => {
    const wrapper = findByAttr(component, 'addProduct');
    expect(wrapper.length).toBe(1);
  });

  it('Should have submit button', () => {
    const wrapper = findByAttr(component, 'buttonRender');
    expect(wrapper.length).toBe(1);
  });
});
