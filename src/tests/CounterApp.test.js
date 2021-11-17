import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import React from 'react';
import CounterApp from '../CounterApp';

describe('Pruebas en CounterApp', () => {
  let wrapper = shallow(<CounterApp />);

  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  });

  test('debe mostrar CounterApp correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe retornar un valor de 100 en el AounterApp', () => {
    const wrapper = shallow(<CounterApp value={100} />);
    const text = wrapper.find('h2').text().trim();

    expect(text).toBe('100');
  });

  test('debe propar el funcionamineto del boton +1', () => {
    wrapper.find('button').at(0).simulate('click');
    const counterText = wrapper.find('h2').text().trim();

    expect(counterText).toBe('11');
  });

  test('debe propar el funcionamineto del boton -1', () => {
    wrapper.find('button').at(2).simulate('click');
    const counterText = wrapper.find('h2').text().trim();

    expect(counterText).toBe('9');
  });

  test('Probando funcionamineto boton reset', () => {
    const wrapper = shallow(<CounterApp value={150} />);

    wrapper.find('button').at(0).simulate('click');

    wrapper.find('button').at(1).simulate('click');
    const counterText1 = wrapper.find('h2').text().trim();

    expect(counterText1).toBe('150');
  });
});
