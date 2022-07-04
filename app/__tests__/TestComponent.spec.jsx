import React from 'react';
import {
	render
} from '@testing-library/react-native';
import TestComponent from '../components/TestComponent';

test('renders correctly', (done) => {
  const comp = render(<TestComponent />);
  const textComp = comp.getByText('Testing Component')
  expect(textComp).not.toBeUndefined();
  expect(textComp.children[0].type).toMatch('Text');
  done();
});
