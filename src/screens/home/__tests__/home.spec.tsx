import React from 'react';

import { render, fireEvent, waitFor } from '@testing-library/react-native';

import Home from '..';

const mockNavigation = jest.fn();

jest.mock('@react-navigation/native', () => (
  {useNavigation: () => ({ navigate: mockNavigation })}
))

describe('home testing', () => {
  it('should home text component', () => {
    const {getByTestId} = render(<Home />);
    const homeTextApp = getByTestId('homeText');
    expect(homeTextApp).toBeTruthy();
  });

  it('should home botton signIn', () => {
    const {getByTestId} = render(<Home />);
    const signInButton = getByTestId('signIn');
    expect(signInButton).toBeTruthy();
  });

  it('should home botton signUp', () => {
    const {getByTestId} = render(<Home />);
    const signUpButton = getByTestId('signUp');
    expect(signUpButton).toBeTruthy();
  });

  it('should home botton google Login', () => {
    const {getByTestId} = render(<Home />);
    const googleButton = getByTestId('googleLogin');
    expect(googleButton).toBeTruthy();
  });

  it('pressable button', async () => {
    const {getByTestId, getByText} = render(<Home />);
    const testButton = getByTestId('testButton');
    const testState = getByTestId('testState');
    fireEvent.press(testButton);
    const textValue = getByText('funcionou!');
    await waitFor(() => expect(testState).toBeTruthy());
    await waitFor( () => expect(textValue.props.children).toEqual('funcionou!'));
  })
})