import React from 'react';
import { cleanup, render } from '@testing-library/react-native';
import TestComponent from '../components/TestComponent';
import { jest } from '@jest/globals';

describe('App construction', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(cleanup);

  it('renders correctly', (done) => {
    const comp = render(<TestComponent />);
    const textComp = comp.getByText('Testing Component');
    expect(textComp).not.toBeUndefined();
    expect(textComp.children[0].type).toMatch('Text');
    done();
  })
});
