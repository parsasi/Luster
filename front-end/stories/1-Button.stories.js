import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import TealButton from '../comps/custom_buttons';
import QuizButton from '../comps/quiz_buttons'

export default {
  title: 'Button',
  component: Button,
};

export const MySignInButton = () => <TealButton
  text="Sign In"
/>

export const MySignUpButton = () => <TealButton
  text="Sign Up"
/>

export const MyQuizButton = () => <QuizButton 
  text="Active"
/>