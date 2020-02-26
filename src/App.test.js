// import React from 'react';
// import { render } from '@testing-library/react';
// import renderer from 'react-test-renderer'
// import App from './App';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// it('render the element vs snapshot', () =>{
//   const component = renderer.create(<App />)
//   let tree = component.toJSON()
//   expect(tree).toMatchSnapshot()
// })

// it('render a <p> element', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/Edit/i);
//   expect(linkElement).toBeInTheDocument();
// })

import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import App from './App'

describe('Mejor App testing', () => {
  it('should render an Edit', () => {
    const wrapper = shallow(<App />)
    const parrafo = wrapper.find('p')
    const result = parrafo.at(1).text()
    // const result = parrafo.text()
    // console.log(result)
    // expect(result).toBe("")
    // expect(result).toEqual(expect.stringContaining('Edit'))
    expect(result).toEqual(expect.stringContaining('Edit'))
  })

  it('render the element vs snapshot', () =>{
    const component = renderer.create(<App />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})

