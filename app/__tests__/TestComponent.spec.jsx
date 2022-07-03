import React from 'react-native';
import {
	render,
	screen,
	fireEvent,
} from '@testing-library/react-native';
import TestComponent from '../components/TestComponent';

test('renders correctly', () => {
  const comp = render(<TestComponent />);
  const textComp = screen.getByText('Testing Component')
  expect(textComp).not.toBeUndefined();
  expect(textComp.children[0].type).toMatch('Text');
});
